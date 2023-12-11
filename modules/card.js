function createCard (){
    const typeCard = ['sales', 'expense', 'income'];
    const iconList = ['analytics', 'bar_chart', 'chart_data'];
    const total = [5000000, 2000000, 3000000];
    let rupiah = Intl.NumberFormat('IDR');
    
    const main = document.querySelector('.main');
    const h1 = document.createElement('h1');
    h1.textContent = 'dasboard';

    const card = document.createElement('div');
    card.className = 'card';
   
    for (let i = 0; i<3; i++ ){
        const data = document.createElement('div');
        data.className = 'data';

        const type = document.createElement('div');
        type.className = typeCard[i];

        const icon = document.createElement('span');
        icon.className = 'material-symbols-outlined';
        icon.textContent = iconList[i];

        const h2 = document.createElement('h2');
        h2.textContent = `tatal ${typeCard[i]}`;

        const h3 = document.createElement('h3');
        h3.textContent = "Rp. "+rupiah.format(total[i]);

        const percentace = document.createElement('img');
        percentace.src = `./asset/percent${i+1}.svg`;
        percentace.className = 'percent';

        main.append(h1,card);
        card.append(data);
        data.append(type, percentace);
        type.append(icon, h2, h3);
       
        
    }
        
    
};

export {createCard};