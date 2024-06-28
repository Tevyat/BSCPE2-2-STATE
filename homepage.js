function background1() {
    let bg = document.querySelector('body');
    bg.style.backgroundImage =  'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url("imgs/theories-home-bg.png")'

    const body = document.body;
    const computed = window.getComputedStyle(body);

    let description = document.getElementById("state-description");
    let heading2 = document.getElementById("heading2");



    if(description != null) {
        let heading1 = document.getElementById('state-heading');
        heading1.textContent = "THEORIES OF"
        heading1.style.fontSize = '4.5rem'
        let paragraph = document.getElementById('state-description');
        paragraph.textContent = 'STATE ORIGIN';

        let new_heading = document.createElement('h1');

        new_heading.classList.add('syne-hollow', 'syne-font');
        new_heading.setAttribute('id', 'heading2')
    
        new_heading.style.fontSize = '3.5rem'
        new_heading.textContent = paragraph.textContent;
    
        paragraph.parentNode.replaceChild(new_heading, paragraph);

        let viewbutton = document.getElementById('view-button');
        viewbutton.style.display = 'block'
        viewbutton.setAttribute('onclick', "window.location.href='theories.html';")

  
        
    } else if(heading2 != null) {
        let heading1 = document.getElementById('state-heading')
        heading1.textContent = "THEORIES OF";
        heading1.style.fontSize = '4.5rem'

        let new_heading = document.getElementById("heading2");
    
        new_heading.textContent = 'STATE ORIGIN'
        new_heading.style.fontSize = '3.5rem'

        let viewbutton = document.getElementById('view-button');
        viewbutton.style.display = 'block'
        viewbutton.setAttribute('onclick', "window.location.href='theories.html';")
   
    }

}


function background2() {
    let bg = document.querySelector('body');
    bg.style.backgroundImage =  'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url("imgs/four-elements-home-bg.png")'

    let description = document.getElementById("state-description");
    let heading2 = document.getElementById("heading2");

    if(description != null) {
        let heading1 = document.getElementById('state-heading');
        heading1.textContent = "FOUR ELEMENTS"
        heading1.style.fontSize = '5rem';
        let paragraph = document.getElementById('state-description');
        paragraph.textContent = 'OF THE STATE';

        let new_heading = document.createElement('h1');

        new_heading.classList.add('syne-hollow', 'syne-font');
        new_heading.setAttribute('id', 'heading2')
        new_heading.style.fontSize = '3.5rem'
        new_heading.textContent = paragraph.textContent;
    
        paragraph.parentNode.replaceChild(new_heading, paragraph);

        let viewbutton = document.getElementById('view-button');
        viewbutton.style.display = 'block'
        viewbutton.setAttribute('onclick', "window.location.href='elements.html';")

        
    } else if(heading2 != null) {
        let heading1 = document.getElementById('state-heading');
        heading1.textContent = "FOUR ELEMENTS"
        heading1.style.fontSize = '5rem';
        let new_heading = document.getElementById("heading2");

        new_heading.textContent = 'OF THE STATE'
        new_heading.style.fontSize = '3.5rem'

        let viewbutton = document.getElementById('view-button');
        viewbutton.style.display = 'block'
        viewbutton.setAttribute('onclick', "window.location.href='elements.html';")

    }
}

function background3() {
    let bg = document.querySelector('body');
    bg.style.backgroundImage =  'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url("imgs/inherent-home-bg.png")'

    let description = document.getElementById("state-description");
    let heading2 = document.getElementById("heading2");

    if(description != null) {
        let heading1 = document.getElementById('state-heading');
        heading1.textContent = "THE INHERENT POWER"
        heading1.style.fontSize = '4.5rem';

        let paragraph = document.getElementById('state-description');
        paragraph.textContent = 'OF THE STATE';

        let new_heading = document.createElement('h1');

        new_heading.classList.add('syne-hollow', 'syne-font');
        new_heading.setAttribute('id', 'heading2')
        new_heading.style.fontSize = '3rem'
        new_heading.textContent = paragraph.textContent;
    
        paragraph.parentNode.replaceChild(new_heading, paragraph);

        let viewbutton = document.getElementById('view-button');
        viewbutton.style.display = 'block'
        viewbutton.setAttribute('onclick', "window.location.href='power.html';")
        
    } else if(heading2 != null) {
        let heading1 = document.getElementById('state-heading');
        heading1.textContent = "THE INHERENT POWER"
        heading1.style.fontSize = '6=4.5rem';

        let new_heading = document.getElementById("heading2");

        new_heading.textContent = 'OF THE STATE'
        new_heading.style.fontSize = '3rem'

        let viewbutton = document.getElementById('view-button');
        viewbutton.style.display = 'block'
        viewbutton.setAttribute('onclick', "window.location.href='power.html';")

    }
}

function background4() {
    let bg = document.querySelector('body');
    bg.style.backgroundImage =  'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url("imgs/state_home.png")'

    let description = document.getElementById("state-description");
    let heading2 = document.getElementById("heading2");

    if(description != null) {
        let heading1 = document.getElementById('state-heading');
        heading1.textContent = "STATE"
        heading1.style.fontSize = '7rem';
        
        document.getElementById('view-button').style.display='none'

    } else if(heading2 != null) {
        let heading1 = document.getElementById('state-heading');
        heading1.textContent = "STATE"
        heading1.style.fontSize = '7rem';

        let new_heading = document.getElementById('heading2');
        new_heading.textContent = 'Political organization of society or the institutions of government. It represents a form of human association set apart from other social groups by its specific purpose. The word originates from the Latin "status," which means "order, arrangement, condition," and figuratively refers to "public order, community organization."';

        let paragraph = document.createElement('p');

        paragraph.classList.add("urbanist-font");
        paragraph.setAttribute('id', 'state-description')
        paragraph.textContent = new_heading.textContent;
        paragraph.style.fontSize = '1.3rem'
    
        new_heading.parentNode.replaceChild(paragraph, new_heading);

        document.getElementById('view-button').style.display='none'
        
    }
}


