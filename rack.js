"use strict";

class Rack {
  constructor() {
    // TODO
    /*this.tiles = {e: 12, a: 9, i: 9, o: 8, n: 6, r: 6, t: 4, s: 4, u: 4, d: 4, g: 3, b: 2, c: 2, m: 2, p: 2, f: 2, 
          h: 2, v: 2, w: 2, y: 2, k: 1, j: 1, x: 1, q: 1, z: 1};*/
    this.tiles = {};
  }

  /**
   * Returns an object of available tiles mapped to their amount.
   * @returns {Object<string, number>} An object describing the tiles available in this rack.
   */
  getAvailableTiles() {
    // TODO
    return this.tiles;
  }

  /**
   * This function will draw n tiles from the game's bag.
   * If there are not enough tiles in the bag, this should take all the remaining ones.
   * @param {number} n The number of tiles to take from the bag.
   * @param {Game} game The game whose bag to take the tiles from.
   */
  takeFromBag(n, game) {
    // TODO
    let array = game.takeFromBag(n);
    array.forEach(x => this.tiles.hasOwnProperty(x) ? (this.tiles[x] = this.tiles[x] + 1) : this.tiles[x] = 1);
    /*for (let x = 0; x < array.length; ++x){
      if (this.tiles.hasOwnProperty(array[x])){
        this.tiles[x] = this.tiles[x] + 1;
      }
      else{
        this.tiles[array[x]] = 1;
      }
    }*/
  }
}

export { Rack };
