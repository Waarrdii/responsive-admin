function addLogo (){
    const logoContainer = document.querySelector('.top');

    const logo = document.createElement('div');
    logo.classList.add('logo');

    const  img = document.createElement('img');
    img.src = './asset/Risoles.png';

    const div = document.createElement('div');
    div.className = "company-title";

    const h2 = document.createElement('h2');
    h2.textContent = "wulan's";

    const line = document.createElement('div');
    line.classList.add('line-title');

    const span = document.createElement('span');
    span.textContent = 'kitchen';
    
    const close = document.createElement('div');
    close.className = 'close';
    close.id = 'closeBtn';


    logoContainer.append(logo, close);
    logo.append(img,div);
    div.append(h2, line, span)

}

export {addLogo} ;