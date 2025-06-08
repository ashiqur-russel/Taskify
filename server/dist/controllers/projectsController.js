"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProject = exports.getProjects = void 0;
const default_1 = require("../../prisma/generated/client/default");
const prisma = new default_1.PrismaClient();
const getProjects = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const project = yield prisma.project.findMany();
        res.status(200).json(project);
    }
    catch (error) {
        console.error("Error Loading projects data from Database", error);
        res.status(500).json({ message: "Error Findinf Projects" });
    }
});
exports.getProjects = getProjects;
const createProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description, startDate, endDate } = req.body;
        const data = { name, description, startDate, endDate };
        console.log(data);
        if (!name || !description || !startDate || !endDate) {
            res.status(400).json({ message: "Missing required fields" });
            return;
        }
        const newProject = yield prisma.project.create({
            data: {
                name,
                description,
                startDate: new Date(startDate),
                endDate: new Date(endDate),
            },
        });
        res.status(201).json(newProject);
    }
    catch (error) {
        console.error("Error saving project:", error.message);
        if (error.code === 'P2002') {
            res.status(400).json({ message: "A project with this ID already exists" });
        }
        else {
            res.status(500).json({ message: "Error creating project", error: error.message });
        }
    }
});
exports.createProject = createProject;
