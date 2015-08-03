module.exports = function clockInterval(fn) {
	var second = 1000,
		time = second - (Date.now() % second);

	setTimeout(function() {
		fn();
		clockInterval(fn);
	}, time);
};
