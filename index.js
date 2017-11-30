var five = require("johnny-five");
var board = new five.Board();
var blinkerStop;

board.on("ready", function() {
    var light = new five.Pin(7);
    var led = new five.Led(5);
    led2.on()
    setTimeout(function() {
        led2.off();
    }, 10000);

    var counter = 0;
    var lights = function() {

        this.status = false;
        this.on = function() {
            led.on();
            this.status = true;
        }

        this.off = function() {
            led.off();
            status = false;
        }

        this.blink = function(freq, limit) {
            if (counter < limit) {
                blinkerStop = setInterval(function() {
                    if (this.status) {
                        led.off();
                        this.status = false;
                    } else {
                        led.on();
                        this.status = true;
                    }
                }, freq)
            } else {
                led.on();
            }

        }

    }
    var llights = new lights(7);
    var llights2 = new lights(5);
    console.log(llights.counter);

    var counter = 0;
    counter++;
    setInterval(function() {
        console.log(counter++);
        if (counter >= 2 && counter < 6) {
            llights.on();
            llights2.on();
        } else if (counter >= 6 && counter < 12) {
            llights.blink(10, 250);
            setTimeout(function() {
                clearInterval(blinkerStop);
                llights.off();
            }, 200);
        } else if (counter === 12) {
            counter = 0;
        }
    }, 1000)

});
