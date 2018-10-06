# Success Rate
Given a requirement that each person should have a success rate of 66%, what's the best approach?

## Adaptive Staircase
We can use an adaptive staircases to determine a 'perceptual threshold'; ie: where the subject is X percent likely to detect the stimulus. In this context that threshold can be interpreted as the length of time to display a target stimulus so that the subject is X percent likely to respond within the presentation time.

If we have a practice block beforehand where we can do enough trials to obtain 8 or so reversals (~ 20 trials?), we can use this to determine the presentation time for the target on subsequent blocks.

This seems very easy to 'defeat' by simply being deliberately slower during the practice block. We can put some 'smarts' into the trials themselves to adapt the time to keep the success rate close to the target.

## On-The-Fly Presentation Time 
We can keep track of the cumulative success rate, and alter the presentation time accordingly (longer if the current success rate is below the target - shorter otherwise).

Once we converge on the threshold, this might lead to a very predictable win-one-lose-on pattern. We can reduce the 'step' size over time so that the presentation time varies within the 'natural' range of the subject.