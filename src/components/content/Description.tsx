import React from 'react'
import './Description.css';
interface Props{
  classname: string | undefined;
  content: string | undefined;
}
const Description:React.FC<Props> = ({
  classname,
  content
}) => {
  return (
    <p className={classname}>{content}</p>
  )
}

export default Description