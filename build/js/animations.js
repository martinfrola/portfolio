//.set() --> Le asignas algo a lo seleccionado
//.to() -->El estado al que va a cambiar lo seleccionado
//.from()--> Indica el estado de comienzo
//stagger: --> Podes seleccionar varios elementos y afectarlos en tiempos distintos
//.timeline() --> Para manejar los tiempos en que van apareciendo las animaciones


gsap.registerPlugin(ScrollTrigger)


gsap.set(".title", { x: -1000});
gsap.to(".title", {duration: 2, x: 0, ease:"back.out(1.7)" });
gsap.set(".nav", { x: 1000});
gsap.to(".nav", {duration: 2, x: 0,ease:"back.out(1.7)" });


gsap.from(".about-me-img", {
    scrollTrigger: {
        trigger: ".about-me-img",
        toggleActions: "restart auto resume none"
    },
    x: -1000,
    duration: 1,
    toggleActions:"restart pause resume none"
});

gsap.from(".about-me-text", {
    scrollTrigger: {
        trigger: ".about-me-text",
        toggleActions:"restart pause resume none"
    },
    x: 1000,
    duration: 1,
});



gsap.from(".skill", {
    scrollTrigger: {
      trigger: ".skills",
      toggleActions:"restart pause resume none" 
    },
    y: 100,
    scale: 0.5,
    stagger:0.3,
    duration: 1
})





