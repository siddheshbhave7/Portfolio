import React, { useState, useEffect } from 'react';
import './Homepage.css';

function Homepage() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {setVisible(prev => !prev)}, 2500);
        return () => clearInterval(interval);
    }, []);

    
    return (
        <div className="main open-sans-homepage">
            <div className="leftdiv">
                <h1> Siddhesh</h1>
                <a href='https://github.com/siddheshbhave7'> Github</a>
                {visible ? <p>A Full Stack Developer</p> : <p>An Enthusiast in development</p>}
            </div>
            <div className="rightdiv">
                <h1>Welcome to our Homepage</h1>
                <p>This is a clean, modern React app showcasing a professional look and feel.</p>
            </div>
        </div>
    );
}

export default Homepage;
