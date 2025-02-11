import React from 'react';

type TableProps = {
  id: string;
  setIsModalNewTaskOpen: (isOpen: boolean) => void;
};

const TableView = ({ id, setIsModalNewTaskOpen }: TableProps) => {
  return <div>This Is table view</div>;
};

export default TableView;
