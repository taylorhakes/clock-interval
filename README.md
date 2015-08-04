# clock-interval
A precise interval timer pinned to system clock

## How to use
```
npm install clock-interval
```

#### Example usage
Update an element with the currnt time
```js
var clockInterval = require('clock-interval');

function pad(num) {
  return ('0' + num).slice(-2);
}
  
clockInterval(function() {
    var clockEl = document.getElementById('clock'),
        dateObj = new Date(); 
      clockEl.innerHTML = pad(dateObj.getHours()) + ':' + pad(dateObj.getMinutes()) + ':' + pad(dateObj.getSeconds());
});
```

Cancel the interval
```js
var timer = clockInterval(function() {});

// Cancel the timer
timer.cancel();
```

## Why not use setInterval?
Check the link for more info [https://taylorhakes.com/2015/08/03/perfect-setinterval/](https://taylorhakes.com/2015/08/03/perfect-setinterval/)