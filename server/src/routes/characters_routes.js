import { Router } from "express";
import { tryCatch } from "../utils/try_catch.js";
import {getAllCharacters, getCharacterById} from '../controllers/characters_controller.js';

const router = Router();

router.get("/", tryCatch(getAllCharacters));

router.get('/:id', tryCatch(getCharacterById));

export default router;