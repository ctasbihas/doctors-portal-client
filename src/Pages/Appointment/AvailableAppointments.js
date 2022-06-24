import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    
    useEffect(() => {
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);
    let footer = <p>Available Services on </p>;
    if (date) {
        footer = <p>Available Services on {format(date, 'PP')}</p>;
    }
    return (
        <div className='px-12 mb-48'>
            <div className='text-center'>
                <h2 className='text-2xl text-secondary'>{footer}</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    />)
                }
            </div>
            {treatment && <BookingModal date={date} treatment={treatment} />}
        </div>
    );
};

export default AvailableAppointments;