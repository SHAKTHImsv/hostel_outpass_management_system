import express from 'express'
const router = express.Router();
import { ApplyPass, getall, getapassbyid, deletepass } from '../controller/ApplyController.js'
import nodemailer from 'nodemailer'

// Keep your existing routes
router.post("/outpass", ApplyPass)
router.get("/outpass", getall)
router.get("/outpass/:id", getapassbyid)
router.delete('/outpass/:id', deletepass)

// 1. Setup the transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rajappan7497@gmail.com',
    pass: 'qzbr ytkj znbk pcaz' 
  },
  tls: {
    rejectUnauthorized: false // Helps if you are on a network with a proxy
  }
});

// 2. FIX: Use router.post instead of app.post
router.post('/send-outpass-email', async (req, res) => {
  const { email, name, status } = req.body;

  const mailOptions = {
    from: 'rajappan7497@gmail.com',
    to: email,
    subject: `Outpass Request ${status}`,
    text: `Dear ${name},\n\nYour outpass request has been ${status.toUpperCase()} by the Warden.\n\nRegards,\nHostel Management`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Mail Error:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
});

export default router;