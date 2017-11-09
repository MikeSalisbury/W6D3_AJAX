const followToggle = require('./follow_toggle');

$(() => {
  $('button.follow-toggle').each( (idx, button) => {
     new followToggle(button);
   });
});
