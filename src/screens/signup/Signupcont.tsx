import { useRef, useState, useEffect } from 'react';
import Card from '../../components/card/Card';
import './Signup.css';
import backgroundImage from '../../images/background_image.png';
import { useNavigate } from 'react-router-dom';
import Background from '../../components/background/Background';
import Header from '../../components/title/header/Header';
import InputField from '../../components/input/inputfield/InputField';
import ErrorMsg from '../../components/content/ErrorMsg';
import Button from '../../components/button/Button';
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
      navigate('/onsignup');
  }


    // validate the password
    useEffect(() => {
        const match = password === reenteredPassword;
        setValidMatch(match);
    },[reenteredPassword] // when either the pwd or matchPwd field changes, it automatically checks this function and rerenders the page
    )
        return (
        <Background classname='App' backgroundImage={imageUrl}>
            <Card classname='card'>
                <Header classname='signup_header' content='Asset Mappr'/>
                <Header classname='subheader' content='Sign Up'/>
                <form onSubmit={next}>
                <div className="input_container">
                    <InputField type="password" id="password" className="required_field" placeholder="Create Password" ref={userRef} autocomplete="off" onchange={(e) => setPassword(e.target.value)} required={true}/>
                    <InputField type="password" id="renter_password" className="required-field" placeholder="Re-enter Password" ref={userRef} autocomplete="off" onchange={(e) => setReenteredPassword(e.target.value)} required={true}/>
                    <ErrorMsg id='confirmnote' className={!validMatch ? 'instructions' : 'offscreen'} label='Must match the first password input field.'/>
                </div>
                <Button type="submit" value="Sign Up" className={`signup2_button ${validMatch ? '' : 'disabled'} `}>Sign Up</Button>
                </form>
            </Card>
        </Background>
        )
}

export default Signupcontinue;