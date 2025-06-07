import Modal from '@/components/Modal';
import { useCreateProjectMutation } from '@/state/api';
import React from 'react'
import { formatISO } from 'date-fns';

type Props = {
    isOpen: boolean;
    onClose: () => void;
}

const ModalNewProject = ({ isOpen, onClose }: Props) => {
    const [createProject, { isLoading }] = useCreateProjectMutation();
    const [projectName, setProjectName] = React.useState('');
    const [projectDescription, setProjectDescription] = React.useState('');
    const [startDate, setStartDate] = React.useState('');
    const [endDate, setEndDate] = React.useState('');

    const handleSubmit = async () => {
        if (!projectName || !startDate || !endDate) return;
        try {
            const formatIsoStartDate = formatISO(new Date(startDate));
            const formatIsoEndDate = formatISO(new Date(endDate));

            await createProject({
                name: projectName,
                description: projectDescription,
                startDate: formatIsoStartDate,
                endDate: formatIsoEndDate
            });

            onClose();
            setProjectName('');
            setProjectDescription('');
            setStartDate('');
            setEndDate('');

        } catch (error) {
            console.error('Failed to create project:', error);
        }
    };

    const isFormValid = () => {

        console.log(startDate, endDate, projectName, projectDescription)

        return projectName && projectDescription && startDate && endDate;


    }

    const inputStyle = 'w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none';
    return (
        <Modal isOpen={isOpen} onClose={onClose} name='Create New Project'>
            <form className='mt-4 space-y-6' onSubmit={(e) => { e.preventDefault(), handleSubmit() }} >
                <input type='text' className={inputStyle} placeholder='Project Name' value={projectName}
                    onChange={(e) => setProjectName(e.target.value)} required></input>
                <input type='text' className={inputStyle} placeholder='Project Description' value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)} required></input>
                <input type='date' className={inputStyle} placeholder='Start Date' value={startDate}
                    onChange={(e) => setStartDate(e.target.value)} required></input>
                <input type='date' className={inputStyle} placeholder='End Date' value={endDate}
                    onChange={(e) => setEndDate(e.target.value)} required></input>
                <button type='submit' className='w-full rounded-md bg-orange-400 px-4 py-2 text-white hover:bg-orange-500 disabled:bg-gray-200' disabled={!isFormValid() || isLoading}>{isLoading ? 'Creating...' : 'Create Project'}</button>

            </form>
        </Modal >
    )
}

export default ModalNewProject;