module.exports = function clockInterval(fn) {
	var second = 1000, timer;
	function interval() {
		var time = second - (Date.now() % second);

		timer = setTimeout(function timeout() {
			fn();
			interval();
		}, time);
	}
	interval();

	return {
		cancel: function cancel() {
			clearTimeout(timer);
		}
	};
};
