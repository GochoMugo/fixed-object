/**
 * Make an object immutable! Just that! No more crap!
 */


"use strict";


exports = module.exports = fix;


function fix(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  var immutable = { };
  for (var key in obj) {
    Object.defineProperty(immutable, key, {
      configurable: false,
      enumerable: true,
      value: fix(obj[key]),
      writable: false,
    });
  }
  return immutable;
}
