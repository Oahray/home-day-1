var getPrimes = require('../app/getPrimes.js');

describe("getPrimes function", function() {

  describe("Case for invalid input", function() {
    it("should return error message for -2", function() {
      expect(getPrimes(-2)).toEqual("Invalid input. This function only takes positive integers.");
    });

    it("should return error message for 'Emjay'", function() {
      expect(getPrimes('Emjay')).toEqual("Invalid input. This function only takes positive integers.");
    });

    it("should return error message for {}", function() {
      expect(getPrimes({})).toEqual("Invalid input. This function only takes positive integers.");
    });

    it("should return error message for no input", function() {
      expect(getPrimes()).toEqual("Invalid input. This function only takes positive integers.");
    });
  });

  describe("Case for positive integer input", function() {

    it("should return an empty array for 0", function() {
      expect(getPrimes(0)).toEqual([]);
    });

    it("should return [2, 3] for 4", function() {
      expect(getPrimes(4)).toEqual([2, 3]);
    });

    it("should return [2, 3, 5] for 5", function() {
      expect(getPrimes(5)).toEqual([2, 3, 5]);
    });

    it("should return [2, 3, 5, 7] for 7", function() {
      expect(getPrimes(7)).toEqual([2, 3, 5, 7]);
    });

    it("should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59] for 60", function() {
      expect(getPrimes(60)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59]);
    });

    it("should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, \
      41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89] for 93", function() {

      expect(getPrimes(93)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41,
                43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89]);
    });

    it("should return [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, \
      53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, \
      113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, \
      181, 187, 191, 193, 197, 199 ] for 201", function() {

      expect(getPrimes(201)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
        71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137,
        139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199]);
    });

  });

});