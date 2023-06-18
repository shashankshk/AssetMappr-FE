import './Disclaimer.css';
import { useState, useEffect } from 'react';
import Card from '../card/Card';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../../images/background_image.png';

// The component which contains the disclaimer
// TODO: button at bottom of screen for mobile browser
const DisclaimerScreen = () => {
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
        navigate('/profile');
    }
    return (
    <main className="disclaimer_app" style={{backgroundImage: `url(${imageUrl})` }}>
        <Card>
            <h1 className="profile_info_title">Profile Information</h1>
            <p className="disclaimer_subtitle">
                Your privacy and security are our top priorities. As you begin using the app, please keep in mind that the following questions are designed to help community planners identify the unique characteristics of participants. This information is crucial for planning purposes and grant applications. 
            </p>
            <p className="disclaimer_content">
                <span className="content_title">Before we begin</span> <br></br>
                We want to assure you that: <br></br><br></br>
            <ul className="disclaimer_list">
                <li> Providing data about your race, ethnicity and sex is OPTIONAL.</li> 
                <li> You will NOT be asked to provide this data again.</li> 
                <li> Your data cannot be used to track or identify you.</li> 
                <li> All data will be analyzed collectively in a secure database.</li>
                <li> Planners and app developers do NOT have access to individual user information or profiles.</li>
                <li> You are the sole owner of your data.</li>
                <li> By participating, you are making a valuable contribution to your community. Thank you for your trust and support!</li>
            </ul>
            </p>
            <input type="submit" value="Continue" className="accept_button" onClick={next}/>
        </Card>
    </main>
    )
}

export default DisclaimerScreen;