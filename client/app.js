var Mn = Marionette;

var app = new Mn.Application({
	onBeforeStart: function(){console.log("Before Start Method")},
	initialize: function(){console.log("Initialize")}	
});

app.on("before:start", function(){console.log("before Start")});

app.on("start", function(){console.log("Start")});


app.start();