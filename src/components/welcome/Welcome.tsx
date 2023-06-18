import { useState, useEffect }  from 'react';
import './Welcome.css';
import Card from '../card/Card';
import backgroundImage from '../../images/background_image.png';
import { useNavigate } from 'react-router-dom';

// The first welcome component which prompts user to enter name of community.
const Welcome = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const navigate = useNavigate();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const imageUrl = windowWidth >= 480 ? backgroundImage : 'none';
    
    // handles the visibility of background image when the window width changes.
    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, []);
    const welcome2 = async () => {
        navigate('/welcome2');
    }
    return (
        <main className="App" style={{backgroundImage: `url(${imageUrl})` }}>
        <Card>
        <h1 className="welcome_title">Welcome to Asset Mappr!</h1>
            <p className="subtitle">
                    Select your community to get started
            </p>
            <form>
            <div className="select_community">
            <select  name="community" id="community" onChange={(e) => setSelectedOption(e.target.value)}>
                <option style={{display:'none'}} value="" selected>Select one</option>
                <option value="uniontown">Uniontown</option>
                <option value="testcommunity">Test Community</option>
                <option value="monongahela">Monongahela</option>
            </select>
            </div>
            <input type="submit" value="Continue" className={`welcome_continue_button ${selectedOption ? '' : 'disabled'}`} onClick={welcome2} disabled={!selectedOption}/>
            </form>
            </Card>
            </main>
    );
};

export default Welcome;