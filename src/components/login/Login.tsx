import { useRef, useState, useEffect } from 'react';
import Card from '../card/Card';
import './Login.css';
import backgroundImage from '../../images/background_image.png';

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
            <main className="App" style={{backgroundImage: `url(${imageUrl})` }}>
            <Card>
                <h1 className="login_header">Asset Mappr</h1>
                <h1 className="subheader">Login</h1>
                <form onSubmit={handleLogin}>
                <div className="input_container">
                <input
                    type="email"
                    id="username"
                    className="required-field"
                    placeholder="Email" 
                    ref={userRef}
                    autoComplete="off"
                    // onChange={(e) => setUser(e.target.value)}
                    required
                />

                <input
                    type="password"
                    id="username"
                    className="required-field"
                    placeholder="Password" 
                    ref={userRef}
                    autoComplete="off"
                    // onChange={(e) => setPassword(e.target.value)}
                    required
                />
                </div>
                <input type="submit" value="Login" className="login2_button"/>
                </form>
            </Card>
            </main>
        )
}

export default Login;