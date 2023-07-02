
import React, { useState } from 'react';

const Donation = () => {
    const [donationAmount, setDonationAmount] = useState('');

    const handleDonationChange = (e) => {
        setDonationAmount(e.target.value);
    };

    const handleDonationSubmit = (e) => {
        e.preventDefault();
        // Perform donation processing or submission here
        console.log('Donation amount:', donationAmount);
        // Redirect to the desired link
        window.location.href = 'https://pages.razorpay.com/studycenter'; // Replace with your desired link
    };

    return (
        <div>
            <h2><p>In a world where kindness and compassion can make a significant impact, it is crucial for people to come together to support one another. It is with this spirit of unity that we kindly request your generous donation. Your contribution can help transform lives, provide essential resources, and bring hope to those in need. Every donation, no matter the size, can make a meaningful difference. Additionally, we encourage you to consider making a personal commitment to donate regularly. By doing so, you can help create a lasting positive impact on individuals and communities that rely on the power of collective giving. Together, let us extend a helping hand and make a difference in the lives of those who need it most.</p></h2>
            <form onSubmit={handleDonationSubmit}>
                {/* <label>
            Donation Amount:
            <input
                type="number"
                min="1"
                step="1"
                value={donationAmount}
                onChange={handleDonationChange}
                required
            />
        </label> */}
                <center><button type="submit">Donate</button></center>
            </form>
        </div>
    );
};

export default Donation;

