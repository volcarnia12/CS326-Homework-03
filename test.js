import { shuffle } from "./shuffle.js";
import { Game } from "./game.js";
import { Rack } from "./rack.js";

console.log(shuffle([1, 2, 3, 4, 5])); // this should produce a different sequence each time
let g = new Game();
let r = new Rack();

console.log("Hello");
// YOUR TESTS GO HERE
// Game class tests
console.assert((() => {
    const expectedTaken = g.array.slice(0, 3);
    const expectedLeftover = g.array.slice(3);
    const actualTaken = g.takeFromBag(3);
    const actualLeftover = g.array;
    return JSON.stringify(expectedTaken) === JSON.stringify(actualTaken)
            && JSON.stringify(expectedLeftover) === JSON.stringify(actualLeftover);
})(), 'takeFromBag not removing tiles properly.');

let g1 = new Game();
console.assert((() => {
    const expectedGrid = g1.getGrid();
    console.log(expectedGrid);
    g1.playAt('overflow', {x: 9, y: 1}, false);
    g1.playAt('overflow', {x: 1, y: 9}, true);
    const actualGrid = g1.getGrid();
    console.log(actualGrid);
    return JSON.stringify(expectedGrid) === JSON.stringify(actualGrid);
})(), 'playAt not checking for overflow off grid.');

let g2 = new Game();
console.assert((() => {
    g2.playAt('middle', {x: 8, y : 8}, true);
    const grid = g2.getGrid();
    return grid[7][7] === 'm' && grid[7][8] === 'i' && grid[7][9] === 'd' && grid[7][10] === 'd' && grid[7][11] === 'l' && grid[7][12] === 'e'; 
})(), 'playAt not placing the word "middle" properly at coords [8, 8] horizontally.');

let g3 = new Game();
console.assert((() => {
    g3.playAt('corner', {x: 1, y: 15}, false);
    const grid = g3.getGrid();
    return grid[0][14] === 'c' && grid[1][14] === 'o' && grid[2][14] === 'r' && grid[3][14] === 'n' && grid[4][14] === 'e' && grid[5][14] === 'r'; 
})(), 'playAt not placing the word "corner" properly at coords [15, 1] vertically.');

let g4 = new Game();
console.assert((() => {
    const s1 = g4.playAt('cats', {x: 1, y: 4}, true); // should be 18
    const s2 = g4.playAt('bears', {x: 6, y: 14}, false); // should be 15
    const s3 = g4.playAt('dogs', {x: 12, y: 15}, false); // should be 24
    const s4 = g4.playAt('rea*y', {x: 8, y: 1}, false); // should be 21
    console.log(g4.getGrid());
    console.log(s1);
    console.log(s2);
    console.log(s3);
    console.log(s4);
    return s1 === 6 && s2 === 7 && s3 === 6 && s4 === 7;
})(), 'playAt not calculating scores properly.');

// Rack class tests

let g5 = new Game();
console.assert((() => {
    const expectedAvailable = {};
    const expectedTiles = g5.array.slice(0, 50);

    for (let char of expectedTiles) {
      if (char in expectedAvailable) {
        expectedAvailable[char] += 1;
      } else {
        expectedAvailable[char] = 1;
      }
    }

    r.takeFromBag(50, g5);
    const actualAvailable = r.getAvailableTiles();
    return JSON.stringify(expectedAvailable) === JSON.stringify(actualAvailable);
})(), 'takeFromBag does not map tiles to their amount properly');

console.assert((() => {
    r.takeFromBag(55, g5); // only 50 left, should take as many as it can, so all 50
    console.log(g5.array.length);
    return g5.array.length === 0;
})(), 'takeFromBag not taking all remaining tiles if there are not enough');

console.assert((() => {
    const expectedTiles = r.tiles;
    const actualTiles = r.getAvailableTiles();
    return JSON.stringify(expectedTiles) === JSON.stringify(actualTiles);
})(), 'getAvailableTiles not returning availableTiles object');

let g6 = new Game();
let r2 = new Rack();
console.assert((() => {
    const beforeTaking = {...r2.getAvailableTiles()};
    r2.takeFromBag(0, g6);
    const afterTaking = r2.getAvailableTiles();
    return JSON.stringify(beforeTaking) === JSON.stringify(afterTaking);
})(), 'takeFromBag should not modify availableTiles when n = 0');
