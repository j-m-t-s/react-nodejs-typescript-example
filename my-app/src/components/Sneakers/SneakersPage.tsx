import React, { useState } from "react"
import { createUserSneaker } from "../../services/SneakerService"
import { UserSneaker } from "../../types"
import { Header } from "../Header"
import UsersList from "./SneakersList"
import CreateUserSneakerForm from "./CreateSneakerForm"
import { DisplayBoard } from "./DisplayBoard"

export const SneakersPage: React.FC = () => {
  const [users, setUsers] = useState<UserSneaker[]>([]);
  const createUserSneakerRequest = (user: UserSneaker) => {
    createUserSneaker(user)
      .then(response => {
        console.log(response);
      });
  }

  return (<>
    <Header></Header>
    <div className="container mrgnbtm">
      <div className="row">
        <div className="col-md-8">
          <CreateUserSneakerForm
            createUserSneaker={createUserSneakerRequest}
            users={users}
          >
          </CreateUserSneakerForm>
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