    

// const klik = document.querySelector('#click');
//window.addEventListener("load", 
function createTable(){
    let product = [
        ["FUR-BO-10001798","Furniture","Bookcases","Bush Somerset Collection Bookcase",],
        ["FUR-CH-10000454","Furniture","Chairs","Hon Deluxe Fabric Upholstered Stacking Chairs Rounded Back",],
        ["OFF-LA-10000240","Office Supplies","Labels","Self-Adhesive Address Labels for Typewriters by Universal",],
        ["FUR-TA-10000577","Furniture","Tables","Bretford CR4500 Series Slim Rectangular Table",],
        ["OFF-ST-10000760","Office Supplies","Storage","Eldon Fold 'N Roll Cart System",],
        ["FUR-FU-10001487","Furniture","Furnishings","Eldon Expressions Wood and Plastic Desk Accessories Cherry Wood",],
        ["OFF-AR-10002833","Office Supplies","Art","Newell 322",],
        ["TEC-PH-10002275","Technology","Phones","Mitel 5320 IP Phone VoIP phone",],
        ["OFF-BI-10003910","Office Supplies","Binders","DXL Angle-View Binders with Locking Rings by Samsill",],
    ];
    const table = document.querySelector("tbody");
    for (let i = 0; i<9; i++){
        let row = table.insertRow(i);
        let no = row.insertCell(0).innerHTML = `${i+1}`;
        for (let j = 0; j<4; j++){
            let cell = row.insertCell(j + 1);
            cell.innerHTML =  `${product[i][j]}`;
        }
    }
};

export {createTable} ;
