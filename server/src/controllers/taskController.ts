import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTasks = async (req: Request, res: Response): Promise<void> => {
  const { projectId } = req.query;
  try {
    const tasks = await prisma.task.findMany({
      where: {
        projectId: Number(projectId),
      },
      include: {
        author: true,
        assignee: true,
        comments: true,
        attachments: true,
      },
    });
    res.json(tasks);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error retrieving tasks: ${error.message}` });
  }
};

export const createTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  const {
    title,
    description,
    status,
    priority,
    tags,
    startDate,
    dueDate,
    projectId,
    authorUserId,
    assignedUserId,
  } = req.body;

  try {
    console.log("Creating task with data:");
    console.log(title, description, status, priority, tags, startDate, dueDate, projectId, authorUserId, assignedUserId);

    if (!projectId || !authorUserId || !assignedUserId) {
      res.status(400).json({ message: "Project ID, Author User ID, and Assigned User ID are required" });
      return;
    }
    if (assignedUserId === authorUserId) {
      res.status(400).json({ message: "Assigned User ID cannot be the same as Author User ID" });
      return;
    }
    if (!title || !status || !priority) {
      res.status(400).json({ message: "Title, status, and priority are required" });
      return;
    }

  const newTask = await prisma.task.create({
  data: {
    title,
    description,
    status,
    priority,
    tags,
    startDate: new Date('2023-01-10T00:00:00.000Z'),  // Date format
    dueDate: new Date('2023-01-10T00:00:00.000Z'),    // Date format
    points: 0, // Default points, can be adjusted later
    projectId,
    authorUserId,
    assignedUserId,
  },
});


    res.status(201).json(newTask);
  } catch (error: any) {
    console.error("Error creating task:", error); 
    res.status(500).json({ message: `Error creating task: ${error.message}` });
  }
};


export const updateTaskStatus = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { taskId } = req.params;
  const { status } = req.body;
  try {
    const updatedTask = await prisma.task.update({
      where: {
        id: Number(taskId),
      },
      data: {
        status: status,
      },
    });
    res.json(updatedTask);
 } catch (error: any) {
  console.error("Error creating task:", error); // Add this
  res.status(500).json({ message: `Error creating a task: ${error.message}` });
}

};

export const getUserTasks = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userId } = req.params;
  try {
    const tasks = await prisma.task.findMany({
      where: {
        OR: [
          { authorUserId: Number(userId) },
          { assignedUserId: Number(userId) },
        ],
      },
      include: {
        author: true,
        assignee: true,
      },
    });
    res.json(tasks);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error retrieving user's tasks: ${error.message}` });
  }
};