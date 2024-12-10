import express from 'express';
import ctrl from './init.ctrl';

const router = express.Router();

router.get('/area',ctrl.area);
router.get('/sidebar/:idx_area',ctrl.sideBar);

export default router;