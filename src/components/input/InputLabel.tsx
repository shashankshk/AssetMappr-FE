import React from 'react';

interface Props{
    htmlfor: string;
    classname?: string;
    content: string;
}

const InputLabel: React.FC<Props> = ({
    htmlfor,
    classname,
    content
}) => {
    return (
        <label
        htmlFor={htmlfor}
        className={classname}
        >
        {content}
        </label>
    )
};

export default InputLabel;