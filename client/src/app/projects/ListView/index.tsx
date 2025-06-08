import Header from '@/components/Header';
import { Priority, Status, useGetTasksQuery } from '@/state/api';
import Image from 'next/image';
import React from 'react';
import { format } from 'date-fns';
import { Task as TaskType } from '@/state/api';

type ListProps = {
  id: string;
  setIsModalNewTaskOpen: (isOpen: boolean) => void;
};

type TaskProps = {
  task: TaskType;
};

function ListView({ id, setIsModalNewTaskOpen }: ListProps) {
  const {
    data: tasks,
    error,
    isLoading,
  } = useGetTasksQuery({ projectId: Number(id) });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred while fetching tasks</div>;
  return (
    <div className='px-4 pb-8 dark:text-white xl:px-6'>
      <div className='pt-5'>
        <Header
          name='List'
          buttonComponent={
            <button
              className='flex items-center rounded bg-blue-primary px-3 py-2 text-white hover:bg-blue-600'
              onClick={() => setIsModalNewTaskOpen(true)}
            >
              Add Task
            </button>
          }
          isSmallText
        />
      </div>

      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {tasks &&
          tasks.map((task) => (
            <div
              key={task.id}
              className='flex h-full flex-col rounded-lg border border-gray-200 bg-white p-5 shadow-md transition-shadow hover:shadow-lg dark:border-gray-700 dark:bg-dark-secondary'
            >
              <div className='mb-3'>
                {task.attachments && task.attachments.length > 0 && (
                  <Image
                    src={`/${task.attachments[0].fileURL}`}
                    alt={task.attachments[0].fileName}
                    width={400}
                    height={200}
                    className='h-40 w-full rounded-md object-cover'
                  />
                )}
              </div>
              <div className='mt-2 mb-4 flex space-x-2 justify-between items-center'>
              <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                {task.title || 'Untitled Task'}

            
              </h3>
              <span
                  className={`rounded px-2 py-1 ${
                    task.status === Status.ToDo
                      ? 'bg-blue-200 text-blue-700'
                      : task.status === Status.WorkInProgress
                        ? 'bg-yellow-200 text-yellow-700'
                        : task.status === Status.UnderReview
                          ? 'bg-purple-200 text-purple-700'
                          : task.status === Status.Completed
                            ? 'bg-green-200 text-green-700'
                            : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  {task.status || 'Unknown Status'}
                </span>
</div>
              
              <p className='text-sm text-gray-600 dark:text-gray-400'>
                {task.description || 'No description provided'}
              </p>
              <div className='mt-4 flex flex-wrap space-x-2 text-xs'>
                <span
                  className={`rounded px-2 py-1 ${
                    task.priority === Priority.Urgent
                      ? 'bg-red-200 text-red-700'
                      : task.priority === Priority.High
                        ? 'bg-yellow-200 text-yellow-700'
                        : task.priority === Priority.Medium
                          ? 'bg-green-200 text-green-700'
                          : task.priority === Priority.Low
                            ? 'bg-blue-200 text-blue-700'
                            : task.priority === Priority.Backlog
                              ? 'bg-purple-200 text-purple-700'
                              : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  {task.priority || 'Unknown Priority'}
                </span>
                {task.tags &&
                  task.tags.split(',').map((tag) => (
                    <span
                      key={tag}
                      className='rounded bg-gray-100 px-2 py-1 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                    >
                      {tag}
                    </span>
                  ))}
              </div>
              <div className='mt-4 text-sm text-gray-500 dark:text-gray-400'>
                <p>
                  <strong>Start Date:</strong>{' '}
                  {task.startDate
                    ? format(new Date(task.startDate), 'P')
                    : 'Not set'}
                </p>
                <p>
                  <strong>Due Date:</strong>{' '}
                  {task.dueDate
                    ? format(new Date(task.dueDate), 'P')
                    : 'Not set'}
                </p>
              </div>
              <div className='mt-4 flex items-center justify-between'>
                <p className='text-sm'>
                  <strong>Author:</strong>{' '}
                  {task.author ? task.author.username : 'Unknown'}
                </p>
                <p className='text-sm'>
                  <strong>Assignee:</strong>{' '}
                  {task.assignee ? task.assignee.username : 'Unassigned'}
                </p>
              </div>

              <div className='mt-2 flex items-center space-x-2'>
                     ....
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ListView;
