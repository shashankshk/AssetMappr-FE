import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import './Icon.css';

interface Props{
    classname: string;
    iconname: IconDefinition;
}

const Icon: React.FC<Props> = ({
    classname,
    iconname
}) => {
    return (
        <span className={classname}><FontAwesomeIcon icon={iconname} /></span>
    )
};

export default Icon;