import React from 'react'
import Frame from '../../../components/layouts/Frame'
import Header from '../../../components/title/header/Header'
import Description from '../../../components/content/Description'
import Ellipse from '../../../components/ellipse/Ellipse'
import frame5Image from '../../../assets/images/ellipse-image.svg'
import currentmember1 from '../../../assets/images/assetmappr_Rick.svg'
import currentmember2 from '../../../assets/images/assetmappr_Jaime.svg'
import currentmember3 from '../../../assets/images/assetmappr_Brook.svg'
import currentmember4 from '../../../assets/images/assetmappr_Srishti.svg'
import currentmember5 from '../../../assets/images/assetmappr_Shashank.svg'
import currentmember6 from '../../../assets/images/assetmappr_Niranjan.svg'
import currentmember7 from '../../../assets/images/assetmappr_sharoni.svg'
import pastmember1 from '../../../assets/images/assetmappr_Mihir.svg'
import pastmember2 from '../../../assets/images/assetmappr_Michaela.svg'
import pastmember3 from '../../../assets/images/assetmappr_Anna.svg'
import pastmember4 from '../../../assets/images/assetmappr_Sara.svg'
import pastmember5 from '../../../assets/images/assetmappr_Ruta.svg'

const Team = () => {
  return (
    <Frame id='team' classname='-5'
    leftchildren = {
        <>
        <Header
        classname='frame-5-header'
        content='Asset Mappr was created at Carnegie Mellon University'
        ></Header>
        <div className='description'>
        <Description
          classname='frame-5-description'
          content='The current team includes students from across disciplines like public policy, computer science and
                          product innovation.'
          ></Description>
        </div>
        </>
    }
    rightchildren = {
        <>
             <div className='current-members'>
            <Header classname='current-members-header' content='CURRENT MEMBERS'></Header>
            <div className='current-members-images'>
              <Ellipse
                classname='member-image'
                image={currentmember1}
                captions={[
                  { index: 1, text: 'Richard Stafford' },
                  { index: 2, text: 'Faculty Advisor' },
                ]}
              />
              <Ellipse
                classname='member-image'
                image={currentmember2}
                captions={[
                  { index: 1, text: 'Jameson Carter' },
                  { index: 2, text: 'Public Policy' },
                ]}
              />
              <Ellipse
                classname='member-image'
                image={currentmember3}
                captions={[
                  { index: 1, text: 'Brook Russi Arias' },
                  { index: 2, text: 'Public Policy' },
                ]}
              />
              <Ellipse
                classname='member-image'
                image={currentmember4}
                captions={[
                  { index: 1, text: 'Srishti Malaviya' },
                  { index: 2, text: 'Product Innovation' },
                ]}
              />
              <Ellipse
                classname='member-image'
                image={currentmember5}
                captions={[
                  { index: 1, text: 'Shashank Shekhar' },
                  { index: 2, text: 'Computer Science' },
                ]}
              />
              <Ellipse
                classname='member-image'
                image={currentmember6}
                captions={[
                  { index: 1, text: 'Niranjan Kumawat' },
                  { index: 2, text: 'Computer Science' },
                ]}
              />
              <Ellipse
                classname='member-image'
                image={currentmember7}
                captions={[
                  { index: 1, text: 'Sharoni R Chowdhury' },
                  { index: 2, text: 'Computer Science' },
                ]}
              />
            </div>
          </div>

          <div className='past-members'>
            <Header classname='current-members-header' content='PAST MEMBERS'></Header>
            <div className='past-members-images'>
              <Ellipse
                classname='member-image'
                image={pastmember1}
                captions={[
                  { index: 1, text: 'Mihir Bhaskar' },
                  { index: 2, text: 'Public Policy' },
                ]}
              />
              <Ellipse
                classname='member-image'
                image={pastmember2}
                captions={[
                  { index: 1, text: 'Michaela Marincic' },
                  { index: 2, text: 'Public Policy' },
                ]}
              />
              <Ellipse
                classname='member-image'
                image={pastmember3}
                captions={[
                  { index: 1, text: 'Anna Wang' },
                  { index: 2, text: 'Public Policy' },
                ]}
              />
              <Ellipse
                classname='member-image'
                image={pastmember4}
                captions={[
                  { index: 1, text: 'Sara Maillacheruv' },
                  { index: 2, text: 'Public Policy' },
                ]}
              />
              <Ellipse
                classname='member-image'
                image={pastmember5}
                captions={[
                  { index: 1, text: 'Ruta Deshpande' },
                  { index: 2, text: 'Computer Science' },
                ]}
              />
            </div>
          </div>
        </>
    }
    />
  )
}

export default Team