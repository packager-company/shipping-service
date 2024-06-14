import express from "express";
import { listarHistorialEnvios } from "../../dependencies";

const router = express.Router();

router.get("/historial-envios", async (req, res) => {
  try {
    const historialEnvios = await listarHistorialEnvios.execute();
    res.json(historialEnvios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving historical shipments" });
  }
});

export default router;