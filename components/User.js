import React from 'react';

const user = ({user}) => {
    return (
        <div>
            <p>{user.name}</p>
                        <p>{user.email}</p>
        </div>
    );
};

export default user;