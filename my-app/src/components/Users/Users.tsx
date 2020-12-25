import React, { useState } from "react";
import { createUser } from "../../services/UserService";
import { User } from "../../types";
import CreateUserForm from "./CreateUserForm";
import { DisplayBoard } from "./DisplayBoard";

interface Props {
    numberOfUsers: number;
    setNumberOfUsers: (newNumber: number) => void;

}

export const Users: React.FC<Props> = ({numberOfUsers, setNumberOfUsers}) => {

  const  createUserRequest = (user: User) => {
        createUser(user)
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