/**
 * 
 * Epsilon-greedy bandit algorithm
 *
 * @param {Number} epsilon value between (0, 1), both exclusive
 * @param {Array} counts from running experiment
 * @param {Array} values from running experiment
 */
var EpsilonGreedy = module.exports = function EpsilonGreedy$constructor(epsilon, counts, values) {
    this.epsilon = epsilon;
    this.counts = counts;
    this.values = values;
}

/**
 *
 * Initialize new experiment
 * 
 * @param {Number} nArms to initialize
 * @return {EpsilonGreedy} for chaining
 */
EpsilonGreedy.prototype.initialize = function EpsilonGreedy$initialize(nArms) {
    this.counts = [];
    this.values = [];

    while(--nArms)
    {
        this.counts.push(0);
        this.values.push(0);
    }

    return this;
}

/**
 *
 * Select an arm to test. Epsilon-greedy will pick a random number, x.
 * If ε < x, we go with the current best preforming arm, otherwise we pick a random arm to test.
 * 
 * @return {Number} index of arm to test
 */
EpsilonGreedy.prototype.selectArm = function EpsilonGreedy$selectArm() {
    if(this.epsilon < Math.random())
        return this.values.indexOf(Math.max.apply(Math, this.values));
    else
        return Math.random() * this.values.length | 0;
}

/**
 *
 * Initialize new experiment
 * 
 * @param {Number} armIndex. Index of arm reciving `reward`
 * @param {Number} reward recieved
 * @return {EpsilonGreedy} for chaining
 */
EpsilonGreedy.prototype.update = function EpsilonGreedy$update(armIndex, reward) {
    ++this.counts[armIndex];

    var n = this.counts[armIndex],
        val = this.values[armIndex];

    this.values[armIndex] = ((n - 1) / n) * val + (1 / n) * reward;

    return this;
}