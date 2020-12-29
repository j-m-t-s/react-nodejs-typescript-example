import React, { useRef, useState } from 'react'
import { UserSneaker } from '../../types';

interface SneakerForm {
    title: string;
    userDescription?: string;
    size: string;
}

interface Props {
    users: UserSneaker[];
    createUser: (user: UserSneaker) => void;
}

const CreateUserForm: React.FC<Props> = ({ createUser }) => {

    const [amountCreated, setAmountCreated] = useState(0);
    const [sneaker, setSneaker] = useState<SneakerForm>({
        title: "",
        userDescription: undefined,
        size: ""
    });


    console.log("current sneaker", sneaker);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                    <h2>Add a Sneaker</h2>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <label >Sneaker Name</label>
                        <input value={sneaker.title} type="text" onChange={(e) => {
                            setSneaker({
                                ...sneaker,
                                title: e.currentTarget.value
                            })
                        }} placeholder="Sneaker Name" />
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <label >Description</label>
                            <input value={sneaker.userDescription} type="text" onChange={(e) => {
                                console.log("in onchange", e.currentTarget)
                                console.log(sneaker)
                                setSneaker({
                                    ...sneaker,
                                    userDescription: e.currentTarget.value
                                })
                            }} placeholder="Enter a description" />
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <label >Size</label>
                        <input type="text" value={sneaker.size} onChange={(e) => {
                            setSneaker({
                                ...sneaker,
                                size: e.currentTarget.value
                            })
                        }} placeholder="Size" />
                    </div>
                    <button type="button" onClick={(e) => {
                        createUser(sneaker as UserSneaker);
                        setAmountCreated(amountCreated => amountCreated + 1)

                    }} className="btn btn-danger">Create</button>
                    {`${amountCreated} users have been created in this session`}
                </div>
            </div>
        </div>
    )
}

export default CreateUserForm