import React from 'react';

interface Props {
    name: string;
    id?: string;
    onchange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    display?:string;
    initialValue: string;
    initialLabel: string;
    options: Option[]; 
    classname?:string;  
}

interface Option {
    value: string;
    label: string;
}

const SelectOption: React.FC<Props> = ({
    name,
    id,
    onchange,
    options,
    display,
    initialValue,
    initialLabel,
    classname
}) => {
    return (
    <select name={name} id={id} onChange={onchange} className={classname}>
        <option style={{display:display}} value={initialValue} selected>{initialLabel}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
    </select>
)
};

export default SelectOption;