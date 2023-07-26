import React from 'react'
import Subheader from '../title/subheader/Subheader'
import Button from '../button/Button'
import ListLink from '../list/ListLink'
import './Navbar.css'
const Navbar = () => {

  const items = [
      { key:1, ref: '#', data: 'Features'},
      { key:2, ref: '#', data: 'Benefits'},
      { key:3, ref: '#', data: 'Team'},
      { key:4, ref: '#', data: 'Contact Us'},
  ]
  return (
    <>
    <nav className='navbar'>
        <div className='navbar_container'>
              <Subheader classname={'navbar_subheader'} content={'Asset Mappr'}></Subheader>
            <div>
              <ListLink classname={'navbar_options'} content={items}></ListLink>
            </div>
            <div>
              <Button type={'button'} value={'Signup'} className={''}>Signup</Button>
              <Button type={'button'} value={'Login'} className={''}>Login</Button>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar