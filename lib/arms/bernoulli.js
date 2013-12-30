/**
 * 
 * BernoulliArm, yielding either 0 or 1, depending on `p`
 *
 *     E(x) = p    (The mean/expected value is equal to `p`)
 *
 * @param {Number} probability of a drawing 1
 */
var BernoulliArm = module.exports = function BernoulliArm$constructor(p) {
    this.p = p;
}

/**
 * 
 * Pull the arm, returning 1 if `p` is larger than a random number,
 * otherwise 0.
 *
 * @return {Number} 0 or 1
 */
BernoulliArm.prototype.draw = function BernoulliArm$draw() {
    //coerce boolean to number
    return +(Math.random() < this.p);
}