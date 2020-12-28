import React, { useState } from "react"
import { createUser } from "../../services/UserService"
import { User } from "../../types"
import { Header } from "../Header"
import UsersList from "./SneakersList"
import CreateUserForm from "./CreateSneakerForm"
import { DisplayBoard } from "./DisplayBoard"

export const SneakersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const createUserRequest = (user: User) => {
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
            createUser={createUserRequest}
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