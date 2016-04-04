
$(function () {
	$('button[id="language"]').click(function() {
	
		if ($(this).hasClass('island'))
		{
			$('.isl').each(function() {
				$(this).addClass('all-hidden');
			});
			$('.eng').each(function() {
				$(this).removeClass('all-hidden');
			});

			$(this).removeClass('island');
			$(this).html('Íslenska');
		}
		else
		{
			$('.eng').each(function() {
				$(this).addClass('all-hidden');
			});
			$('.isl').each(function() {
				$(this).removeClass('all-hidden');
			});
				
			$(this).addClass('island');
			$(this).html('English');	
		}
	});	
});

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var raceDeadline = "May 28 2016 12:00:00 GMT+0000";
var registrationDeadline = "May 24 2016 00:00:00 GMT+0000";

initializeClock('registrationClock', registrationDeadline);
initializeClock('raceClock', raceDeadline);
