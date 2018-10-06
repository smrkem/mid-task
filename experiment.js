
function jitterTime(){
  return jsPsych.randomization.sampleWithoutReplacement([500, 1250, 2000], 1)[0]
}

function getMIDTimeline(settings) {
  // Check for valid settings and create staircase:
  if (typeof settings.numTrials==="undefined") {
    throw new Error("No numTrials specified for experiment.");
  }
  if (typeof settings.factor==="undefined") {
    throw new Error("No factor specified for staircase.");
  }
  if (typeof settings.nDown === "undefined") {
      throw new Error("No n-down specified for staircase.");
  }
  if (typeof settings.firstVal === "undefined") {
    throw new Error("No firstVal specified for staircase.");
  }

  var staircase = new Staircase({
    firstVal: settings.firstVal,
    down: settings.nDown,
    factor: settings.factor,
    operation: 'multiply',
    limits: [0, 600],
    verbosity: 1
  });


  // create test here so it uses staircase:
  var test = {
    type: "html-keyboard-response",
    stimulus: '<div style="display: block; height: 80px; width: 80px; background: #666; border-radius: 50%;"></div>',
    trial_duration: function() { return staircase.getValue() },
    choices: ['Enter', 'Space'],
    data: {target: true},
    on_finish: function(data) {
        data.presentation_duration = staircase.getValue();
        var hit = data.rt ? true : false;
        data.hit = hit;
        staircase.addResponse(hit);
    }
  }

  var instructions = {
    type: "html-keyboard-response",
    data: { instructions: true },
    stimulus: `<p>This block will consist of ${settings.numTrials} trials.</p>` +
      "<p>The fixation will appear followed by the target. Try to press the ENTER key as quickly as possible while the target is displayed." +
      "<p></p><p>Press any key to begin.</p>"
  }

  // Create MID timeline
  var timeline = []
  timeline.push({
    type: 'fullscreen',
    fullscreen_mode: true
  });
  
  timeline.push(instructions);
  
  var test_procedure = {
    timeline: [fixation1, test, fixation2, feedback],
    repetitions: settings.numTrials
  }
  timeline.push(test_procedure);

  timeline.push({
    type: 'fullscreen',
    fullscreen_mode: false
  });
  

  return timeline;
}


// Set up experiment bits in vars where possible:

var fixation1 = {
  type: 'html-keyboard-response',
  data: { fixation1: true, beginTrial: true },
  stimulus: '<div style="font-size:60px;">+</div>',
  response_ends_trial: false,
  trial_duration: function() { return jitterTime(); },
  on_finish: function(data) {
    data.presentation_duration = this.trial_duration;
  }
}

var fixation2 = {
  type: 'html-keyboard-response',
  data: { fixation2: true },
  stimulus: '<div style="font-size:60px;">+</div>',
  response_ends_trial: false,
  trial_duration: function() { return jitterTime(); },
  on_finish: function(data) {
    data.presentation_duration = this.trial_duration;
  }
}

var feedback = {
  type: "html-keyboard-response",
  stimulus: function(){
    var targetData = JSON.parse(
      jsPsych.data.getLastTimelineData().filter({target: true}).json()
    ).pop();

    var msg = targetData.hit ? 'You Win!!!' : 'Sorry. You Lose.';
    return '<p>' + msg + '</p>';
  },
  data: { feedback: true },
  response_ends_trial: false,
  trial_duration: function() { return jitterTime(); }
}
