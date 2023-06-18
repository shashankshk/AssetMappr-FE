import { useRef, useState, useEffect } from 'react';
import Card from '../card/Card';
import './Signupcont.css';
import backgroundImage from '../../images/background_image.png';
import { useNavigate } from 'react-router-dom';

// Component which prompts user to enter password during signup 
const Signupcontinue = () => {
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

    const userRef = useRef<HTMLInputElement>(null);
    const [password, setPassword] = useState('');
    const [reenteredPassword, setReenteredPassword] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    // const [errMsg, setErrMsg] = useState('');

    // TODO: uncomment code during API integration with backend
    const next = async () => {
        
        /*
      try{
          const response = await axios.post(REGISTER_URL, JSON.stringify(
              {password, reenteredPassword}
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
      navigate('/welcome3');
  }


    // validate the password
    useEffect(() => {
        const match = password === reenteredPassword;
        setValidMatch(match);
    },[reenteredPassword] // when either the pwd or matchPwd field changes, it automatically checks this function and rerenders the page
    )
        return (
        <main className="App" style={{backgroundImage: `url(${imageUrl})` }}>
            <Card>
                <h1 className="signupcontinue_header">Asset Mappr</h1>
                <h1 className="subheader">Sign Up</h1>
                <form onSubmit={next}>
                <div className="input_container">
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
                </div>
                <input type="submit" value="Sign Up" className={`signup2_button ${validMatch ? '' : 'disabled'} `}/>
                </form>
            </Card>
            </main>
        )
}

export default Signupcontinue;