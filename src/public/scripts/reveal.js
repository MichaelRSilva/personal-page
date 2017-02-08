/**
 * Created by michaeldfti on 04/02/17.
 * This functions create effects in page
 * The page sections items showing when the user scroll the page
 */

//=== ScrollReveal

window.sr = ScrollReveal();

//Header
sr.reveal('.text-main h1', {duration: 300, delay: 250, origin: "left", container: '.text-main', distance: '300px'});
sr.reveal('.text-main p:first-child', {duration: 300, delay: 250, origin: "right", container: '.text-main', distance: '300px'});
sr.reveal('.text-main p:nth-child(2)', {duration: 300, delay: 300, container: '.text-main'});

//About
sr.reveal('.section-model-1 .text', {duration: 300, delay: 250, origin: "left", distance: '200px'});
sr.reveal('.section-model-1 .user-data', {duration: 300, delay: 300, origin: "right", distance: '200px'});
sr.reveal('.section-model-1 .image', {duration: 300, delay: 100, origin: "bottom", distance: '300px'});

//Skills
sr.reveal('.section-model-2 li:nth-child(even)', {duration: 300, delay: 200, origin: "bottom", distance: '300px'});
sr.reveal('.section-model-2 li:nth-child(odd)', {duration: 300, delay: 200, origin: "top", distance: '300px'});

//Projects
sr.reveal('.section-model-3 .gallery li.project-item:nth-child(even)', {duration: 300, delay: 200, origin: "top", distance: '100px'});
sr.reveal('.section-model-3 .gallery li.project-item:nth-child(odd)', {duration: 400, delay: 200, origin: "bottom", distance: '100px'});

//Contact
sr.reveal('.section-model-4 .container', {duration: 400, delay: 200, origin: "left", distance: '100px'});

//Footer
sr.reveal('.footer-main i', {duration: 500, delay: 200, origin: "left", distance: '300px'});