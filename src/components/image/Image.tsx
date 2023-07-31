import React  from 'react'

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