const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show')
        }
    })
},
{
    rootMargin: '0px',
    threshold: [0,0.1,1],

})

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('up');
        } else {
            entry.target.classList.remove('up')
        }
    })
},
{
    rootMargin: '0px',
    threshold: [0,0.1,1],

})

const downElements = document.querySelectorAll('.hidden');
const upElements = document.querySelectorAll('.hidden2');
downElements.forEach((el) => observer1.observe(el));
upElements.forEach((el) => observer2.observe(el));