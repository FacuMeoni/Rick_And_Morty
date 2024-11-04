import { Router } from "express";
import {getAllCharacters} from '../controllers/characters_controller.js';

const router = Router();

router.get("/", getAllCharacters);

export default router;