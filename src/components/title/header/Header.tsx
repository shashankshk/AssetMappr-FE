/*
import React from 'react';

interface Props{
    classname:string;
    color?:string;
    height?:string;
    width?:string;
    content:string;
}

const Header: React.FC<Props> = ({
    classname,
    content
}) => {
    return (
        <h1 className={classname}>{content}</h1>
    )
};

export default Header;
*/

import React from 'react'
import cx from 'classnames'
type HeaderSize = 'xlarge' |'large' | 'medium' | 'small'

interface Props {
  size?: HeaderSize;
  classname?: string;
  content?: string;
}

const Header: React.FC<Props> = ({
  size,
  classname,
  content
}) => {
  return (
    <h1
      className={cx(
        'header',
        {
          [`header_${size}`]: size ?? true,
        },
        classname,
      )}
    >
     {content}
    </h1>
  )
}

export default Header
