import React from 'react'

interface Props {
    classname: string;
    onClick?: () => void;
}
const Hamburger:React.FC<Props> = ({
    classname,
    onClick
}) => {
  return (
    <a href='#' className='toggle-bar' onClick={onClick}>
          <span className={classname}></span>
          <span className={classname}></span>
          <span className={classname}></span>
    </a>
  )
}

export default Hamburger