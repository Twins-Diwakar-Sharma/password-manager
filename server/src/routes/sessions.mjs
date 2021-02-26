import express from 'express';
import SessionsController from '../controllers/sessions.mjs';

const router = express.Router();

// TODO: @utkarsh Fix this route
router.get('/', function (req, res) {
  res.send('Sessions home page');
});

router.get('/login', SessionsController.login);;

router.get('/logout', SessionsController.logout);;

export default router;