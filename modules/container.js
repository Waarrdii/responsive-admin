

function addElement(){
    const container = document.createElement('div');
    container.className = 'container';
    document.body.appendChild(container);

    const aside = document.createElement('aside');
    const main = document.createElement('div');
    main.className = 'main';

    container.append(aside,main);
    
};

export {addElement};