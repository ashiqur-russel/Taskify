"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const projectsController_1 = require("../controllers/projectsController");
const router = (0, express_1.Router)();
router.get("/", projectsController_1.getProjects);
router.post("/create", projectsController_1.createProject);
exports.default = router;
