//scrollReaveal
ScrollReveal().reveal('.cta', { delay: 400 });
ScrollReveal().reveal('.sobre', { delay: 400 });
ScrollReveal().reveal('.caixa', { delay: 400 });
ScrollReveal().reveal('.caixaprojeto', { delay: 400 });
ScrollReveal().reveal('.tech', { delay: 400 });
ScrollReveal().reveal('.linksbtn', { delay: 400 });
ScrollReveal().reveal('.descricao-nome', { delay: 400 });
ScrollReveal().reveal('.descricao-sobre', { delay: 400 });
ScrollReveal().reveal('.descricao-nome', { delay: 400 });
ScrollReveal().reveal('.descricao-texto', { delay: 400 });

//menu
let btnMenu = document.getElementById('menu');
btnMenu.addEventListener('click', abrirMenu);
btnMenu.addEventListener('touchstart', abrirMenu);

function abrirMenu(event) {
    if(event.type === 'touchstart') event.preventDefault()
    let itemsMenu = document.getElementById('menu-items');
    itemsMenu.classList.toggle('menu-items-active');

    btnMenu = document.getElementById('menu');
    btnMenu.classList.toggle('active');

    scrollHidden()
}

function scrollHidden() {

    let itemsMenu = document.getElementById('menu-items');
    if(itemsMenu.classList.contains('menu-items-active')){
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'auto'
    }
}

//tech description
let html = document.getElementById('html');
let css = document.getElementById('css');
let js = document.getElementById('js');
let sass = document.getElementById('sass');
let bootstrap = document.getElementById('bootstrap');
let react = document.getElementById('react');
let figma = document.getElementById('figma');

html.addEventListener('mouseover', htmlD);

function htmlD(){
    let techTitle = document.getElementById('techtitle')
    let techDescription = document.getElementById('techdescription')
    
    techTitle.innerHTML = 'HTML'
    techDescription.innerHTML = 'Linguagem de marcação de texto, onde vai o conteúdo do site, textos, fotos, e videos por exemplo.'
}

css.addEventListener('mouseover', cssD);

function cssD(){
    let techTitle = document.getElementById('techtitle')
    let techDescription = document.getElementById('techdescription')
    
    techTitle.innerHTML = 'CSS'
    techDescription.innerHTML = 'Linguagem de estilização de todo o conteúdo que há na aplicação, como cores e organização do conteúdo.'
}

js.addEventListener('mouseover', jsD);

function jsD(){
    let techTitle = document.getElementById('techtitle')
    let techDescription = document.getElementById('techdescription')
    
    techTitle.innerHTML = 'Javascript'
    techDescription.innerHTML = 'Linguagem de programação, onde se consegue aplicar a dinâmica nas aplicações e tudo fazer mais sentido.'
}

sass.addEventListener('mouseover', sassD);

function sassD(){
    let techTitle = document.getElementById('techtitle')
    let techDescription = document.getElementById('techdescription')
    
    techTitle.innerHTML = 'Sass'
    techDescription.innerHTML = 'Pré-processador CSS, há recursos que não existe de forma nativa no CSS sozinho.'
}

bootstrap.addEventListener('mouseover', bootstrapD);

function bootstrapD(){
    let techTitle = document.getElementById('techtitle')
    let techDescription = document.getElementById('techdescription')
    
    techTitle.innerHTML = 'Bootstrap'
    techDescription.innerHTML = 'Framework CSS onde facilita o desenvolvimento de sistemas Front-End com classes CSS já definidas.'
}

react.addEventListener('mouseover', reactD);

function reactD(){
    let techTitle = document.getElementById('techtitle')
    let techDescription = document.getElementById('techdescription')
    
    techTitle.innerHTML = 'React'
    techDescription.innerHTML = 'Biblioteca Javascript que facilita desenvolvimento Front-end e ajuda a desenvolver aplicações avançadas e escaláveis de forma mais organizada.'
}

figma.addEventListener('mouseover', figmaD);

function figmaD(){
    let techTitle = document.getElementById('techtitle')
    let techDescription = document.getElementById('techdescription')
    
    techTitle.innerHTML = 'Figma'
    techDescription.innerHTML = 'Onde crio os layouts, UI design e prototipagem do sistema antes de começar a desenvolver com o código.'
}