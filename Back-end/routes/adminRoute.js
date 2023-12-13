import express from 'express';
const router = express.Router();

import * as adminController from '../controllers/adminController.js';

router.get('/', adminController.getAdmins);
router.get('/:id', adminController.getAdmin);
router.post('/', adminController.createAdmin);
router.put('/:id', adminController.updateAdmin);
router.delete('/:id', adminController.deleteAdmin);

export default router;