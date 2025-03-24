document.getElementById('topMenuToggler').addEventListener('change', (event) => {

    let topBarMenu = document.querySelector('header nav .menu');
    if(event.target.checked){
        topBarMenu.style.display = 'flex';
    }
    else{
        topBarMenu.style.display = 'none';
    }
})