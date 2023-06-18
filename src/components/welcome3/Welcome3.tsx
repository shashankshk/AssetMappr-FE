import './Welcome3.css';
import Card from '../card/Card';
import backgroundImage from '../../images/background_image.png';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// component showing the welcome message to users after signing up
// TODO: for mobile browser view, button needs to be at bottom of screen
const WelcomeContScreen = () => {
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
    <main className="App" style={{backgroundImage: `url(${imageUrl})` }}>
        <Card>
            <span className="checkicon">
                    <FontAwesomeIcon icon={faCircleCheck} />
            </span>
            <h1 className="welcome3_title">Welcome to our community planning app!</h1>
            
            <input type="submit" value="Continue" className="continue2_button" onClick={next}/>
        </Card>
        </main>
    )
}

export default WelcomeContScreen;