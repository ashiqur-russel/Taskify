"use client";

import React, { useState, useEffect } from "react";
import ProjectHeader from "../ProjectHeader";
import { Grid3X3, List, Clock, Table } from "lucide-react";

type Props = {
  params: { id: string } | Promise<{ id: string }>;
};

const Project = ({ params }: Props) => {
  const [activeTab, setActiveTab] = useState("Board");
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);
  const [projectId, setProjectId] = useState("");

  useEffect(() => {
    const getId = async () => {
      const resolvedParams = await params;
      setProjectId(resolvedParams.id);
    };

    if (params instanceof Promise) {
      getId();
    } else {
      setProjectId(params.id);
    }
  }, [params]);

  return (
    <div className="px-4 xl:px-6">
      <div className="pb-6 pt-6 lg:pb-4 lg:pt-8">
        <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
};

export default Project;
