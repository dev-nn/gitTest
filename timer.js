function Timer(options) {
    //public
    var defaultOptions = {
        delay: 20,
        stopFrame: 0,
        loop: true,
        frameElementPrefixId: 'timer_'
    }

//    for(var option in defaultOptions) this[option] = options && options[option]!==undefined ? options[option] : defaultOptions[option];
//    for (var option in defaultOptions) {
//        if (this[option] = options && options[option] !== undefined) {
//            options[option];
//        } else {
//            defaultOptions[option];
//        }
//    }
    for (var option in defaultOptions) {
        if (options[option] !== undefined) {
            this[option] = options[option]
        } else {
            this[option] = options[option]
        }
    }

    t = 0;

    //
}

var timer = new Timer({delay: 500, loop: false});