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
    const newProject = await prisma.project.create({
      data: {
        name,
        description,
        startDate,
        endDate,
      },
    });
    res.status(201).json(newProject);
  } catch (error) {
    console.error("Error saving project on database", error);
    res.status(500).json({ message: "Error creating Project" });
  }
};
