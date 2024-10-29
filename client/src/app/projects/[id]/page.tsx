"use client";

import React, { useState, useEffect } from "react";
import ProjectHeader from "../ProjectHeader";

type Props = {
  params: { id: string };
};

const Project = ({ params }: Props) => {
  const [projectId, setProjectId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("Board");
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

  useEffect(() => {
    async function fetchParams() {
      const unwrappedParams = await params;
      setProjectId(unwrappedParams.id);
    }
    fetchParams();
  }, [params]);

  if (!projectId) {
    return <div>Loading...</div>;

    return (
      <div>
        <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
        {/* Add other JSX elements */}
      </div>
    );
  }
};
export default Project;
