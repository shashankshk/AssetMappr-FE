/*
import React from 'react';

interface Props{
    classname: string;
    content?: string;
}
const Subheader: React.FC<Props> = ({
    classname,
    content
}) => {
    return (
        <p className={classname}>{content}</p>
    )
};

export default Subheader;
*/

import React from 'react'
import cx from 'classnames'
type SubheaderSize = 'large' | 'medium' | 'small'

interface Props {
  size?: SubheaderSize;
  classname?: string;
  content?: string;
}

const Subheader: React.FC<Props> = ({
  size,
  classname,
  content
}) => {
  return (
    <p
      className={cx(
        'subheader',
        {
          [`subheader_${size}`]: size ?? true,
        },
        classname,
      )}
    >
     {content}
    </p>
  )
}

export default Subheader
