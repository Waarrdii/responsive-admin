function addLogo (){
    const logo = document.querySelector('.logo');
    const imgLogo = document.createElement('img');
    imgLogo.textContent = 'src="./asset/Risoles.png" alt="wulan kitchen"';
    logo.appendChild(imgLogo);
}

export {addLogo} ;