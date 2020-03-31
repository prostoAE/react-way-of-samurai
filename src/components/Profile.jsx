import React from 'react';
import s from './profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.imgBx}>
                <img
                    src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="foto"/>
            </div>
            <div>ava + description</div>
            <div>
                <h2>My posts</h2>
                <div>new post</div>

                <ul className={s.posts}>
                    <li className={s.item}>post 1</li>
                    <li className={s.item}>post 2</li>
                </ul>
            </div>


        </div>
    );
};

export default Profile;
