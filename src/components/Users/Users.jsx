import React from 'react';
import s from './Users.module.css';

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png',
                followed: false,
                fullName: 'Dmitry',
                status: 'i`m a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png',
                followed: true,
                fullName: 'Oleg',
                status: 'i`m a looser',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png',
                followed: false,
                fullName: 'Andrew',
                status: 'Just fun',
                location: {city: 'Ukraine', country: 'Kiyv'}
            },
        ]);
    }

    return <div className={s.content}>
        {
            props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img src={user.photoUrl} className={s.userPhoto} alt="avatar"/>
                    </div>
                    <div>
                        {user.followed
                            ? <button onClick={() => props.unfollow(user.id)}>Unfollow</button>
                            : <button onClick={() => props.follow(user.id)}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.fullName}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{user.location.country}</div>
                        <div>{user.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
};

export default Users;
