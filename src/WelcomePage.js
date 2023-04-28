import React from 'react';
import './WelcomePage.css'; // import the CSS file for styling

function WelcomePage() {
    return (
        <div className="welcome-page">
            <h1>Welcome to My Website!</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                efficitur, nulla eu imperdiet blandit, nisi ex malesuada ipsum, vel
                interdum mauris dolor et velit. Suspendisse nec magna condimentum,
                dignissim lacus ac, vestibulum lorem. Aliquam at arcu vel libero
                faucibus ornare ac a mauris.
            </p>
            <button>Get Started</button>
        </div>
    );
}

export default WelcomePage;
