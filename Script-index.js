// Script for index.html - handles filter navigation and image swapping

function handleFilterClick(button, category) {
    // Select the sliding background element for the active button
    const slider = document.querySelector('.filter-slider');
    // Select the content area that expands to show filtered content
    const container = document.getElementById('filter-content-area');
    // Select all filter panes (content sections)
    const panes = document.querySelectorAll('.filter-pane');
    // Select all filter buttons
    const buttons = document.querySelectorAll('.filter-btn');
    // Select the specific pane for the clicked category
    const targetPane = document.getElementById(category);
    
    // Tjek om knappen man trykker på allerede er den aktive
    const isAlreadyActive = button.classList.contains('active');

    if (isAlreadyActive) {
        // Hvis den ALLEREDE er aktiv, så lukker vi det hele
        container.classList.remove('open');
        button.classList.remove('active');
        slider.style.opacity = '0';
        
        // Fjern 'active-pane' efter kassen er lukket (valgfrit, for renhed)
        setTimeout(() => {
            panes.forEach(pane => pane.classList.remove('active-pane'));
        }, 500);
        
    } else {
        // Hvis man trykker på en NY knap:
        
        // 1. Flyt slideren med det samme
        slider.style.opacity = '1';
        slider.style.width = button.offsetWidth + 'px';
        slider.style.left = button.offsetLeft + 'px';

        // 2. Opdater hvilken knap der er aktiv
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // 3. Skift indholdet uden at lukke containeren
        panes.forEach(pane => {
            if (pane.id === category) {
                pane.style.display = 'block';
                // Lille delay så browseren når at registrere display:block før transition
                setTimeout(() => pane.classList.add('active-pane'), 10);
            } else {
                pane.classList.remove('active-pane');
                pane.style.display = 'none';
            }
        });

        // 4. Sørg for at containeren er åben (hvis den ikke var det i forvejen)
        container.classList.add('open');
    }
}

function swapMandoImage(src) {
    // Swaps the main image in the Mandalorian section when a thumbnail is clicked
    const mainImage = document.getElementById('mainMandoImage');
    if (mainImage) {
        mainImage.src = src;
    }
}