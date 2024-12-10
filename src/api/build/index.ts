import express from 'express';
import ctrl from './init.ctrl';

const router = express.Router();

router.get('/point-dgrp-data/:idx_point',ctrl.dgrp);
router.get('/point-door-typ/:idx_point',ctrl.door_typ);

export default router;