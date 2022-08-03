var app = {
	settings: {
		container: $('.calendar'),
		calendar: $('.front'),
		days: $('.weeks span'),
		form: $('.back'),
		input: $('.back input'),
		buttons: $('.back button')
	},

	init: function() {
		instance = this;
		settings = this.settings;
		this.bindUIActions();
	},

	swap: function(currentSide, desiredSide) {
		settings.container.toggleClass('flip');

    currentSide.fadeOut(900);
    currentSide.hide();
    desiredSide.show();

	},

	bindUIActions: function() {
		settings.days.on('click', function(){
			instance.swap(settings.calendar, settings.form);
			settings.input.focus();
		});

		settings.buttons.on('click', function(){
			instance.swap(settings.form, settings.calendar);
		});
	}
}

app.init();
//current date functionality 
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
var monthlist = ["January","February","March","April","May","June","July",
"August","September","October","November","December"];
var date = new Date();
var day = date.getDate();
var Week = date.getDay();
var month = date.getMonth();

function abbreviation(day) {
	if(day % 10 == 1) {
		dayS = day + "st";
		return dayS;
	} 
	else if(day % 10 == 2) {
		dayS = day + "nd";
		return dayS;
	}
	else if(day % 10 == 3) {
		dayS = day + "rd";
		return dayS;
	}
	else {
		dayS = day + "th";
		return dayS;
	}
}
document.getElementById("day").innerHTML = daylist[Week] + " " + abbreviation(day);
document.getElementById("numDate").innerHTML = monthlist[month] + " " + abbreviation(day) + " " + 2022 



