"use strict";

import { shuffle } from "./shuffle.js";
import { canConstructWord, baseScore, possibleWords, bestPossibleWords, makeWord } from "/326-homework-02-scrabble-utilities-volcarnia12/scrabbleUtils.js";


class Game {
  constructor() {
    // TODO
    this.array = ['e','e','e','e','e','e','e','e','e','e','e','e','a','a','a','a','a','a','a','a','a','i','i','i','i',
            'i','i','i','i','i','o','o','o','o','o','o','o','o','n','n','n','n','n','n','r','r','r','r','r','r',
            't','t','t','t','t','t','l','l','l','l','s','s','s','s','u','u','u','u','d','d','d','d','g','g','g',
            'b','b','c','c','m','m','p','p','f','f','h','h','v','v','w','w','y','y','k','j','x','q','z'];
    shuffle(this.array);
    this.board = [];
    for (let x = 0; x < 15; ++x){
      this.board[x] = [''];
      for (let y = 0; y < 15; ++y){
        this.board[x][y] = [''];
      }
    }
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
    let array = [];
    if (this.array.length === 0){
      return array;
    }
    if (this.array.length < n){
      array = this.array;
      this.array = [];
      return array;
    }
    for (let x = 0; x < n; ++x){
      array.push(this.array[x]);
    }
    this.array = this.array.slice(n);
    return array;
  }

  /**
   * This function returns the current state of the board. The positions where
   * there are no tiles can be anything (undefined, null, ...).
   * @returns {Array<Array<string>>} A 2-dimensional array representing the
   * current grid.
   */
  getGrid() {
    // TODO
    return this.board;
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
    let validWord = true;
    let score = 0;
    for (let i = 0; i < word.length; ++i){
      if (direction && (word.length <= 15 - (position.y - 1))){
        let row = position.x - 1;
        let column = position.y + i - 1;
        if (this.board[row][column] != ""){
          validWord = false;
          break;
        }
      }
      else if (direction && (word.length > 15 - (position.y - 1))){
        validWord = false;
        break;
      }
      else if (!direction && (word.length <= 15 - (position.x - 1))){
        let row = position.x + i - 1;
        let column = position.y - 1;
        if (this.board[row][column] != ""){
          validWord = false;
          break;
        }
      }
      else if (!direction && (word.length > 15 - (position.x - 1))){
        validWord = false;
        break;
      }
    }
    if (!validWord){ 
      return -1;
    }
    for(let i = 0; i < word.length; ++i){
      if (direction){
        let row = position.x - 1;
        let column = position.y + i - 1;
        this.board[row][column] = word[i];
      }
      else{
        let row = position.x + i - 1;
        let column = position.y - 1;
        this.board[row][column] = word[i];
      }
    }
    
    score = baseScore(word);
    return score;
  }
}

export { Game };
