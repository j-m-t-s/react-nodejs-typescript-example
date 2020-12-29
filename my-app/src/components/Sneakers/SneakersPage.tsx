import React, { useState } from "react"
import { createUser } from "../../services/UserService"
import { UserSneaker } from "../../types"
import { Header } from "../Header"
import UsersList from "./SneakersList"
import CreateUserForm from "./CreateSneakerForm"
import { DisplayBoard } from "./DisplayBoard"

export const SneakersPage: React.FC = () => {
  const [users, setUsers] = useState<UserSneaker[]>([]);
  const createUserSneakerRequest = (user: UserSneaker) => {
    createUser(user)
      .then(response => {
        console.log(response);
      });
  }

  return (<>
    <Header></Header>
    <div className="container mrgnbtm">
      <div className="row">
        <div className="col-md-8">
          <CreateUserForm
            createUser={createUserSneakerRequest}
            users={users}
          >
          </CreateUserForm>
        </div>
        <div className="col-md-4">
          <DisplayBoard
            setUsers={setUsers}
            users={users}
          >
          </DisplayBoard>
        </div>
      </div>
    </div>
    <div className="row mrgnbtm">
      <UsersList users={users}></UsersList>
    </div>
  </>)


}