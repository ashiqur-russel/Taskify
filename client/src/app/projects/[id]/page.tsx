'use client';

import React, { useState } from 'react';
import ProjectHeader from '../ProjectHeader';
import { useParams } from 'next/navigation';
import Board from '../BoardView';

const Project = () => {
  const [activeTab, setActiveTab] = useState('Board');
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

  const params = useParams();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id || '';

  return (
    <div className='px-4 xl:px-6'>
      <div className='pb-6 pt-6 lg:pb-4 lg:pt-8'>
        <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === 'Board' && (
          <Board id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
        )}
      </div>
    </div>
  );
};

export default Project;
