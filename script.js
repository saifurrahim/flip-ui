function toggleMobileTopMenu(){
    let navMenu = document.querySelector('nav div:nth-child(3)');

    if(navMenu.classList.contains('hidden'))
    {
        document.querySelector('aside').classList.add('hidden');
    }

    navMenu.classList.toggle('hidden');
}

function toggleMobileSideMenu(){
    let navMenu = document.querySelector('aside');

    if(navMenu.classList.contains('hidden'))
    {
        document.querySelector('nav div:nth-child(3)').classList.add('hidden');
    }

    navMenu.classList.toggle('hidden');

    let sideToggler = document.querySelector('#menuToggler .fa-chevron-right');

    sideToggler.style.transform = sideToggler.style.transform == 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
}