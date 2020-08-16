window.addEventListener("load", function () {

    var main = document.getElementById('main');
    var hurdles = document.getElementById('hurdles');

    var frame = [
        { background: "red" },
        { background: "blue" }

        // { transfrom: 'translateX(100%)' },
        // { transfrom: 'translateX(-100%)' }
    ];

    var framehurdle = [
        {  transform: "translateX(0px)" },
        {  transform: "translateX(600px)" }

        // { transfrom: 'translateX(100%)' },
        // { transfrom: 'translateX(-100%)' }
    ];


    var timing = {
        duration: 3000,
        iterations: Infinity,
        playbackRate: -2
    };
    var timinghurdle = {
        duration: 3000,
        iterations: Infinity,
        playbackRate: -2
    };

    main.animate(frame, timing);
    hurdles.animate(framehurdle, timinghurdle);

})