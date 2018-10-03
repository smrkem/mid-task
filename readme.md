This is my initial explorations using the
jsPsych library.

https://www.jspsych.org

## MID TASK

- want to present a fixation point for some duration - to be determined by jittering requirements for neuroimaging.
- want to present a target for some duration - determined to acheive a 66% success rate

***

### iteration 1

Set up a basic block of trials in jsPsych and use some js library to display the data at the end. Use this to prototype staircase methods and also to get some experience visualising data with javascript.

Each trial looks like:
- fixation (random duration b/w 200,1000ms)
- target (duration obtained from the Staircase)
- fixation (random duration b/w 200,1000ms)
- feedback

At the end of the block (25 trials long), show the data from the staircase and the overall success rate.

### iteration 2

The Staircase is parametrized by:
- `n_up: (int) the number of failed responses required to increase the target presention time `
- `n_down: (int) the number of success responses required to decrease the target presentation time`
- `increment: (int or function) the amount to change the target presentation time by`

Make these values configurable in the browser before the block of trials.
Get better at displaying the data.

toDo:
- implement limits
- detect reversals in staircase
