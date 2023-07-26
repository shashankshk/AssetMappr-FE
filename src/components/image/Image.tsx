import React  from 'react'
import './Image.css';

interface Props {
    classname: string;
    imgname: string;
    alt?:string;
}
const Image: React.FC<Props> = ({
  classname,
  imgname,
  alt
}) => {
  return (
    <img className={classname} src={imgname} alt={alt}></img>
  )
}

export default Image