import React from 'react'
import facebookLogo from '../assets/ico-facebook.png'
import instagramLogo from '../assets/ico-instagram.png'
import tikTokLogo from '../assets/ico-tiktok.png'
import footerStyle from '../Styles/Footer.module.css'


const Footer = () => {
    return (
        <footer style={{backgroundColor : 'red' }}>
            <div>
                <p>Logo</p>
                <p>© 2024</p>
            </div>
            <div className={footerStyle.socialIcon}>
                <img src={facebookLogo} alt="facebook-logo" />
                <img src={instagramLogo} alt="instagram-logo" />
                <img src={tikTokLogo} alt="tiktok-logo" />
            </div>
        </footer>
    )
}

export default Footer