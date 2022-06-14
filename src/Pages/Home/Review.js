import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl border">
            <div className="card-body">
                <p>{review.review}</p>
                <div className="card-actions justify-start items-center mt-5">
                    <div class="avatar mr-3">
                        <div class="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={review.img} />
                        </div>
                    </div>
                    <div>
                        <h2 className='text-xl'>{review.name}</h2>
                        <h4 className="text-base">{review.location}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;