function sort(){
    const ths = document.querySelectorAll('th');
    ths.forEach(th => {
        th.addEventListener("click", () => {
            th.classList.add("asc");
        })
    })
    
}

export {sort};