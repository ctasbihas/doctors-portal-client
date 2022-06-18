import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ date, treatment }) => {
    const {_id, name, slots } = treatment;

    const handleBooking = (event) => {
        event.preventDefault()
        const slot = event.target.slot.value;
        console.log(_id, name, slot);
    }
    
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-secondary">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4 justify-items-center mt-3'>
                        <input disabled value={format(date, 'PP')} className="input input-ghost w-full max-w-xs bg-base-300" />

                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot} >{slot}</option>)
                            }
                        </select>

                        <input type="text" name='name' placeholder="Your name" className="input input-ghost border-x-4 border-base-200 w-full max-w-xs" />

                        <input type="text" name='email' placeholder="Email Address" className="input input-ghost border-x-4 border-base-200 w-full max-w-xs" />

                        <input type="text" name='phone' placeholder="Phone Number" className="input input-ghost border-x-4 border-base-200 w-full max-w-xs" />
                        <input type="submit" value="Submit" className="text-white btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;