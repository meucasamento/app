import Guest from "../../models/guest.model";

export interface GuestRepositoryInterface {

    guests(): Promise<Guest[]>

}