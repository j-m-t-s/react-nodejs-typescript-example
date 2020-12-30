import { Sneaker } from "../database/models/sneaker";
import { UserSneaker } from "../database/models/userSneaker";

export class UserSneakerDTO {
    // from Sneaker model
    description?: string;
    // from UserSneaker model
    userDescription?: string;
    // Automagic fields
    id?: number;
    sneakerId?: number;
    userId?: number;
    createdAt?: Date;
    updatedAt?: Date;
    size: string;
    title: string;

    constructor(userSneaker: UserSneaker, sneaker: Sneaker) {
        this.userDescription = userSneaker.userDescription;
        this.createdAt = userSneaker.createdAt;
        this.updatedAt = userSneaker.createdAt;
        this.description = sneaker.description;
        this.title = sneaker.title;
    }
}