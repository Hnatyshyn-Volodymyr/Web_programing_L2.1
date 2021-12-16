module.exports = class Pier {
    constructor(name, location, capacity){
            this.name = name;
            this.location = location;
            this.capacity = capacity;
            this.currentShipsNumber = 0;
    }

    toString() {
        return `Pier ${this.name}, located in ${this.location} with a capacity(number of ships) of ${this.capacity} ships`;
    }
}
