import React from 'react';
import quote from '../../assets/icons/quote.svg';

const Testimonials = () => {
    return (
        <section className='mt-20'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl font-bold text-secondary">Testimonial</h4>
                    <h2 className='text-4xl text-accent'>What Our Patients Says</h2>
                </div>
                <div className='w-24 lg:w-48 h-14'>
                    <img src={quote} alt="" />
                </div>
            </div>
            <div></div>
        </section>
    );
};

export default Testimonials;