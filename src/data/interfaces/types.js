export class WashingMachine{
    constructor(id, title, image_url, description, created_at, updated_at){
        this.id = id;
        this.title = title;
        this.image_url = image_url;
        this.description = description;
        this.created_at = created_at;
        this.updated_at = updated_at;
        if (typeof id === "object") {
            Object.assign(this, id)
        }
    }
}

export class Shower{
    constructor(id, type, description, created_at, updated_at){
        this.id = id;
        this.type = type;
        this.description = description;
        this.created_at = created_at;
        this.updated_at = updated_at;
        if (typeof id === "object") {
            Object.assign(this, id)
        }
    }
}

export class ShowerReservation{
    constructor(id, shower_id, reservation_start_time, reservation_end_time, created_at, updated_at){
        this.id = id;
        this.shower_id = shower_id;
        this.reservation_start_time = reservation_start_time;
        this.reservation_end_time = reservation_end_time;
        this.created_at = created_at;
        this.updated_at = updated_at;
        if (typeof id === "object") {
            Object.assign(this, id)
        }
    }
}
export class WashingMachineReservation{
    constructor(id, washingMashine_id, reservation_start_time, reservation_end_time, created_at, updated_at){
        this.id = id;
        this.washingMashine_id = washingMashine_id;
        this.reservation_start_time = reservation_start_time;
        this.reservation_end_time = reservation_end_time;
        this.created_at = created_at;
        this.updated_at = updated_at;
        if (typeof id === "object") {
            Object.assign(this, id)
        }
    }
}