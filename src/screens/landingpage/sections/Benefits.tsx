import React from 'react'
import Frame from '../../../components/layouts/Frame'
import Header from '../../../components/title/header/Header'
import IconList from '../../../components/list/IconList'
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons'
import Image from '../../../components/image/Image'
import frame4Image from '../../../assets/images/frame-4-image.svg'

const Benefits = () => {
  return (
    <Frame id='benefits' classname='-4'
        leftchildren = {
            <>
            <Header classname='frame-4-header' content='The benefits of a digital platform' size='large'></Header>
            <div>
            <IconList
                classname='icon-frame-4-header-display'
                iconProps={{ classname: 'icon', iconname: faCircleCheck }}
                headerProps={{
                classname: 'frame-4-icon-list-header',
                content: 'Transparency and open access to meaningful information',
                size: 'small'
                }}
                hasDescription={false}
            />
            <IconList
                classname='icon-frame-4-header-display'
                iconProps={{ classname: 'icon', iconname: faCircleCheck }}
                headerProps={{
                classname: 'frame-4-icon-list-header',
                content: 'Participatory community planning across demographics',
                size: 'small'
                }}
                hasDescription={false}
            />
            <IconList
                classname='icon-frame-4-header-display'
                iconProps={{ classname: 'icon', iconname: faCircleCheck }}
                headerProps={{
                classname: 'frame-4-icon-list-header',
                content: 'Access to granular, need-based data.',
                size: 'small'
                }}
                hasDescription={false}
            />
            <IconList
                classname='icon-frame-4-header-display'
                iconProps={{ classname: 'icon', iconname: faCircleCheck }}
                headerProps={{
                classname: 'frame-4-icon-list-header',
                content: 'Data is stored digitally for easy access and utilization',
                size: 'small'
                }}
                hasDescription={false}
            />
            </div>
            </>
        }
        rightchildren = {
            <>
            <Image classname='frame-4-image' imgname={frame4Image}></Image>
            </>
        }
    />
  )
}

export default Benefits