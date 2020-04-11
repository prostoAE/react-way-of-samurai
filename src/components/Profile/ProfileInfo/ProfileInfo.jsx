import React, {Fragment} from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <Fragment>
            <div className={s.imgBx}>
                <img
                    src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="foto"/>
            </div>
            <div className={s.descriptionBlock}>ava + description</div>
        </Fragment>
    );
};

export default ProfileInfo;
