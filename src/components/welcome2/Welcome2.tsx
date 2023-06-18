import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import backgroundImage from '../../images/background_image.png';
import Card from '../card/Card';
import './Welcome2.css';

// Component for the second screen which prompts user to either sign up or login
const WelcomeScreen = () => {
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
    
    // navigating to signup page on button click
    const signup = async () => {
        navigate('/signup');
    }
    // navigating to login page on button click
    const login = async () => {
        navigate('/login');
    }

    return (
        <main className="App" style={{backgroundImage: `url(${imageUrl})` }}>
        <Card>
            <h1 className="welcome2_title">Welcome to Asset Mappr!</h1>
            <p className="welcome2_subtitle">
                    Login or Sign Up to get started
            </p>
            <input type="submit" value="Sign Up" className="signup_button" onClick={signup}/>
            <input type="submit" value="Login" className="login_button" onClick={login}/>
            <a href="" className="skip">
                Skip for now
            </a>
        </Card>
        <a href="" className="admin">
                Sign in with admin code
        </a>
        </main>
    )
}

export default WelcomeScreen;