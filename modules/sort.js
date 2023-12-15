function sort(){
    const table = document.querySelector('table');
    const ths = table.querySelector("th:nth-of-type(2)");
    console.log(ths.textContent);
    ths.addEventListener("click", function(){
        ths.classList.add("sorted");
    });
    
};

export {sort};

//th diganti ths akhirnya jalan, berarti ada konflik antara script functionnya atau tidak mengenali ketika disebut th, th yang mana.