var EpsilonGreedy = require('./lib/algorithms').EpsilonGreedy;

var eg = new EpsilonGreedy(0.5);

eg.initialize(5);
for (var i = 1000, arm; i >= 0; i--) {
    
    arm = eg.selectArm();
    
    //To test, the arms should be preforming in ascending order
    eg.update(arm, Math.random()*2+(arm/5)|0);
};

console.log(eg);