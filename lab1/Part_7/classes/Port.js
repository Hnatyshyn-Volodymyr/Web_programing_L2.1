module.exports = class Port {
    constructor(name, location, capacity) {
        this.name = name;
        this.location = location;
        this.capacity = capacity;
    }

    toString() {
        return `Port ${this.name}, located in ${this.location} with a capacity(number of ships) of ${this.capacity} pier`;
    }
}
