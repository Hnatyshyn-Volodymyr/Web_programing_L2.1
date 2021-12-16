module.exports = class Ship {
    constructor(name, location, arrivalTime, departureTime) {
        this.name = name;
        this.location = location;
        this.arrivalTime = arrivalTime;
        this.departureTime = departureTime;

        this.arrivalPier = null;
        this.departurePier = null;
    }

    toString() {
        return `Ship ${this.name}, located in ${this.location} arrives at
         ${this.arrivalTime} and the ship leaves port at ${this.departureTime}. ` +
          (this.departurePier ? `It departs from pier ${this.departurePier.name}. ` : '') +
          (this.arrivalPier ? `It arrives to pier ${this.arrivalPier.name}.` : '');
    }
    //
    // toArr() {
    //     return `Ship ${this.name}, arrives ${this.arrival} and the ship leaves port ${this.departure}`;
    // }
    leavePier(pier) {
        pier.currentShipsNumber = pier.currentShipsNumber === 0 ? 0 : pier.currentShipsNumber - 1;
        this.departurePier = pier;
    }
    arriveToPear(pier) {
        if (pier.currentShipsNumber + 1 > pier.capacity) {
            throw new Error(`Pier ${pier.name} cannot receive any more ships`)
        }

        ++pier.currentShipsNumber
        this.arrivalPier = pier;
    }
}
