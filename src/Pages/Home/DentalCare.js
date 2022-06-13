import React from 'react';
import treatment from '../../assets/images/treatment.png';

const DentalCare = () => {
    return (
        <div className="hero min-h-screen w-5/6 mx-auto">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
                <div className='ml-16 pr-6'>
                    <h1 className="text-5xl font-bold text-accent">Exceptional Dental Care, on Your Terms</h1>
                    <p class="py-6 text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;