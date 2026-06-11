import ContactMessage from '../models/ContactMessage.js';
import { isDatabaseReady } from '../config/db.js';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function createContactMessage(req, res, next) {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'All contact form fields are required.' });
    }

    if (!emailPattern.test(email)) {
      return res.status(400).json({ message: 'Please provide a valid email address.' });
    }

    if (!isDatabaseReady()) {
      return res.status(503).json({
        message:
          'Message service is not configured yet. Add a valid MongoDB connection string to enable submissions.',
      });
    }

    const savedMessage = await ContactMessage.create({
      name,
      email,
      subject,
      message,
    });

    return res.status(201).json({
      message: 'Your message was sent successfully.',
      id: savedMessage._id,
    });
  } catch (error) {
    return next(error);
  }
}
