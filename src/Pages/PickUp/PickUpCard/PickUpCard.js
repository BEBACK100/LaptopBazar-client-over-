import React from 'react';

const PickUpCard = () => {
    return (
        <>




            <input type="checkbox" id="pick-up" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <label htmlFor="pick-up" className="btn">X</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PickUpCard;