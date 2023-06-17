gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.section').forEach((sections)=>{
  ScrollTrigger.create({
    trigger: sections,
    start: 'top left',
    pin: true,
    pinSpacing: false    
  })  
})