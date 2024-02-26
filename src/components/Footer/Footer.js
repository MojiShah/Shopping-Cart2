import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

import './Footer.css';

export default function Footer() {
    return (
        <div className='footer'>
            <div className="left">
                Moji Online Shop
            </div>
            <div className="right">
                <span>Contact With Us on Our Social Medias: </span>
                <div className="social">
                    <FaInstagram />
                    <FaFacebook />
                    <FaTelegram />
                    <FaTwitter />
                </div>
            </div>
        </div>
    )
}
