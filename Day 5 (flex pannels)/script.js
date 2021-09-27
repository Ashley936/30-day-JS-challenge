const panels = document.querySelectorAll('.panel');
panels.forEach(panel => {
    panel.addEventListener("mouseover", () =>
        panel.classList.add('open'));
    
    // in case of on click event
    /*panel.addEventListener("transitionend", (e) =>
    {
        if (e.propertyName === "flex-grow")
            panel.classList.toggle('open-active');
    });*/
    panel.addEventListener("mouseout", () => {
        panel.classList.remove('open');
    });
    
})