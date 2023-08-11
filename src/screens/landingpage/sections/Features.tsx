import React from 'react'
import Frame from '../../../components/layouts/Frame';
import Header from '../../../components/title/header/Header';
import Subheader from '../../../components/title/subheader/Subheader';
import Image from '../../../components/image/Image';
import monvalleylogo from '../../../assets/images/monvalleyasset.svg'
import citypen from '../../../assets/images/PAlogo.svg'
import IconList from '../../../components/list/IconList';
import { faMap,faClipboardList,faPieChart} from '@fortawesome/free-solid-svg-icons'

const Features = () => {
  return (
    <Frame id='features' classname='-3'
    leftchildren = {
        <>
        <Header
        classname='frame-3-header'
        content='What services do we provide to small communities?'
        size='large'
        ></Header>
        <Subheader classname='frame-3-subheader' content='OUR CURRENT COLLABORATORS' size='small'></Subheader>
        <div className='frame-3-logos'>
            <Image classname='monvalley' imgname={monvalleylogo}></Image>
            <Image classname='citylogo' imgname={citypen}></Image>
        </div>
        </>
    }
    rightchildren = {
        <>
            <IconList
            classname='icon-header-display'
            iconProps={{ classname: 'icon', iconname: faMap }}
            headerProps={{ classname: 'icon-list-header', content: 'Asset Map' }}
            hasDescription={true}
            descriptionProps={{
              classname: 'icon-list-description',
              content:
                'Use the map to find all community assets across different categories from sports and recreation to local businesses.',
            }}
          ></IconList>
          <IconList
            classname='icon-header-display'
            iconProps={{ classname: 'icon', iconname: faClipboardList }}
            headerProps={{ classname: 'icon-list-header', content: 'Publish Targeted Surveys' }}
            hasDescription={true}
            descriptionProps={{
              classname: 'icon-list-description',
              content:
                'Publish surveys linked to specific assets and get deep and targeted information from the community.',
            }}
          ></IconList>
          <IconList
            classname='icon-header-display'
            iconProps={{ classname: 'icon', iconname: faPieChart }}
            headerProps={{ classname: 'icon-list-header', content: 'Gathering data and insights' }}
            hasDescription={true}
            descriptionProps={{
              classname: 'icon-list-description',
              content:
                'Easily view data collected from surveys and use the visualization tools on the platform to help you present your data.',
            }}
          ></IconList>
        </>
    }
    />
  )
}

export default Features;