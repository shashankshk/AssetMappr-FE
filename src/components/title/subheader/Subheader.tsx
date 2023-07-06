import React from 'react';
import './Subheader.css';
interface Props{
    classname: string;
    content: string;
}
const Subheader: React.FC<Props> = ({
    classname,
    content
}) => {
    return (
        <p className={classname}>{content}</p>
    )
};

export default Subheader;