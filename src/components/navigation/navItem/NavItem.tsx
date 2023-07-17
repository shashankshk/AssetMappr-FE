import React from 'react'
import './NavItem.css'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import Icon from '../../../components/icon/Icon'

export type NavItemProps = {
  className: string
  icon: IconDefinition
  label: string
  onClick?: React.FormEventHandler;
}

const NavItem: React.FC<NavItemProps> = ({ className, icon, label, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <Icon classname='nav_item_icon' iconname={icon}></Icon>
      <span className='nav_item_label'>{label}</span>
    </div>
  )
}

export default NavItem
