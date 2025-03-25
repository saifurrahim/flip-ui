document.getElementById('topMenuToggler').addEventListener('change', (event) => {

    let topBarMenu = document.querySelector('header nav .menu');
    if(event.target.checked){
        let sideMenuToggler = document.getElementById('sideMenuToggler');
        sideMenuToggler.checked = false;
        sideMenuToggler.dispatchEvent(new Event('change')); 

        topBarMenu.classList.add('appear');
    }
    else{
        topBarMenu.classList.remove('appear');
    }
});

document.getElementById('sideMenuToggler').addEventListener('change', (event) => {

    let sideBarMenu = document.querySelector('aside');
    if(event.target.checked){
        let topMenuToggler = document.getElementById('topMenuToggler');
        topMenuToggler.checked = false;
        topMenuToggler.dispatchEvent(new Event('change'));
        sideBarMenu.classList.add('appear');
    }
    else{
        sideBarMenu.classList.remove('appear');
    }
})