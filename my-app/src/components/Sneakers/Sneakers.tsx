import React, { useState } from "react";
import { createUser } from "../../services/UserService";
import { UserSneaker } from "../../types";
import CreateUserForm from "./CreateSneakerForm";
import { DisplayBoard } from "./DisplayBoard";

interface Props {
    numberOfUsers: number;
    setNumberOfUsers: (newNumber: number) => void;

}

export const Users: React.FC<Props> = ({numberOfUsers, setNumberOfUsers}) => {

  const  createUserRequest = (sneaker: UserSneaker) => {
        createUser(sneaker)
          .then(response => {
            console.log(response);
            setNumberOfUsers(numberOfUsers + 1)
        });
    }
    return (<>
        {/* <div className="col-md-8">
            <CreateUserForm
                createUser={createUserRequest}
            >
            </CreateUserForm>
        </div>
        <div className="col-md-4">
            <DisplayBoard
                users={users}
                setUsers={setUsers}
            >
            </DisplayBoard>
        </div> */}
    </>)
}