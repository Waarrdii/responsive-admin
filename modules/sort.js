function sort(){
    const table = document.querySelector('table');
    const th = table.querySelector("th:nth-of-type(2)");
    console.log(th.textContent);
};

export {sort};