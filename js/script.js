let controller = new ScrollMagic.Controller();

let animacio1 = TweenMax.to("#globus", 3, {
    morphSVG: {
        shape: "#panyals",
    }
});

new ScrollMagic.Scene({
        triggerElement: "#contingut",
        triggerHook: 0,
        duration: "100%"
    })
    .setTween( animacio1 )
    .setPin("#contingut")
    .addIndicators()
    .addTo(controller);

