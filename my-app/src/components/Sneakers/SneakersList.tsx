import React from 'react'
import { UserSneaker } from '../../types'

interface Props {
    users: UserSneaker[]
}

const UsersList: React.FC<Props> = ({ users }) => {

    if (!users || users.length === 0) return null

    console.log("users", users);
    const UserRow = (user: UserSneaker, index: number) => {

        return (
            <tr key={index} className={index % 2 === 0 ? 'odd' : 'even'}>
                <td>{index + 1}</td>
                <td>{user.title}</td>
                <td>{user.userDescription}</td>
                <td>{user.size}</td>
            </tr>
        )
    }

    const userTable = users.map((user, index) => UserRow(user, index))

    return (
        <div className="container">
            <h2>Users</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>User SNeaker Id</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Size</th>
                    </tr>
                </thead>
                <tbody>
                    {userTable}
                </tbody>
            </table>
        </div>
    )
}

export default UsersList;