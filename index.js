var kue = require('kue');
var jobs = kue.createQueue();
function queueInserter (airline) {
	var _airline = airline;
	return function (action, data) {
		var _action = action;
		var queueName = _airline + ':' + _action;
		data.title = queueName + ' ' +(new Date).toString();
		var job = jobs.create(queueName, data)
			.save( function(err){if( !err ) console.log( 'Adding JOB #' + job.id + ' to queue ' + queueName); });
		return job;
	};
};
module.exports = queueInserter;