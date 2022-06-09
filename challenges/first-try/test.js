// Enclosing in IIFE to reduce chances of name collisions
//  when concatenating tests to submission
(function () {
    const assert = require('assert');

    describe('First Try', function () {
        describe('one()', function () {
            it('should return 1 when called', function () {
                assert.equal(one(), 1);
            });
        });
    });
})()
