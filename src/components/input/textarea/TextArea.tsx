import React from 'react'

interface Props{
    classname: string;
    placeholder?:string;
    cols?:number;
    rows?:number;
    maxlength?:number;
    readonly?:boolean;
    wrap?:string;
    content?:string;
    name?:string;
}
const TextArea:React.FC<Props> = ({
    classname,
    placeholder,
    cols,
    rows,
    maxlength,
    readonly,
    wrap,
    name
}) => {
  return (
    <textarea className={classname} placeholder={placeholder} cols={cols} rows={rows} name={name} maxLength={maxlength} readOnly={readonly} wrap={wrap}></textarea>
  )
}

export default TextArea