function sort(){
    const table = document.querySelector('table');
    const ths = table.querySelectorAll("th");
    for (const th of ths){
        th.addEventListener("click",function(){
            for (const other of ths){
                if(other !== this){
                    other.classList.remove('asc');
                    other.classList.remove('desc');
                }
            }
        if(th.classList.contains('asc')){
            th.classList.remove('asc');
            th.classList.add('desc');
        }else{
            th.classList.remove('desc');
            th.classList.add('asc');
        }
        });
    };
};

export {sort};

//th diganti ths akhirnya jalan, berarti ada konflik antara script functionnya atau tidak mengenali ketika disebut th, th yang mana.