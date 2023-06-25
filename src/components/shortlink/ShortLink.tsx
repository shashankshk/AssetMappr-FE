import React from 'react';
import './ShortLink.css';
interface Props{
    href:string;
    classname: string;
    label: string;
}

const ShortLink: React.FC<Props> = (
    {
        href,
        classname,
        label
    }
) => {
    return (
        <a href={href} className={classname}>
                {label}
        </a>
    )
};

export default ShortLink;