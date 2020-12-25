import React, { useRef, useState } from 'react'
import { User } from '../../types';

interface UserForm {
    firstName?: string;
    lastName?: string;
    email?: string;
}

interface Props {
    users: User[];
    createUser: (user: User) => void;
}

const CreateUserForm: React.FC<Props> = ({ createUser }) => {

    const [amountCreated, setAmountCreated] = useState(0);
    const [user, setUser] = useState<UserForm>({});

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                    <h2>Create User</h2>
                    <form>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="exampleInputEmail1">First Name</label>
                                <input type="text" onChange={(e) => setUser(currentUser => ({
                                    ...currentUser,
                                    firstName: e.currentTarget.value
                                }))} className="form-control" name="firstname" id="firstname" aria-describedby="emailHelp" placeholder="First Name" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="exampleInputPassword1">Last Name</label>
                                <input type="text" onChange={(e) => setUser(currentUser => ({
                                    ...currentUser,
                                    lastName: e.currentTarget.value
                                }))} className="form-control" name="lastname" id="lastname" placeholder="Last Name" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-12">
                                <label htmlFor="exampleInputEmail1">Email</label>
                                <input type="text" onChange={(e) => setUser(currentUser => ({
                                    ...currentUser,
                                    email: e.currentTarget.value
                                }))} className="form-control" name="email" id="email" aria-describedby="emailHelp" placeholder="Email" />
                            </div>
                        </div>
                        <button type="button" onClick={(e) => {
                            createUser(user as User);
                            setAmountCreated(amountCreated => amountCreated + 1)

                        }} className="btn btn-danger">Create</button>
                    </form>
                    {`${amountCreated} users have been created in this session`}
                </div>
            </div>
        </div>
    )
}

export default CreateUserForm