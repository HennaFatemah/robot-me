import React from 'react';

const Cards = ({ id, name, email }) => {
    return (
        <div key={id} className="bg-light-grey dib br3 pa3 ma2 grow shadow-5">
            <img src={`https://robohash.org/${name}?200x200`} alt="robots" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Cards;