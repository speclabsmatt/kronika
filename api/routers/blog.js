import { Router } from "express";

var router = Router();

router.get("/", function (req, res) {
  res.json({ "express" : "true" });
});

router.get("/entry/:entryId", function (req, res) {
  res.send(req.params.entryId);
});

export default router;
