import Card from '../card/Card';
import { useState, useEffect } from 'react';
import './ProfileInfo.css';
import backgroundImage from '../../images/background_image.png';
import { useNavigate } from 'react-router-dom';

// component which asks the user for their profile information
// TODO: For mobile view, modify the positions of the header and the button
const ProfileInfoScreen = () => {
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
    const handleProfileSubmit = async () => {
        navigate('/home');
    }

    const [selectedRace, setSelectedRace] = useState('');
    const [selectedSex, setSelectedSex] = useState('');
    
    return (
        <main className="App" style={{backgroundImage: `url(${imageUrl})` }}>
            <Card>
                <h1 className="header">Profile Information</h1>
                <form onSubmit={handleProfileSubmit}>
                <div className="profile_container">
                    <label htmlFor="date_of_birth" className="required_dob">1. What is your date of birth?</label>
                    <input
                        type="date"
                        id="date_of_birth"
                        className="profile_dateofbirth"
                        placeholder="MM/DD/YYYY" 
                        autoComplete="off"
                        required
                    />
                    <label htmlFor="ethnicity">2. What is your ethnicity? (Optional)</label>
                    <select className="select_ethnicity" id="ethnicity" name="ethnicity">
                        <option style={{display:'none'}} value="" selected>Select your response</option>
                        <option value="Hispanic">Hispanic</option>
                        <option value="Non-Hispanic">Non-Hispanic</option>
                    </select>


                    <label htmlFor="race">3. What is your race? (Optional)</label>
                    <select className="select_race" id="race" name="race" onChange={(e) => setSelectedRace(e.target.value)}>
                        <option style={{display:'none'}} value="" selected>Select your response</option>
                        <option value="White">White</option>
                        <option value="Black or African American">Black or African American</option>
                        <option value="American Indian or Alaska Native">American Indian or Alaska Native</option>
                        <option value="Asian">Asian</option>
                        <option value="Native Hawaiian or Other Pacific Islander">Native Hawaiian or Other Pacific Islander</option>
                        <option value="self_identify">I self identify as another race</option>
                        <option value="not_to_identify">I wish not to self-identify</option>
                    </select>
                    
                    {selectedRace==='self_identify' && <input type="text" className="self_race" placeholder="Please tell us what you identify as (optional)"/>}

                    <label htmlFor="sex">4. What is your sex? (Optional)</label>
                    <select className="select_sex" id="sex" name="sex" onChange={(e) => setSelectedSex(e.target.value)}>
                        <option style={{display:'none'}} value="" selected>Select your response</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="Other">Other, which?</option>
                        <option value="not_to_identify">I wish not to self-identify</option>
                    </select>

                    {selectedSex==='Other' && <input type="text" className="self_sex" placeholder="Please tell us which (optional)"/>}

                    </div>
                    <input type="submit" value="Finish" className="profile_continue_button"/>
                    </form>
                </Card>
        </main>
    )
}

export default ProfileInfoScreen;