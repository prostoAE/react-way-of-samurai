import React from 'react';
import s from './Users.module.css';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {
    return (
        <div className={s.content}>
            <Paginator currentPage={currentPage}
                       onPageChanged={onPageChanged}
                       totalItemsCount={totalUsersCount}
                       pageSize={pageSize}/>
            {
                users.map(user => <User key={user.id}
                                        user={user}
                                        follow={props.follow}
                                        unfollow={props.unfollow}
                                        followingInProgress={props.followingInProgress}/>)
            }
        </div>
    )
};

export default Users;
