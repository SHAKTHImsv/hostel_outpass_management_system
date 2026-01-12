import express from 'express';
import { createContact, getContacts } from '../controller/ContactController.js';
const router=express.Router();

router.post('/queries',createContact)
router.get('/queries',getContacts)

export default router;