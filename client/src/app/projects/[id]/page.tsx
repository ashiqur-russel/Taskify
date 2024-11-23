"use client";

import React, { useState } from "react";
import ProjectHeader from "../ProjectHeader";
import { useParams } from "next/navigation";

const Project = () => {
  const [activeTab, setActiveTab] = useState("Board");
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

  const params = useParams();
  const id = params?.id;

  return (
    <div className="px-4 xl:px-6">
      <div className="pb-6 pt-6 lg:pb-4 lg:pt-8">
        <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
        {/* Add other JSX elements */}
      </div>
    </div>
  );
};

export default Project;
