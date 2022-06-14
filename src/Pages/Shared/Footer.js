import React from 'react';

const Footer = () => {
    return (
        <footer className="p-10 bg-neutral text-neutral-content">
            <div className='footer'>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Emergency Checkup</a>
                    <a className="link link-hover">Monthly Checkup</a>
                    <a className="link link-hover">Weekly Checkup</a>
                    <a className="link link-hover">Deep Checkup</a>
                </div>
                <div>
                    <span className="footer-title">ORAL HEALTH</span>
                    <a className="link link-hover">Fluoride Treatment</a>
                    <a className="link link-hover">Cavity Filling</a>
                    <a className="link link-hover">Teeth Whitening</a>
                </div>
                <div>
                    <span className="footer-title">OUR ADDRESS</span>
                    <a className="link link-hover">New York - 101010 Hudson</a>
                </div>
            </div>
            <div className='my-10 text-center'>
                <p>Copyright © {(new Date().getFullYear())} - All right reserved by Doctors Portal</p>
            </div>
        </footer>
    );
};

export default Footer;