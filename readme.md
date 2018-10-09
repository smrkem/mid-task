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

### iteration 3
1. Adjust experimental setup so it detects early and late responses (responses during the fixation period).
2. Provide top level data for each trial:
3. Fullscreen capability
4. Improve staircase performance
5. Independent survey portion
- assigns or gets a participant_id
- task portion can be started using matching survey portion data
6. initial v1 experiment (dev hosting)

### iteration 4
1. Start putting in real copy and desired jittering.
2. Start storing data

### Questions
- Do we want to display the target for the entire presentation duration, or have it disappear as soon as the user responds (like in current version)?
- What kind of data do we want to store for each trial, each block
- hosting, expenses, potential security issues, etc. 

### Backlog
- Refactor js. Look at testing.
- Basic ML algorithm to detect cheating?