import { Router } from "express";
import * as playerController from "./controllers/players-controllers";
import * as clubsController from "./controllers/clubs-controller";

const router = Router();

router.get("/players", playerController.getPlayer);
router.post("/players", playerController.postPlayer);
router.delete("/players/:id",playerController.deletePlayerById);
router.patch("/players/:id",playerController.updatePlayerById);
router.get("/players/:id",playerController.getPlayerById);

router.get("/clubs",clubsController.getClubs);
export default router;