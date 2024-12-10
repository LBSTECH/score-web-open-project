import express from 'express';
import ctrl from './user.ctrl';

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/', ctrl.index);
router.get('/testUser/:limit', ctrl.testUser);

export default router;