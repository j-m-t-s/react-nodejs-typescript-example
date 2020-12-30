import React, { useState } from 'react'
import { getAllUserSneakers } from '../../services/SneakerService';
import { UserSneaker } from '../../types';

interface Props {
    users: UserSneaker[];
    setUsers: (newUsers: UserSneaker[]) => void;
}

export const DisplayBoard: React.FC<Props> = ({ users, setUsers }) => {


    const populateUserSneakerRows = () => {
        getAllUserSneakers()
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
                <button type="button" onClick={(e) => populateUserSneakerRows()} className="btn btn-warning">Get all Users</button>
            </div>
        </div>
    )
}