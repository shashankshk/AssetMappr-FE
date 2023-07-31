import React from 'react';

interface Props{
    classname:string;
    color?:string;
    height?:string;
    width?:string;
    content:string;
}

const Header: React.FC<Props> = ({
    classname,
    content
}) => {
    return (
        <h1 className={classname}>{content}</h1>
    )
};

export default Header;