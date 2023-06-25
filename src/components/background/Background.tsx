import React from 'react';
import './Background.css';
interface Props {
    classname: string;
    backgroundImage: any;
    children: React.ReactNode;
}

const Background:React.FC<Props> = ({
    classname,
    backgroundImage,
    children
}) => {
    return (
        <main className={classname} 
              style={
                {backgroundImage: `url(${backgroundImage})` }
                }>
              {children}
        </main>
    )
};

export default Background;