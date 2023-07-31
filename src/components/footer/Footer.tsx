import React from 'react';

interface Props{
    classname:string;
    color?:string;
    height?:string;
    width?:string;
    content:string;
}

const Footer: React.FC<Props> = ({
    classname,
    content
}) => {
    return (
        <p className={classname}>{content}</p>
    )
};

export default Footer;