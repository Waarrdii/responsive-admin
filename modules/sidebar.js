function createSidebar(){
    const sidebar = document.querySelector('.sidebar');
    const icon = ['dashboard_customize', 'person','shopping_cart','monitoring','mail','inventory_2','summarize','settings','add','logout'];
    const nav = ["dasboard", "customer", "orders", "analytics", "message", "product", "reports", "settings", "add product", "log out"];

    for (let i = 0; i<10; i++){
        const a = document.createElement('a');
        a.innerHTML = '<span class="material-symbols-outlined">'+ icon[i] + '</span>' + '<h3>'+nav[i];

        sidebar.append(a)
    }
    
};

export {createSidebar};