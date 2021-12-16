const {Port, Ship, Pier, Collection} = require('./classes');

const portCollection = new Collection([
    new Port('Everhard', 'USA', 3),
    new Port('Terrigan', 'Chily', 2),
    new Port('Holarr', 'Ukraine', 2)
])

const pierCollection = new Collection([
    new Pier('Everhard_1','Everhard', 6),
    new Pier('Everhard_2','Everhard', 4),
    new Pier('Everhard_3','Everhard', 3),
    new Pier('Terrigan_1','Terrigan', 2),
    new Pier('Terrigan_2','Terrigan', 3),
    new Pier('Holarr_1','Holarr', 1),
    new Pier('Holarr_2','Holarr', 2)
])

const shipCollection = new Collection([
    new Ship('EverGreen', 'Everhard_1', 2012.05, 2012.25),
    new Ship('Morrygan', 'Everhard_2', 2012.01, 2012.09),
    new Ship('Nimits', 'Everhard_3', 2012.19, 2012.21),
    new Ship('Hault', 'Holarr_2', 2101.03, 2101.25),
    new Ship('Roma', 'Terrigan_1', 2012.08, 2101.02)
])

//a
portCollection.addElement(new Port('Sumeru', 'Russian', 4));
//b
portCollection.editElement(el => el.name === 'Terrigan', {name: 'Lum'});
//c
portCollection.deleteElement(el => el.name === 'Lum');
//d
console.log(portCollection.findElement(el => el.location === 'Russian'));
portCollection.print();

//e
shipCollection.addElement(new Ship('Kylo', 'Sumeru_3', 2101.03, 2101.25));
//f
shipCollection.editByProperty('name', 'Kylo', {arrival: 2101.05});
//g
shipCollection.deleteByProperty('name', 'Roma');
//h
console.log(shipCollection.findByProperty('location', 'Holarr_2'));
shipCollection.print();

//i
pierCollection.addElement(new Pier('Sumeru_1', 'Sumeru', 2));
//j
pierCollection.deleteElement(el => el.name === 'Holarr_1');
//k
const ship = shipCollection.getElement(0);
const pierToDepartFrom = pierCollection.getElement(1);
const pierToArriveTo = pierCollection.getElement(0);

ship.leavePier(pierToDepartFrom);
ship.arriveToPear(pierToArriveTo);

console.log(ship.toString());
//l
console.log(shipCollection.findElement(el => el.location.includes('Everhard_2')));
