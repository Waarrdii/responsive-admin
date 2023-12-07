function addLogo (){
    const logo = document.querySelector('.top');
    const imgLogo = document.createElement('div');
    imgLogo.classList.add('logo');
    imgLogo.innerHTML = 
    '<img src="./asset/Risoles.png" alt="wulan kitchen">'
    + 
    '<div class="company-title">' 
    +   "<h2>Wulan's</h2>"
    +   '<div class="line-title"></div>' 
    +   '<span>kitchen</span>'
    +'</div>'
    +'<div class="close" id="closeBtn"></div>';
   logo.append(imgLogo,);
}

export {addLogo} ;