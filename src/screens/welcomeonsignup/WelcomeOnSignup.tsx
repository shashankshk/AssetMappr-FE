import Card from '../../components/card/Card';
import backgroundImage from '../../images/background_image.png';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Icon from '../../components/icon/Icon';
import Background from '../../components/background/Background';
import Header from '../../components/title/header/Header';
import Button from '../../components/button/Button';
// component showing the welcome message to users after signing up
// TODO: for mobile browser view, button needs to be at bottom of screen
const WelcomeOnSignupScreen = () => {
    const navigate = useNavigate();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const imageUrl = windowWidth >= 480 ? backgroundImage : 'none';
    
    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, []);
    
    const next = async () => {
        navigate('/disclaimer');
    }
    return (
        <Background classname='App' backgroundImage={imageUrl}>
        <Card classname='card'>
            <Icon classname='checkicon' iconname={faCircleCheck}></Icon>
            <Header classname='welcome3_title' content='Welcome to our community planning app!'/>
            <Button type="submit" value="Continue" className="continue2_button" onClick={next}>Continue</Button>
        </Card>
        </Background>
        
    )
}

export default WelcomeOnSignupScreen;

/*

 <span className="checkicon">
                    <FontAwesomeIcon icon={faCircleCheck} />
            </span>
            <main className="App" style={{backgroundImage: `url(${imageUrl})` }}>
            </main>
*/