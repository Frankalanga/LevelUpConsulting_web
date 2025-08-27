const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

const app = express();
// Railway sets PORT environment variable, fallback to SERVER_PORT or 5001
const PORT = process.env.PORT || process.env.SERVER_PORT || 5001;

app.use(cors());
app.use(express.json());

// Serve static files from the React build folder in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../build')));
}

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ ok: true, timestamp: new Date().toISOString() });
});

// Contact endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, company, phone, service, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: 'Missing required fields' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ ok: false, error: 'Invalid email format' });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: `LevelUp Website <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO || 'levelupconsultinges@gmail.com',
      subject: `Nuevo mensaje de contacto: ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\nEmpresa: ${company || '-'}\nTeléfono: ${phone || '-'}\nServicio: ${service || '-'}\n\nMensaje:\n${message}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Empresa:</strong> ${company || '-'}</p>
        <p><strong>Teléfono:</strong> ${phone || '-'}</p>
        <p><strong>Servicio:</strong> ${service || '-'}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    res.json({ ok: true, message: 'Email sent successfully' });
  } catch (err) {
    console.error('Email error:', err);
    res.status(500).json({ ok: false, error: 'Failed to send email' });
  }
});

// Serve React app for any other routes in production
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
  });
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server listening on port ${PORT}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`📧 Mail User: ${process.env.MAIL_USER || 'not set'}`);
  console.log(`🔑 Mail Pass: ${process.env.MAIL_PASS ? '***set***' : 'not set'}`);
  console.log(`📬 Mail To: ${process.env.MAIL_TO || 'not set'}`);
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully');
  process.exit(0);
});


