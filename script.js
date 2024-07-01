// get all the accordion headers
const accordionHeaders = document.querySelectorAll('.data-accordion-header');
// give every individual header an eventlistener for click events
accordionHeaders.forEach((accordionHeader) => {
    accordionHeader.onclick = () => {
        // get value of aria-expanded
        let expanded = accordionHeader.getAttribute('aria-expanded') === 'true' ? true : false;
        // set aria-expanded to the opposite value
        accordionHeader.setAttribute('aria-expanded', !expanded);
        // set inert attribute to right value
        const idNum = accordionHeader.id.slice(-1);
        document.querySelector(`#accordion-panel-${idNum}`).inert = expanded;
    };
});
