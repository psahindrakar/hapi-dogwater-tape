var test   = require('tape');
var server = require("../../server");

server.serverEventHandler.on('server_running', function() {

	test("Test GET /pizza : After fetching a list of pizza's", function(t) {
	    var options = {
	        method: "GET",
	        url: "/pizza"
	    };
	    
	    server.inject(options, function(res) {
	        t.equal(res.statusCode, 200, 'status code should be 200');
	        server.stop(t.end);
	    });
	});

	test("Test POST Pizza : After creating a pizza", function(t) {
		var options = {
			method : 'POST',
			url : '/pizza'
		}

		server.inject(options, function(res) {
			t.equal(res.statusCode, 200, 'Status code should be 200');
			var pizza = res.result;
			t.equal(pizza.name, 'Chicken thin crust', 'pizza name should match');
			t.equal(pizza.ingredients.length, 2, 'ingredients count should match');
			server.stop(t.end);
		});
	});

});
