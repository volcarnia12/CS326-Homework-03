"use strict";

class Game {
  constructor() {
    // TODO
  }

  /**
   * This function removes the first n tiles from the bag and returns them. If n
   * is greater than the number of remaining tiles, this removes and returns all
   * the tiles from the bag. If the bag is empty, this returns an empty array.
   * @param {number} n The number of tiles to take from the bag.
   * @returns {Array<string>} The first n tiles removed from the bag.
   */
  takeFromBag(n) {
    // TODO
  }

  /**
   * This function returns the current state of the board. The positions where
   * there are no tiles can be anything (undefined, null, ...).
   * @returns {Array<Array<string>>} A 2-dimensional array representing the
   * current grid.
   */
  getGrid() {
    // TODO
  }

  /**
   * This function will be called when a player takes a turn and attempts to
   * place a word on the board. It will check whether the word is valid and can
   * be placed at the given position. If not, it'll return -1. It will then
   * compute the score that the word will receive and return it, taking into
   * account special positions.
   * @param {string} word The word to be placed.
   * @param {Object<x|y, number>} position The position, an object with
   * properties x and y. Example: { x: 2, y: 3 }.
   * @param {boolean} direction Set to true if horizontal, false if vertical.
   * @returns {number} The score the word will obtain (including special tiles),
   * or -1 if the word is invalid.
   */
  playAt(word, position, direction) {
    // TODO
  }
}

export { Game };
