import React from 'react'
import { twMerge } from 'tailwind-merge';

interface ContainerProps {
    className?: string,
    children: React.ReactNode,
}
export default function Container({ className, children }: ContainerProps) {
   const newClassName=twMerge("max-w-screen-xl mx-auto py-10 px-4 lg:px-0",className);
    return (
        <div className={newClassName}>
         {children}
        </div>
    )
}
