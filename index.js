var EpsilonGreedy = require('./lib/algorithms').EpsilonGreedy,
    BernoulliArm = require('./lib/arms').Bernoulli,
    _shuffle = require('lodash.shuffle');

var eg = new EpsilonGreedy(0.5);

var means = _shuffle([0.1, 0.1, 0.1, 0.1, 0.9]),
    arms = means.map(function(mu) { return new BernoulliArm(mu) });

eg.initialize(means.length);
for (var i = 10000, arm; i >= 0; i--) {
    
    arm = eg.selectArm();
    eg.update(arm, arms[arm].draw());
};

console.log(means);
console.log(eg);