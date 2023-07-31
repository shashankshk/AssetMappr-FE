import React from 'react';

interface Props {
    classname: string;
    backgroundImage?: any;
    id?:string;
    children: React.ReactNode;
}

const Background:React.FC<Props> = ({
    classname,
    backgroundImage,
    children,
    id
}) => {
    return (
        <div className={classname} id={id}  
              style={
                {backgroundImage: `url(${backgroundImage})` }
                }>
              {children}
        </div>
    )
};

export default Background;