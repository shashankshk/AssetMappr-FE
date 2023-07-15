import React from 'react'
import Frame from '../../../components/layouts/Frame'
import Header from '../../../components/title/header/Header'
import Description from '../../../components/content/Description'
import Ellipse from '../../../components/ellipse/Ellipse'
import frame5Image from '../../../assets/images/ellipse-image.svg'

const Team = () => {
  return (
    <Frame classname='-5'
    leftchildren = {
        <>
        <Header
        classname='frame-5-header'
        content='Asset Mappr was created at Carnegie Mellon University'
        ></Header>
        <Description
        classname='frame-5-description'
        content='The current team includes students from across disciplines like public policy, computer science and
                        product innovation.'
        ></Description>
        </>
    }
    rightchildren = {
        <>
             <div className='current-members'>
            <Header classname='current-members-header' content='CURRENT MEMBERS'></Header>
            <div className='current-members-images'>
              <Ellipse
                classname='member-image'
                image={frame5Image}
                captions={[
                  { index: 1, text: 'Richard Stafford' },
                  { index: 2, text: 'Faculty Advisor' },
                ]}
              />
              <Ellipse
                classname='member-image'
                image={frame5Image}
                captions={[
                  { index: 1, text: 'Brook Russi Arias' },
                  { index: 2, text: 'Public Policy' },
                ]}
              />
              <Ellipse
                classname='member-image'
                image={frame5Image}
                captions={[
                  { index: 1, text: 'Srishti Malaviya' },
                  { index: 2, text: 'Product Innovation' },
                ]}
              />
              <Ellipse
                classname='member-image'
                image={frame5Image}
                captions={[
                  { index: 1, text: 'Shashank Shekhar' },
                  { index: 2, text: 'Computer Science' },
                ]}
              />
              <Ellipse
                classname='member-image'
                image={frame5Image}
                captions={[
                  { index: 1, text: 'Niranjan Kumawat' },
                  { index: 2, text: 'Computer Science' },
                ]}
              />
              <Ellipse
                classname='member-image'
                image={frame5Image}
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
                image={frame5Image}
                captions={[
                  { index: 1, text: 'Mihir Bhaskar' },
                  { index: 2, text: 'Public Policy' },
                ]}
              />
              <Ellipse
                classname='member-image'
                image={frame5Image}
                captions={[
                  { index: 1, text: 'Michaela Marincic' },
                  { index: 2, text: 'Public Policy' },
                ]}
              />
              <Ellipse
                classname='member-image'
                image={frame5Image}
                captions={[
                  { index: 1, text: 'Anna Wang' },
                  { index: 2, text: 'Public Policy' },
                ]}
              />
              <Ellipse
                classname='member-image'
                image={frame5Image}
                captions={[
                  { index: 1, text: 'Sara Maillacheruv' },
                  { index: 2, text: 'Public Policy' },
                ]}
              />
              <Ellipse
                classname='member-image'
                image={frame5Image}
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