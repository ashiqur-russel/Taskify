import { PrismaClient } from "../../prisma/generated/client/default";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getProjects = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const project = await prisma.project.findMany();
    res.status(200).json(project);
  } catch (error) {
    console.error("Error Loading projects data from Database", error);
    res.status(500).json({ message: "Error Findinf Projects" });
  }
};

export const createProject = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, description, startDate, endDate } = req.body;

    const data = { name, description, startDate, endDate };
    console.log(data)

    if (!name || !description || !startDate || !endDate) {
      res.status(400).json({ message: "Missing required fields" });
      return;
    }

    const newProject = await prisma.project.create({
      data: {
        name,
        description,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
      },
    });

    res.status(201).json(newProject);
  } catch (error: any) {
    console.error("Error saving project:", error.message);
    if (error.code === 'P2002') {
      res.status(400).json({ message: "A project with this ID already exists" });
    } else {
      res.status(500).json({ message: "Error creating project", error: error.message });
    }
  }
};


