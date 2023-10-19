
const introText = document.querySelectorAll('introText')
const skillPage = document.querySelectorAll('#skillPage')
gsap.registerPlugin(ScrollTrigger)




gsap.fromTo("#header", { y: -50 }, { y: 0, duration: 1 });

gsap.fromTo('.introText', { x: -100, opacity: 0 }, { x: 0, duration: 1, opacity: 1, ease: 'power1.inOut', delay: 1.1 })

gsap.fromTo('.welcomePhoto', { y: 300, opacity: 0 }, { y: 0, duration: 1, opacity: 1, ease: 'power1.inOut', delay: 1.2 })

gsap.fromTo('.blogContent', { x: -100, opacity: 0 }, { x: 0, duration: 1, opacity: 1, ease: 'power1.inOut', delay: 1.3 })

