import { useRef, useState, useEffect } from 'react';
import Card from '../card/Card';
import './Signup.css';
import backgroundImage from '../../images/background_image.png';
import { useNavigate } from 'react-router-dom';

// TODO: these imports to be used during API call
// import axios from "../../utils/api/appservice";
// const REGISTER_URL = '/register';

// Component handling the signup functionality for the user 
// TODO: for mobile browser view, button needs to be at bottom of screen
const Signup = () => {
    const userRef = useRef<HTMLInputElement>(null);
    // TODO: all of these variables will be used during API integration with backend
    const errRef = useRef<HTMLParagraphElement>(null);
    const [user, setUser] = useState('');
    const [designation, setDesignation] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const navigate = useNavigate();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const imageUrl = windowWidth >= 480 ? backgroundImage : 'none';
    // the mobile browser has only 1 signup page. Using these to accommodate that functionality.
    const isMobileView = windowWidth < 480? true: false;
    const [password, setPassword] = useState('');
    const [reenteredPassword, setReenteredPassword] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, []);

    // validate the password
    useEffect(() => {
        const match = password === reenteredPassword;
        setValidMatch(match);
    },[reenteredPassword] // when either the pwd or matchPwd field changes, it automatically checks this function and rerenders the page
    )
    
    const next = async () => {
        // TODO: API call to backend. To be uncommented during integration with backend
        /*
        try{
            const response = await axios.post(REGISTER_URL, JSON.stringify(
                {user, designation, phoneNumber, email}
            ), {headers: {'Content-Type':'application/json'}})
            console.log(response.data);
            setSuccess(true);
        } catch (err:any) {
            // if we didn't hear back from the server at all
            if (!err.response) {
                setErrMsg("Server down. Please try again later.");
            }
            else if (err.response?.status === 409) {
                setErrMsg("User already created. Please sign in.")
            }
            else {
                setErrMsg('Registration failed');
            }
        }*/

        // navigate to different pages depending upon the device browser
        if(!isMobileView) {
            navigate('/signupcontinue');
        }
        else {
            navigate('/welcome3');
        }
    }

        return (
        <main className="App" style={{backgroundImage: `url(${imageUrl})` }}>
            
            <Card>
                <h1 className="signup_header">Asset Mappr</h1>
                <h1 className="subheader">Sign Up</h1>
                <form onSubmit = {next}>
                <div className="input_container">
                
                <input
                    type="text"
                    id="username"
                    className="name-required-field"
                    placeholder="Your Name" 
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    required={true}
                />

                <input
                    type="text"
                    id="designation"
                    className="required-field"
                    placeholder="Designation" 
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setDesignation(e.target.value)}
                    required
                />

                <input
                    type="tel"
                    id="phone"
                    // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    className="required-field"
                    placeholder="Phone Number" 
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />
               
                <input
                    type="text"
                    id="email"
                    className="required-field"
                    placeholder="Email" 
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                
                {isMobileView && (
                    <>
                    <input
                    type="password"
                    id="password"
                    className="required_field"
                    placeholder="Create Password" 
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <input
                    type="password"
                    id="renter_password"
                    className="required-field"
                    placeholder="Re-enter Password" 
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setReenteredPassword(e.target.value)}
                    required
                
                />
                <p id="confirmnote" className={!validMatch ? 'instructions' : 'offscreen'}>
                            Must match the first password input field.
                    </p>
                </>
                )}
                </div>
                <input type="submit" value={isMobileView? 'Sign Up':'Next'} className="signup2_button"/>
                </form>
            </Card>
            </main>
        )
}

export default Signup;