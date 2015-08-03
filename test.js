var test = require('tape'),
	sinon = require('sinon'),
	clockInterval = require('./index');


test('Calls setTimeout at correct time', function(t) {
	var timerStub = sinon.stub(global, 'setTimeout'),
		fn = function() {};
	sinon.stub(Date, 'now').returns(1438569041176);
	clockInterval(fn);
	t.assert(timerStub.args[0][1] === 824);

	timerStub.restore();
	t.end();
});

test('Calls function', function(t) {
	var fn = sinon.stub();

	var timer = sinon.useFakeTimers();


	sinon.stub(Date, 'now').returns(1438569041176);
	clockInterval(fn);

	timer.tick(823);
	t.assert(fn.calledOnce === false);
	timer.tick(1);
	t.assert(fn.calledOnce);


	timer.restore();
	t.end();
});

test('Calls function multiple times', function(t) {
	var fn = sinon.stub();

	var timer = sinon.useFakeTimers();

	// Return 2 different dates
	sinon.stub(Date, 'now', (function() {
		var count = 0;
		return function() {
			if (count === 0) {
				count++;
				return 1438569041176;
			} else {
				return 1438569042004;
			}

		}
	})());
	clockInterval(fn);

	timer.tick(824);
	timer.tick(995);
	t.assert(fn.callCount === 1);
	timer.tick(1);
	t.assert(fn.callCount === 2);

	timer.restore();
	t.end();
});
