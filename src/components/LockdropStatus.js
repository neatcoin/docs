import React, { useState, useEffect } from 'react';

export default function() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://data.kulupu.network/neatcoin-lockdrop.json')
            .then(res => res.json())
            .then(
                (res) => {
                    setData(res);
                },
                (err) => {
                    setData(null);
                },
            );
    }, []);

    if (data) {
        return (
            <span>Current issuance is {data.neatTotal} NEAT with {data.kulupuLocked} KLP locked.</span>
        );
    } else {
        return (
            <span></span>
        );
    }
}