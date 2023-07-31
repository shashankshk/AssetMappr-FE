import React from 'react'
import Subheader from '../title/subheader/Subheader';
import Hamburger from '../menu/hamburger/Hamburger';
import List, { Item } from '../list/List';
import Button from '../button/Button';

interface Props {
    subheaderprops: ComponentProp;
    hamburgerprops: ComponentProp;
    listprops: ComponentProp & {contentlist: Item[]; }
    buttonprops1: ComponentProp;
    buttonprops2: ComponentProp;
}
interface ComponentProp {
    classname: string;
    type?: string;
    content?:string;
    value?:string;
    onClick?: () => void;
    contentlist?: Item[];
    classnameli?: string;
    toggleView?: boolean;
    buttontype?: 'button' | 'submit' | 'reset';
}
const Navcontainer:React.FC<Props> = ({
    subheaderprops,
    hamburgerprops,
    listprops,
    buttonprops1,
    buttonprops2
}) => {
    return (
        <div className='navcontainer'>
            <Subheader classname={subheaderprops.classname} content={subheaderprops.content}></Subheader>
            <Hamburger classname={hamburgerprops.classname} onClick={hamburgerprops.onClick}></Hamburger>
            <div className={`nav-options ${!listprops.toggleView ? '' : 'active-options'}`}>
            <List islink={true} classname={listprops.classname} classnameli={listprops.classnameli} content={listprops.contentlist}></List>
            </div>
            <div className={`nav-buttons ${!listprops.toggleView ? '' : 'active-buttons'}`}>
            <Button className={buttonprops1.classname} type={buttonprops1.buttontype} value={buttonprops1.value} onClick={buttonprops1.onClick}>
                Signup
            </Button>
            <Button className={buttonprops2.classname} type={buttonprops2.buttontype} value={buttonprops2.value} onClick={buttonprops2.onClick}>
                User Login
            </Button>
            </div>
        </div>
    )
}

export default Navcontainer