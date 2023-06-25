import React, { RefObject } from 'react';
import './InputField.css';
interface Props {
    type: string;
    id?: string;
    className?:string;
    placeholder: string;
    ref?: RefObject<HTMLInputElement>;
    autocomplete?: string;
    onchange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean
}

const InputField: React.FC<Props> = ({
    type,
    id,
    className,
    placeholder,
    ref,
    autocomplete,
    onchange,
    required
}) => {
    return (
        <input type={type} 
        id={id} 
        className={className} 
        placeholder={placeholder}
        ref = {ref} 
        autoComplete={autocomplete}
        onChange={onchange}
        required={required}
        ></input>
    )
};

export default InputField;