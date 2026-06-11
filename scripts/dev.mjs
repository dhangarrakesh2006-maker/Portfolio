import { spawn } from 'node:child_process';
import readline from 'node:readline';

const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const children = new Set();

function pipeWithPrefix(stream, prefix) {
  const lineReader = readline.createInterface({ input: stream });
  lineReader.on('line', (line) => {
    process.stdout.write(`[${prefix}] ${line}\n`);
  });
}

function startScript(name) {
  const child = spawn(npmCommand, ['run', name], {
    cwd: process.cwd(),
    stdio: ['inherit', 'pipe', 'pipe'],
  });

  children.add(child);
  pipeWithPrefix(child.stdout, name);
  pipeWithPrefix(child.stderr, name);

  child.on('exit', (code) => {
    children.delete(child);

    if (name === 'dev:server' && code && code !== 0) {
      process.stdout.write(
        '[dev:server] Server process exited early. The frontend can still run, but API routes will stay unavailable until backend dependencies are installed.\n',
      );
      return;
    }

    if (name === 'dev:client') {
      for (const runningChild of children) {
        runningChild.kill('SIGINT');
      }
      process.exit(code ?? 0);
    }
  });

  return child;
}

function shutdown() {
  for (const child of children) {
    child.kill('SIGINT');
  }
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

startScript('dev:server');
startScript('dev:client');
