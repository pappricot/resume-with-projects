jQuery(function ($) {

    'use strict';

    // --------------------------------------------------------------------
    // PreLoader
    // --------------------------------------------------------------------

    (function () {
        $('#preloader').delay(200).fadeOut('slow');
    }());


    // --------------------------------------------------------------------
    // Owl Carousal
    // --------------------------------------------------------------------

    (function () {
        $("#review").owlCarousel({
            autoPlay: 3000, //Set AutoPlay to 3 seconds
            items: 2,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 3]

        });
    }());

    const messages = [
        'Programmer',
        'Doodler',
        'Creator'
    ]

    const headerText = 'The details of my life can be inconsequential: I learnt to be a lifelong full stacker since the day I graduated. Starting with Harvard iLab, following a break from start-up world working for a digital agency, I realized I can’t live without the roller coaster of joy and tension start-up life used to give me. It’s breathtaking.'

    let currentMessageIndex = 0;

    const printMessage = (message) => {
        for (let i=0; i< message.length; i++) {
            const text = message.substring(0, i+1)
            setTimeout(() => {
                $('.name-wrapper span').text(text);
            }, i*250)
            
        }
    }

    const printMessage2 = (message) => {
        for (let i=0; i< message.length; i++) {
            const text = message.substring(0, i+1)
            setTimeout(() => {
                $('.header-wrapper p').text(text);
            }, i*50)
            
        }
    }
    printMessage2(headerText)
    
    const changeMessage = () => {
        printMessage(messages[currentMessageIndex]);
        currentMessageIndex = (currentMessageIndex+1)%3
    }

    setInterval(changeMessage, 3000)
   
    
//    $('.progress-wrapper').scrollspy({
//        onEnter: function(element, position) {
//            console.log('entered')
//         $('.progress-bar#1').width('100%')
//        },
//        onLeave: function(element, position) {
//         $('.progress-bar#1').width('0%')
//        }
//    })

//temporary
setTimeout(()=> {
    $('.progress-bar#1').width('100%')
}, 3000)
setTimeout(()=> {
    $('.progress-bar#2').width('90%')
}, 3000)
setTimeout(()=> {
    $('.progress-bar#3').width('75%')
}, 3000)
setTimeout(()=> {
    $('.progress-bar#4').width('55%')
}, 3000)
setTimeout(()=> {
    $('.progress-bar#5').width('75%')
}, 3000)
setTimeout(()=> {
    $('.progress-bar#6').width('60%')
}, 3000)
setTimeout(()=> {
    $('.progress-bar#7').width('75%')
}, 3000)
setTimeout(()=> {
    $('.progress-bar#8').width('90%')
}, 3000)

}); // JQuery end