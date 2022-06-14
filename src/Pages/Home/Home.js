import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import ContactForm from './ContactForm';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';


const Home = () => {
    return (
        <div>
            <div className='px-12'>
                <Banner />
                <Info />
                <Services />
            </div>
            <MakeAppointment />
            <div className='px-12'>
                <Testimonials />
            </div>
            <ContactForm />
            <Footer/>
        </div>
    );
};

export default Home;