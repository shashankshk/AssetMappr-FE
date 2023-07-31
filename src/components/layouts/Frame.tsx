import React, { ReactNode } from 'react'
import PropTypes from 'prop-types';

interface FrameProps{
    id?:string;
    classname?:string;
    leftchildren: ReactNode;
    rightchildren: ReactNode;
}
const Frame:React.FC<FrameProps> = (props) => {
  return (
    <div id={props.id} className={`frame${props.classname}`}>
        <div className={`frame-left${props.classname}`}>
            {props.leftchildren}
        </div>
        <div className={`frame-right${props.classname}`}>
            {props.rightchildren}
        </div>
    </div>
  )
}

Frame.propTypes = {
    leftchildren: PropTypes.node.isRequired,
    rightchildren: PropTypes.node.isRequired,
    classname: PropTypes.string,
    id: PropTypes.string
};

export default Frame