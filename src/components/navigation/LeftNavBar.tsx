import React from 'react'
import './LeftNavBar.css'
import NavItem from './navItem/NavItem'
import { NavItemProps } from './navItem/NavItem'
import Button from '../button/Button'

export type LeftNavBarProps = {
  className: string
  navItems: NavItemProps[]
}

const LeftNavBar: React.FC<LeftNavBarProps> = ({ className, navItems }) => {
  return (
    <div className={className}>
      <h3>Asset Mappr</h3>
      <h4>Community</h4>
      {navItems.map((item, index) => (
        <NavItem key={index} className={item.className} icon={item.icon} label={item.label} />
      ))}
      <Button type='submit' value='Logout' className='logout_nav_button'>
        Logout
      </Button>
    </div>
  )
}

export default LeftNavBar
