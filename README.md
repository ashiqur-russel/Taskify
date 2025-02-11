
<div align="center">

![logo](https://github.com/ashiqur-russel/Taskify/blob/master/client/public/taskify-logo.png)



  <p align="center">

TASKiFY is a project management dashboard app built with **Next.js**. It allows teams to efficiently manage tasks, track project progress, and collaborate in real-time. The app features a dynamic interface with both **light and dark mode**, along with smooth sidebar transitions and state management powered by **Redux Toolkit**.
    <br />
    <br />
    <br />
    <a href="https://taskify-client-two.vercel.app/projects/1">View Demo</a>
    ·
    <a href="https://github.com/ashiqur-russel/Taskify/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/ashiqur-russel/Taskify/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

## About The Project

TASKiFY is designed to simplify project management by providing a powerful, intuitive interface with features like dark/light themes, task tracking, and real-time collaboration for teams.

## Data Model

The **TASKiFY** data model is the backbone of the project management system, allowing for efficient task management, user collaboration, and team organization. The diagram below represents the core entities and their relationships within the system:

## Data Model

The following is a representation of the key entities in **TASKiFY** and how they relate to each other. The data model allows teams to collaborate effectively on tasks and projects.

![image](https://github.com/ashiqur-russel/Taskify/blob/master/client/public/er-diagram.png)


### Key Entities and Fields

| **Entity**      | **Description**                                                                                            | **Key Fields**                                                                                                                                                            | **Relationships**                                                                                                  |
|-----------------|------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| **Task**        | Represents individual tasks assigned to team members.                                                       | `title`, `description`, `status`, `priority`, `startDate`, `dueDate`, `projectId`, `assignedUserId`, `authorUserId`                                                      | Linked to a project (`projectId`), and assigned to users (`assignedUserId`, `authorUserId`).                       |
| **User**        | Represents a team member who can manage tasks and projects.                                                 | `username`, `profilePictureUrl`, `teamId`                                                                                                                                 | Linked to teams (`teamId`) and tasks via `TaskAssignment`.                                                        |
| **Project**     | Represents a project that contains a collection of tasks.                                                   | `name`, `description`, `startDate`, `endDate`                                                                                                                             | Contains multiple tasks (`projectId`).                                                                             |
| **Team**        | Represents a team responsible for completing projects.                                                     | `teamName`, `productOwnerUserId`, `projectManagerUserId`                                                                                                                  | Linked to multiple projects via `ProjectTeam`.                                                                    |
| **Comment**     | Allows users to comment on specific tasks for collaboration.                                                | `text`, `taskId`, `userId`                                                                                                                                               | Linked to tasks (`taskId`) and users (`userId`).                                                                  |
| **Attachment**  | Represents files or documents attached to tasks for better context and collaboration.                       | `fileURL`, `fileName`, `taskId`                                                                                                                                          | Linked to tasks (`taskId`).                                                                                       |
| **TaskAssignment** | Links tasks to users, showing which user is responsible for a specific task.                                | `userId`, `taskId`                                                                                                                                                       | Each user (`userId`) is assigned a task (`taskId`).                                                               |
| **Project Team** | Links teams to projects, indicating which team is working on a specific project.                             | `teamId`, `projectId`                                                                                                                                                    | Each team (`teamId`) is assigned to work on a project (`projectId`).                                               |

### Key Relationships

| **Relationship**                 | **Description**                                                                 |
|-----------------------------------|---------------------------------------------------------------------------------|
| **Task - User**                   | Tasks are linked to users via the `TaskAssignment` table, showing responsibility.|
| **Project - Task**                | Projects contain multiple tasks. Each task is linked to a project.               |
| **Team - Project**                | Teams can manage multiple projects through the `ProjectTeam` table.              |
| **Comment - Task**                | Comments are linked to tasks, allowing for communication within tasks.           |
| **Attachment - Task**             | Attachments provide additional context to tasks and are linked to tasks.         |
| **User - Team**                   | Each user belongs to a team, and a team can handle multiple projects.            |

---

### Why It Matters

This data model is designed to provide **scalability** and **efficiency** for team-based project management, ensuring seamless collaboration across tasks, teams, and projects. 

- **Accountability**: Each task is clearly assigned to a user, ensuring responsibility is well-defined.
- **Collaboration**: Comments and attachments allow for smooth communication and file sharing within tasks.
- **Project Overview**: Managers can easily track which teams are working on specific projects and monitor progress.

## Product Images
  ![product-image-2](https://github.com/ashiqur-russel/Taskify/blob/master/client/public/taskify-client-2.png.png)
![product-image-1](https://github.com/ashiqur-russel/Taskify/blob/master/client/public/taskify-client-1.png)



## Work In Progress 🚧

This project is currently under development, and more features are being added. Here’s what has been implemented so far and what’s planned:

### Features Completed
- ✅ **Dark/Light Mode**: Toggle between dark and light themes for a better user experience.
- ✅ **Sidebar Transitions**: Smooth animations for sidebar interactions.
- ✅ **Task Management**: Add, edit, and delete tasks.
- ✅ **Real-Time Collaboration**: Teams can collaborate on tasks with updates reflected in real time.

### Features in Progress
- 🔄 **Project Dashboard**: A comprehensive dashboard to view and track multiple projects.
- 🔄 **User Roles**: Assign different roles like Admin, Team Member, and Project Manager.
- 🔄 **File Attachments**: Attach and manage files within tasks for better task context.

### Upcoming Features
- 🛠 **Notifications**: Real-time notifications for task assignments and updates.
- 🛠 **Team Analytics**: View detailed analytics on team performance and task progress.
- 🛠 **API Integration**: Connect to third-party tools like Slack and Jira for better workflow management.

See the [open issues](https://github.com/ashiqur-russel/Next-Taskify/issues) for a full list of proposed features and known issues.

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

## Technology Stack

- ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white) 
- ![Redux Toolkit](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white) 
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) 
- ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
- ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)



<!-- MARKDOWN LINKS & IMAGES -->



[stars-shield]: https://img.shields.io/github/stars/ashiqur-russel/Next-Taskify.svg?style=for-the-badge
[stars-url]: https://github.com/ashiqur-russel/Next-Taskify/stargazers
[issues-shield]: https://img.shields.io/github/issues/ashiqur-russel/Next-Taskify.svg?style=for-the-badge
[issues-url]: https://github.com/ashiqur-russel/Next-Taskify/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/ashiq-dev
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Redux-url]: https://redux-toolkit.js.org/
[TailwindCSS-url]: https://tailwindcss.com/
[TypeScript-url]: https://www.typescriptlang.org/
