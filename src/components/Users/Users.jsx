import React, {Component} from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user-default.png'

class Users extends Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.totalUsersCount}`)
        .then(response => {
            this.props.setUsers(response.data.items);
            // this.props.setTotalCount(response.data.totalCount); //Вызывает ошибку из-за большого обьема данных (> 100)
            this.props.setTotalCount(40);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.totalUsersCount}`)
        .then(response => {
            this.props.setUsers(response.data.items);
        });
    };

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <div className={s.content}>
            <ul className={s.pagination}>
                {pages.map(page => {
                    return <li className={this.props.currentPage === page ? s.active : ''} key={page}>
                        <a href="#" onClick={(e) => {
                            e.preventDefault();
                            this.onPageChanged(page)
                        }}>
                            {page}
                        </a>
                    </li>
                })}

                {/*<li className={s.active}><a href="#">2</a></li>*/}

            </ul>
            {
                this.props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} className={s.userPhoto}
                             alt="avatar"/>
                    </div>
                    <div>
                        {user.followed
                            ? <button onClick={() => this.props.unfollow(user.id)}>Unfollow</button>
                            : <button onClick={() => this.props.follow(user.id)}>Follow</button>}
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
    }
}

export default Users;
