import { useState } from 'react'
import './LandingPage.css'
import Background from '../../components/background/Background'
import Subheader from '../../components/title/subheader/Subheader'
import List from '../../components/list/List'
import Button from '../../components/button/Button'
import Header from '../../components/title/header/Header'
import Description from '../../components/content/Description'
import Image from '../../components/image/Image'
import InputField from '../../components/input/inputfield/InputField'
import monvalleylogo from '../../images/monvalleyasset.png'
import citypen from '../../images/PAlogo.png'
import IconList from '../../components/list/IconList'
import frame4Image from '../../images/frame-4-image.svg'
import frame5Image from '../../images/ellipse-image.svg'
import frame1Image from '../../images/frame-1-image.svg'
import Hamburger from '../../components/menu/hamburger/Hamburger'
import {
  faMap,
  faClipboardList,
  faPieChart,
  faCircleCheck,
} from '@fortawesome/free-solid-svg-icons'
import Ellipse from '../../components/ellipse/Ellipse'
import Footer from '../../components/footer/Footer'

const items = [
  { key: 1, ref: '#', data: 'Features' },
  { key: 2, ref: '#', data: 'Benefits' },
  { key: 3, ref: '#', data: 'Team' },
  { key: 4, ref: '#', data: 'Contact Us' },
]
// The landing page screen which the user first sees before signup/login.
const LandingPage = () => {
  // setting the toggle view. This will help displaying the hamburger menu in the mobile browser.
  const [toggleView, setToggleView] = useState(false)

  const displayToggleView = () => {
    if (!toggleView) {
      setToggleView(true)
    } else {
      setToggleView(false)
    }
  }

  return (
    <Background classname='landing-page' id='landing'>
      <div className='navcontainer'>
        <Subheader classname='nav-title' content='Asset Mappr'></Subheader>
        <Hamburger classname='bar' onClick={displayToggleView}></Hamburger>
        <div className={`nav-options ${!toggleView ? '' : 'active-options'}`}>
          <List classname='nav-options-list' classnameli='nav-options-items' content={items}></List>
        </div>
        <div className={`nav-buttons ${!toggleView ? '' : 'active-buttons'}`}>
          <Button className='user-signup' type='button' value='user-signup'>
            Signup
          </Button>
          <Button className='user-login' type='button' value='user-login'>
            User Login
          </Button>
        </div>
      </div>

      <div className='frame'>
        <div className='frame-left'>
          <Subheader classname='frame-1-subheader' content='BETA APP' />
          <Header
            classname='frame-1-header'
            content='Unlock your community&#39;s potential with Asset Mappr'
          />
          <Description
            classname='frame-1-description'
            content='Asset Mappr is a digital tool that helps you engage with your community and collect valuable information
                                from them.'
          />
          <Button className='frame-1-button' type='button' value='beta-app'>
            LOGIN TO THE BETA APP
          </Button>
        </div>

        <div className='frame-right'>
          <Image classname='frame-1-image' imgname={frame1Image}></Image>
        </div>
      </div>

      <div className='frame-2'>
        <div className='frame-2-left'>
          <Header classname='frame-2-header' content='Pre-register now!'></Header>
          <Description
            classname='frame-2-description'
            content=' If you believe that our innovative solution can make a positive impact, we are eager to connect with you.
                                Take the first step by pre-registering today, and rest assured, we&#39;ll reach out to you promptly once
                                our product is launched!'
          ></Description>
        </div>
        <div className='frame-2-right'>
          <form>
            <InputField
              type='text'
              placeholder='Type in your community’s name'
              className='frame-2-small-field'
            ></InputField>
            <InputField
              type='text'
              placeholder='Enter your name'
              className='frame-2-small-field'
            ></InputField>
            <InputField
              type='text'
              placeholder='Enter your email here'
              className='frame-2-small-field'
            ></InputField>
            <InputField
              type='text'
              placeholder='Tell us about your role in the community and how you envision utilizing our app.'
              className='frame-2-big-field'
            ></InputField>
            <Button type='button' value='Pre-register now!' className='frame-2-button'>
              Pre-register now!
            </Button>
          </form>
        </div>
      </div>

      <div className='frame'>
        <div className='frame-left'>
          <Header
            classname='frame-3-header'
            content='What services do we provide to small communities?'
          ></Header>
          <Subheader classname='frame-3-subheader' content='OUR CURRENT COLLABORATORS'></Subheader>
          <div className='frame-3-logos'>
            <Image classname='monvalley' imgname={monvalleylogo}></Image>
            <Image classname='citylogo' imgname={citypen}></Image>
          </div>
        </div>

        <div className='frame-right'>
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
        </div>
      </div>

      <div className='frame-4'>
        <div className='frame-left'>
          <Header classname='frame-4-header' content='The benefits of a digital platform'></Header>
          <IconList
            classname='icon-frame-4-header-display'
            iconProps={{ classname: 'icon', iconname: faCircleCheck }}
            headerProps={{
              classname: 'frame-4-icon-list-header',
              content: 'Transparency and open access to meaningful information',
            }}
            hasDescription={false}
          />
          <IconList
            classname='icon-frame-4-header-display'
            iconProps={{ classname: 'icon', iconname: faCircleCheck }}
            headerProps={{
              classname: 'frame-4-icon-list-header',
              content: 'Participatory community planning across demographics',
            }}
            hasDescription={false}
          />
          <IconList
            classname='icon-frame-4-header-display'
            iconProps={{ classname: 'icon', iconname: faCircleCheck }}
            headerProps={{
              classname: 'frame-4-icon-list-header',
              content: 'Access to granular, need-based data.',
            }}
            hasDescription={false}
          />
          <IconList
            classname='icon-frame-4-header-display'
            iconProps={{ classname: 'icon', iconname: faCircleCheck }}
            headerProps={{
              classname: 'frame-4-icon-list-header',
              content: 'Data is stored digitally for easy access and utilization',
            }}
            hasDescription={false}
          />
        </div>

        <div className='frame-right'>
          <Image classname='frame-4-image' imgname={frame4Image}></Image>
        </div>
      </div>

      <div className='frame'>
        <div className='frame-5-left'>
          <Header
            classname='frame-5-header'
            content='Asset Mappr was created at Carnegie Mellon University'
          ></Header>
          <Description
            classname='frame-5-description'
            content='The current team includes students from across disciplines like public policy, computer science and
                            product innovation.'
          ></Description>
        </div>

        <div className='frame-5-right'>
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
        </div>
      </div>

      <div className='frame-footer'>
        <div className='frame-6-left'>
          <Header classname='frame-footer-header' content='We’d love to hear from you!'></Header>
          <Description
            classname='frame-footer-description'
            content='We’re currently building a new platform from the ground up and always looking for people to collaborate with in different ways. Send us your email with a message and we will get back to you.'
          ></Description>
          <Footer
            classname='footer'
            content='© 2023 Asset Mappr. Copyright and rights reserved.'
          ></Footer>
        </div>

        <div className='frame-6-right'>
          <form>
            <InputField
              type='text'
              placeholder='Enter your email here'
              className='frame-6-field'
            ></InputField>
            <InputField
              type='text'
              placeholder='Type in your message'
              className='frame-6-big-field'
            ></InputField>
          </form>
          <Button type='button' value='Submit' className='submit-button'>
            SUBMIT
          </Button>
        </div>
        <Footer
          classname='mobile-footer'
          content='© 2023 Asset Mappr. Copyright and rights reserved.'
        ></Footer>
      </div>
    </Background>
  )
}

export default LandingPage
