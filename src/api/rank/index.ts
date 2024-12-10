import express from 'express';
import ctrl from './rank.ctrl';

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/', ctrl.index);

router.get('/month', ctrl.rankMonth);

export default router;