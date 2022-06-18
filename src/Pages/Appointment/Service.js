import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center">
                    <h2 className="text-xl font-bold text-secondary">{name}</h2>
                    <p className='text-sm'>
                        {
                            slots.length
                                ? <span>{slots[0]}</span>
                                : <span>No slots available today</span>
                        }
                    </p>
                    <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    <label
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        for="booking-modal"
                        class="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">Book appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;