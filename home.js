document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const backgrounds = ['imgs/state-menu.png', 'imgs/theory-menu.png', 'imgs/elements-menu.png', 'imgs/power-menu.png'];
    const links = ['home.html', 'theories.html', 'elements.html', 'powers.html'];
    let selectedIndex = 0;

    function createBox(index) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.id = `box${index + 1}`;
        box.addEventListener('click', () => handleBoxClick(index));
        return box;
    }

    function updateSelection() {
        container.innerHTML = '';
        for (let i = selectedIndex; i < selectedIndex + 3; i++) {
            const box = createBox(i % backgrounds.length);
            container.appendChild(box);
            if (i === selectedIndex) {
                box.classList.add('selected');
                document.body.style.backgroundImage = `url(${backgrounds[i % backgrounds.length]})`;
            }
        }
    }

    function handleKeydown(event) {
        if (event.key === 'ArrowRight') {
            selectedIndex = (selectedIndex + 1) % backgrounds.length;
            updateSelection();
        } else if (event.key === 'ArrowLeft') {
            selectedIndex = (selectedIndex - 1 + backgrounds.length) % backgrounds.length;
            updateSelection();
        } else if (event.key === 'Enter') {
            window.location.href = links[selectedIndex % links.length];
        }
    }

    function handleBoxClick(index) {
        window.location.href = links[index % links.length];
    }

    document.addEventListener('keydown', handleKeydown);
    updateSelection(); 
});
