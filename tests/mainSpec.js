var expect = require('chai').expect;

describe('Queue Inserter', function () {
	describe('Garuda', function () {
		it('should add job with garuda type into queue', function (next) {
			var queueInserter = require('../index')('garuda');
			// console.log(mockCookies);
			var data = {cookies: {}}
			var job = queueInserter('cookies', data);
			job.on('complete', function (result) {
				expect(result).to.eq('ok');
				next();
			})
		});
	});
});