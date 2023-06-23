import { useRef, useState, useEffect } from 'react';
import Card from '../../components/card/Card';
import './Login.css';
import backgroundImage from '../../images/background_image.png';
import Background from '../../components/background/Background';
import Header from '../../components/title/Header';
import InputField from '../../components/input/InputField';
import Button from '../../components/button/Button';
// Component handling the login functionality for the user
const Login = () => {
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

    // TODO: these variables will be used for the API call to backend - to be uncommented then
    // const [user, setUser] = useState('');
    // const [password, setPassword] = useState('');

    const handleLogin = async () => {
        // axios api call
        
    }

        return (
            <Background classname='App' backgroundImage={imageUrl}>
            <Card>
                <Header classname='login_header' content='Asset Mappr'/>
                <Header classname='subheader' content='Login'/>
                <form onSubmit={handleLogin}>
                <div className="input_container">
                    <InputField type="email" id="username" className="required-field" placeholder="Email" ref={userRef} autocomplete="off" required={true}/>
                    <InputField type="password" id="username" className="required-field" placeholder="Password" ref={userRef} autocomplete="off" required={true}/>
                </div>
                <Button type="submit" value="Login" className="loginscreen_button" onClick={handleLogin}>Login</Button>
                </form>
            </Card>
            </Background>
        )
}

export default Login;

// onChange={(e) => setUser(e.target.value)}
// onChange={(e) => setPassword(e.target.value)}