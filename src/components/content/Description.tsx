/*
import React from 'react'

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
*/

import React from 'react'
import cx from 'classnames'
type DescriptionSize = 'large' | 'medium' | 'small'

interface Props {
  size?: DescriptionSize;
  classname?: string;
  content?: string;
}

const Description: React.FC<Props> = ({
  size,
  classname,
  content
}) => {
  return (
    <p
      className={cx(
        'description',
        {
          [`description_${size}`]: size ?? true,
        },
        classname,
      )}
    >
     {content}
    </p>
  )
}

export default Description