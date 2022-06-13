import React from 'react';
import Banner from './Banner';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';


const Home = () => {
    return (
        <div>
            <div className='px-12'>
                <Banner />
                <Info />
                <Services />
            </div>
            <MakeAppointment/>
        </div>
    );
};

export default Home;