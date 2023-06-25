import { useState, useEffect }  from 'react';
import './Welcome.css';
import Card from '../../components/card/Card';
import backgroundImage from '../../images/background_image.png';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/Button';
import SelectOption from '../../components/select/SelectOption';
import Background from '../../components/background/Background';
import Header from '../../components/title/header/Header';
import Subheader from '../../components/title/subheader/Subheader';
// The first welcome component which prompts user to enter name of community.
const Welcome = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const navigate = useNavigate();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const imageUrl = windowWidth >= 480 ? backgroundImage : 'none';
    
    const options = [
        { label: 'Uniontown', value: 'uniontown' },
        { label: 'Test Community', value: 'testcommunity' },
        { label: 'Monongahela', value: 'monongahela' },
    ];

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
        navigate('/welcomecont');
    }
   
    
    return (
        <Background classname='App' backgroundImage={imageUrl}>
        <Card>
            <Header classname='welcome_title' content='Welcome to Asset Mappr!'/>
            <Subheader classname='subtitle' content='Select your community to get started'/>
            <form>
            <div className="select_community">
                <SelectOption name='community' id='community' onchange={(e) => setSelectedOption(e.target.value)} initialValue='' initialLabel='Select one' options={options}></SelectOption>
            </div>
            <Button type='submit' value='Continue' className={`welcome_continue_button ${selectedOption ? '' : 'disabled'}`} onClick={welcome2} disabled={!selectedOption} >Continue</Button> 
            </form>
        </Card>
        </Background>
    );
};

export default Welcome;