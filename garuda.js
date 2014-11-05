var kue = require('kue');
var Promise = require('promise');
var jobs = kue.createQueue();
var _airline = 'garuda';
var actions = ['cookies', 'flight', 'price', 'book', 'detail', 'cancel', 'issued', 'print', 'split'];
function createQueueName (i) {
	return _airline + ':' + actions[i];
}
function init() {
	// cookies
	var mockCookies = {exec: function () {return new Promise(function (resolve, reject) {resolve('ok'); }) } }; module.exports = init;
	jobs.process(createQueueName(0), function (job, done) {
		var cookies = mockCookies;
		console.log('ok',cookies);
		cookies.exec()
			.then(function (res) {
				done(null, res);
			});
	});
};

module.exports = init;