import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.imgBx}>
                <img
                    src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="foto"/>
            </div>
            <div>ava + description</div>
            <MyPosts/>
        </div>
    );
};

export default Profile;
