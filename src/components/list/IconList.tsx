import React from 'react'
import Icon from '../icon/Icon'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import Header from '../title/header/Header';
import Description from '../content/Description';

interface Props{
    iconProps: IconProp;
    headerProps: HeaderProp;
    hasDescription?: boolean | true
    descriptionProps?: DescriptionProp
    classname: string;
}

interface IconProp{
  classname: string;
  iconname: IconDefinition;
}
interface HeaderProp{
  classname: string;
  content: string;
  size?: 'xlarge' | 'medium' | 'large' | 'small';
}
interface DescriptionProp{
  classname: string;
  content:string;
}
const IconList:React.FC<Props> = ({
    iconProps,
    headerProps,
    descriptionProps,
    hasDescription,
    classname
}) => {
  return (
     <>
       <div className={classname}>
          <Icon classname={iconProps.classname} iconname={iconProps.iconname}></Icon>
          <Header classname={headerProps.classname} content={headerProps.content} size={headerProps.size}></Header>
        </div>
        {hasDescription && 
        <div className='icon-item-description'>
          <Description classname={descriptionProps?.classname} content={descriptionProps?.content}></Description>
        </div>}
     </>
  )
}

/*
  <Card classname='iconcard'>
            <Icon classname={iconProps.classname} iconname={iconProps.iconname}></Icon>
          </Card>
*/
export default IconList