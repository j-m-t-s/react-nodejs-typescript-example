import { UserSneaker } from "../types";

export async function getAllUserSneakers() {
    const response = await fetch('/api/sneakers');
    return await response.json();
}

export async function createUserSneaker(sneaker: UserSneaker) {
    const response = await fetch(`/api/sneakers`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sneaker })
    })
    return await response.json();
}