import React from 'react';
import './ErrorMsg.css';

interface Props{
    id:string;
    className: string;
    label: string;
}

const ErrorMsg: React.FC<Props> = ({
    id,
    className,
    label
}) => {
    return (
        <p id={id} className={className}>
            {label}
        </p>
    )
};

export default ErrorMsg;