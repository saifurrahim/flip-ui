const DropdownButtons = document.getElementsByClassName('dropdown-button');
const DropDownMenus = document.getElementsByClassName('dropdown-menu');

// Handle toggle dropdown
document.addEventListener('DOMContentLoaded', () => {

    for(let i=0;i<DropdownButtons.length;i++)
    {
        let element = DropdownButtons[i];

        element.addEventListener('click', () => {
            let dropdownMenu = element.nextElementSibling;

            let childDropdowns = dropdownMenu.querySelectorAll('.dropdown-menu');

            if(!dropdownMenu.classList.contains('hidden'))
            {
                for(let j=0;j<childDropdowns.length;j++)
                {
                    childDropdowns[j].classList.add('hidden');
                }
            }

            dropdownMenu.classList.toggle('hidden');
        });
    }
});

// Handle close dropdown on click outside the element
document.addEventListener('click', (event) => {
    if(!event.target.classList.contains('dropdown-button'))
    {
        for(let i=0;i<DropDownMenus.length;i++)
        {
            let element = DropDownMenus[i];
    
            if(!element.contains(event.target))
            {
                element.classList.add('hidden');
            }
        }

    }
});

$(document).ready(function() {
    $('select').select2({
        placeholder: 'Choose...',
        allowClear: true
    });
});

function toggleMobileTopMenu(e){
    let navMenu = document.querySelector('nav div:nth-child(3)');


    if(e.currentTarget.checked){
        document.querySelector('aside').classList.add('hidden');
        let sideToggler = document.querySelector('#menuToggler .fa-chevron-right');
    
        sideToggler.style.transform = 'rotate(0deg)';
        
        navMenu.classList.remove('hidden');
    }
    else {

        navMenu.classList.add('hidden');
    }
}

function toggleMobileSideMenu(){
    let navMenu = document.querySelector('aside');
    let burgerToX = document.getElementById('burgerToX');

    if(navMenu.classList.contains('hidden'))
    {
        document.querySelector('nav div:nth-child(3)').classList.add('hidden');
        burgerToX.checked = false;
    }

    navMenu.classList.toggle('hidden');

    let sideToggler = document.querySelector('#menuToggler .fa-chevron-right');

    sideToggler.style.transform = sideToggler.style.transform == 'rotate(90deg)' ? 'rotate(0deg)' : 'rotate(90deg)';
}

function faceDown(){
    const idCard = document.getElementById('idCard');
    idCard.style.transform = 'rotateY(180deg)';
}

function faceUp(){
    const idCard = document.getElementById('idCard');
    idCard.style.transform = 'rotateY(0deg)';
}

async function buttonClick(event) {
    let flipCard = event.target.parentNode.parentNode;
    flipCard.style.transform = 'rotateY(180deg)';

    await setTimeout(() => {
        flipCard.style.transform = 'rotateY(0deg)';
    },2000);
    
}