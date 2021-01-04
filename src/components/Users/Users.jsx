import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/user-default.png'
import {NavLink} from 'react-router-dom';
import * as axios from "axios";

let Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={s.content}>
      <ul className={s.pagination}>
        {pages.map(page => {
          return <li className={props.currentPage === page ? s.active : ''} key={page}>
            <a href="/" onClick={(e) => {
              e.preventDefault();
              props.onPageChanged(page)
            }}>
              {page}
            </a>
          </li>
        })}

        {/*<li className={s.active}><a href="#">2</a></li>*/}

      </ul>
      {
        props.users.map(user => <div key={user.id}>
          <span>
            <div>
              <NavLink to={'/profile/' + user.id}>
                <img src={user.photos.small != null ? user.photos.small : userPhoto} className={s.userPhoto}
                     alt="avatar"/>
              </NavLink>
            </div>
            <div>
              {user.followed
                ? <button onClick={() => {

                  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                    withCredentials: true,
                    headers: {
                      "API-KEY": "e38e4e5c-c8c7-4a15-8dbe-da85369d5773"
                    }
                  })
                    .then(response => {
                      if (response.data.resultCode === 0) {
                        props.unfollow(user.id)
                      }
                    });

                }
                }>Unfollow</button>
                : <button onClick={() => {

                  axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                    withCredentials: true,
                    headers: {
                      "API-KEY": "e38e4e5c-c8c7-4a15-8dbe-da85369d5773"
                    }
                  })
                    .then(response => {
                      if (response.data.resultCode === 0) {
                        props.follow(user.id)
                      }
                    });

                }
                }>Follow</button>}
            </div>
          </span>
          <span>
            <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>
            <span>
                <div>{'user.location.country'}</div>
                <div>{'user.location.city'}</div>
            </span>
          </span>
        </div>)
      }
    </div>
  )
};

export default Users;
