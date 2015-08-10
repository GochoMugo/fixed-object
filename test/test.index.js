/**
 * Tests
 */


"use strict";


// npm-installed modules
const should = require("should");


// module variables
const fix = require("../lib/index");


describe("fix", function() {
  it("returns an immutable object", function() {
    let mutable = {
      first: "me",
      outer: {
        inner: "courage",
        int: 2,
      },
    };
    let immutable = fix(mutable);

    should(immutable).be.an.Object();
    should.notStrictEqual(immutable, mutable);

    should.throws(function() {
      immutable.first = "you";
    }, TypeError);

    should.throws(function() {
      immutable.outer = {};
    }, TypeError);

    should.throws(function() {
      immutable.outer.inner = "coward";
    }, TypeError);
  });

  it("ignores if not an object", function() {
    [-1, 0, 1, null, undefined, true, false, "", "string", function() { }].forEach(function(nonObj) {
      let val = nonObj;
      should.doesNotThrow(function() {
        should.equal(fix(val), val);
      });
    });
  });
});
