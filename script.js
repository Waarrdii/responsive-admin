const product = document.getElementById('product');
const data = Array.from(product.querySelectorAll('tr'));

console.log(data);

if (data.length === 0) {
    console.error('No rows found in the table.');
  } else {
    data.map((row) => {
      const name = row.querySelector('td:first-child').textContent;
      const age = row.querySelector('td:nth-child(2)').textContent;
      const address = row.querySelector('td:nth-child(3)').textContent;
  
      return {
        name,
        age,
        address,
      };
    });
    console.log(data);
}