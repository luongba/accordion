tailwind.config = {
    theme: {
        extend: {
            colors: {
                clifford: "#da373d",
            },
        },
    },
};

let accordion = document.getElementById('accordion')
accordion.addEventListener('click', () => {
   let accordionContent = document.getElementById('accordion-content')
   
   accordionContent.classList.toggle('grid-rows-[1fr]')
   accordionContent.classList.toggle('opacity-100')
   accordionContent.classList.toggle('max-h-[500px]')
   
   let accordionIcon = document.getElementById('accordion-icon')
   accordionIcon.children[0].children[0].classList.toggle('!rotate-180')
   accordionIcon.children[0].children[1].classList.toggle('!rotate-180')
})
