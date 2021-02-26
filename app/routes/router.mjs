import express from 'express'
import { contrGetPass } from '../controllers/passControl.mjs'
import { contrNewPass } from '../controllers/newPassControl.mjs'
import { contrUpdPass } from '../controllers/updatePassControl.mjs'
import { contrDelPass } from '../controllers/deletePassControl.mjs'
const router = express.Router();

router.post('/get-pass', contrGetPass);
router.post('/new-pass', contrNewPass);
router.post('/update-pass', contrUpdPass);
router.post('/delete-pass', contrDelPass);

export {router}
