import React from 'react';
import Cards from '../Cards/Cards';

const CardsList = ({ robots }) => {
    return (
        <div>
            {robots.map((user, i) => {
                return (
                    <Cards
                        key={robots[i].id}
                        id={robots[i].id}
                        name={robots[i].name}
                        email={robots[i].email}
                    />
                )
            })}
        </div>
    );
};

export default CardsList;