import React from 'react';
import User from './User';

function UserList({ users }) {
    console.log("UserList");
    return (
        <div>
            {users.map(user => (
                <User
                    user={user}
                    key={user.id}
                // onRemove={onRemove}
                // onToggle={onToggle}
                />
            ))}
        </div>
    );
}

export default React.memo(UserList);