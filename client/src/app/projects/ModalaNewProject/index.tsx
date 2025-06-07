import Modal from '@/components/Modal';
import { useCreateProjectMutation } from '@/state/api';
import React from 'react'

type Props = {
    isOpen: boolean;
    onClose: () => void;
}

const ModalNewProject = ({ isOpen, onClose }: Props) => {
    const [createProject, isLoading] = useCreateProjectMutation();
    const [projectName, setProjectName] = React.useState('');
    const [projectDescription, setProjectDescription] = React.useState('');
    const [startDate, setStartDate] = React.useState('');
    const [endDate, setEndDate] = React.useState('');

    const handleSUbmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!projectName || !startDate || !endDate) return;
        try {
            await createProject({
                name: projectName,
                description: projectDescription,
                startDate: startDate,
                endDate: endDate
            });
            onClose();
        } catch (error) {
            console.error('Failed to create project:', error);
        }
    };

    const isFormValid = () => {
        return projectName && projectDescription && startDate && endDate;
    }

    const inputStyle = 'w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none';
    return (
        <Modal isOpen={isOpen} onClose={onClose} name='Create New Project'>hh</Modal>
    )
}

export default ModalNewProject;