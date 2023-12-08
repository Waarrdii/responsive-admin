function createSidebar(){
    const sidebar = document.querySelector('.sidebar');
    const icon = ['dashboard_customize', 'person','shopping_cart','monitoring','mail','inventory_2','summarize','settings','add','logout'];
    const nav = ["dasboard", "customer", "orders", "analytics", "message", "product", "reports", "settings", "add product", "log out"];

    for (let i = 0; i<10; i++){
        const a = document.createElement('a');
        
        const span = document.createElement('span');
        span.className = 'material-symbols-outlined';
        span.textContent = icon[i];

        const h3 = document.createElement('h3');
        h3.textContent = nav[i];
        
        sidebar.append(a);
        a.append(span, h3);

    }
    
};

export {createSidebar};