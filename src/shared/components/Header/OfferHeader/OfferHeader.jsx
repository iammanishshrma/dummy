import React, { useState } from 'react';

import Link from 'next/link';

import './OfferHeader.scss';

const OfferHeader = () => {
    const [offer, setOffer] = useState(true);

    const closeOffer = () => {
        setOffer('hide');
        setTimeout(() => {
            setOffer(false);
        }, 500);
    };

    return (
        <>
            {offer && (
                <div className={`announcement-bar ${offer === 'hide' ? 'hiding' : ''}`}>
                    <h1>
                        Upto 50% Off on Premium Tyres.
                        <Link href="/" className="link-main head-offer-link">
                            View Deals
                        </Link>
                    </h1>
                    <button className="close-notification" onClick={closeOffer}>
                        <i className="icon-close"></i>
                    </button>
                </div>
            )}
        </>
    );
};
export default OfferHeader;
