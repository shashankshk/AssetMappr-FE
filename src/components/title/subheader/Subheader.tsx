import React from 'react';

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