import React from 'react'

type ListProps = {
    id: string;
    setIsModalNewTaskOpen: (isOpen: boolean) => void;
}

function ListView({ id, setIsModalNewTaskOpen }: ListProps) {
  return (
    <div className=' dark:text-white'>Task View</div>
  )
}

export default ListView