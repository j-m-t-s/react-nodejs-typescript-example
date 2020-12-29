import { UserSneaker } from "../types";

export async function getAllUsers() {

    const response = await fetch('/api/users');
    return await response.json();
}

export async function createUser(sneaker: UserSneaker) {
    console.log("sneaker", sneaker);
    const response = await fetch(`/api/user`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sneaker })
    })
    return await response.json();
}