/* library.js
=====================================================
Library of functions
===================================================== */


/* randomUpTo(maxValue)
=====================================================
Returns a random integer from 1 to max (inclusive).
===================================================== */
function randomUpTo(maxValue) {
    return Math.floor(Math.random() * maxValue) + 1;
}
