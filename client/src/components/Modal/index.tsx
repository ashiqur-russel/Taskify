import React from 'react'
import ReactDOM from 'react-dom'
import Header from '../Header';
import { X } from 'lucide-react';

type Props = {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
    name?: string;
}

const Modal = ({ children, isOpen, onClose, name }: Props) => {
    if (!isOpen) return null;
    return ReactDOM.createPortal(
        <div className='fixed inset-0 flex h-full items-center  justify-center overflow-y-auto bg-gray-600 bg-opacity-50 p-4'>
            <div className='w-full max-w-2xl rounded-lg bg-white p-6 shadow-lg dark:bg-dark-secondary'>
                <Header
                    name={name || 'Modal Title'}
                    buttonComponent={
                        <button
                            className='flex items-center rounded-md bg-[#ee7e34] px-3 py-2 text-white hover:bg-[#ee7e34]'
                            onClick={onClose}
                        >
                            <X size={20} className='mr-2' />

                        </button>

                    }

                    isSmallText={false}

                />
                {children}
            </div>
        </div>, document.body
    )
}

export default Modal