fetch("data.json")
.then(function(res) {
  return res.json();
})
.then(function(products) {
  let bd = document.querySelector('.tb');
  let out ='';
  let card =document.querySelector('.card');
  let four = '';
  for(let product of products){
    out += `
     <tr>
          <td>
          <a href='${product.img}'>
          <img src='${product.img}'/>
          </a>
          </td>
          <td>${product.name}</td>
          <td>${product.price}</td>
          <td>${product.praces}</td>
      </tr>
    `;
  }
  bd.innerHTML = out;
})
let btn = document.querySelector('button');
btn.addEventListener('click',()=>{
  btn.style.display='none';
  print();
})
