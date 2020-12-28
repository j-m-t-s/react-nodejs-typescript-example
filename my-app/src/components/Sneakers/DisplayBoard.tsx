import React, { useState } from 'react'
import { getAllUsers } from '../../services/UserService';
import { User } from '../../types';

interface Props {
    users: User[];
    setUsers: (newUsers: User[]) => void;
}

export const DisplayBoard: React.FC<Props> = ({ users, setUsers }) => {


    const populateUserRows = () => {
        getAllUsers()
            .then(users => {
                console.log(users)
                setUsers(users)
            });
    }


    return (
        <div className="display-board">
            <h4>Users Created</h4>
            <div className="number">
                {users.length}
            </div>
            <div className="btn">
                <button type="button" onClick={(e) => populateUserRows()} className="btn btn-warning">Get all Users</button>
            </div>
        </div>
    )
}