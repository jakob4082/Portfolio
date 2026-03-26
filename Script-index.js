// Script for index.html - handles filter navigation and image swapping

function handleFilterClick(button, category) {
    const slider = document.querySelector('.filter-slider');
    const container = document.getElementById('filter-content-area');
    const buttons = document.querySelectorAll('.filter-btn');
    const panes = document.querySelectorAll('.filter-pane');
    
    const isAlreadyActive = button.classList.contains('active');

    // 1. HÅNDTERING AF LUKNING (Hvis man trykker på den samme knap)
    if (isAlreadyActive) {
        container.classList.remove('open');
        button.classList.remove('active');
        if (slider) slider.style.opacity = '0';
        
        // Vi venter med at fjerne panes til animationen er færdig (valgfrit)
        setTimeout(() => {
            panes.forEach(pane => pane.style.display = 'none');
        }, 500);
        return; // Stop her
    }

    // 2. RESPONSIV SLIDER LOGIK
    // Vi flytter kun slideren, hvis skærmen er bredere end 768px (hvor den ikke er skjult i CSS)
    if (window.innerWidth > 768 && slider) {
        slider.style.opacity = '1';
        slider.style.width = button.offsetWidth + 'px';
        slider.style.left = button.offsetLeft + 'px';
    } else if (slider) {
        slider.style.opacity = '0'; // Skjul slider på mobil hvis den driller
    }

    // 3. OPDATER KNAPPER
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // 4. SKIFT INDHOLD (PANE SWITCHING)
    panes.forEach(pane => {
        if (pane.id === category) {
            pane.style.display = 'block';
            // Trigger transition via en lille delay
            requestAnimationFrame(() => {
                pane.classList.add('active-pane');
            });
        } else {
            pane.classList.remove('active-pane');
            pane.style.display = 'none';
        }
    });

    // 5. ÅBN CONTAINEREN
    container.classList.add('open');
}

function swapMandoImage(src) {
    const mainImage = document.getElementById('mainMandoImage');
    if (mainImage) {
        // Tilføj en lille fade-effekt hvis du har lyst
        mainImage.style.opacity = '0.5';
        setTimeout(() => {
            mainImage.src = src;
            mainImage.style.opacity = '1';
        }, 100);
    }
}

// --- MODAL IMAGE FUNCTIONALITY ---
function initModalImages() {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");
    const closeBtn = document.getElementsByClassName("close")[0];

    // Get all images with modal-trigger class
    const triggerImages = document.querySelectorAll("img.modal-trigger");

    // Setup click handler for each image
    triggerImages.forEach(img => {
        img.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt || ""; // Use alt text as caption, empty if no alt
        }
    });

    // Close modal when clicking the X button
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Close modal when clicking outside the image
    modal.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Close modal with Escape key
    document.onkeydown = function(event) {
        if (event.key === "Escape" && modal.style.display === "block") {
            modal.style.display = "none";
        }
    }
}

// Initialize modal images when page loads
document.addEventListener("DOMContentLoaded", initModalImages);