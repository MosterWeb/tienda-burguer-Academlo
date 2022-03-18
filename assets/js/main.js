
// Primer paso: declarar los prodcutos en un arreglo de objetos
const productos = [
    {
        id: 1,
        hot: "Hot",
        name: "La royal",
        description: "Rica hamburguesa de la casa",
        img: "assets/img/productos/pd1.png",
        price: 10.99
    },
    {
        id: 2,
        hot: "Hot",
        name: "La Mixta",
        description: "Rica hamburguesa de la casa",
        img: "assets/img/productos/pd1.png",
        price: 14.99
    },
    {
        id: 3,
        hot: "Hot",
        name: "Toci Burguer",
        description: "Rica hamburguesa de la casa",
        img: "assets/img/productos/pd1.png",
        price: 12.99
    },
    {
        id: 4,
        hot: "Hot",
        name: "Doble Burguer",
        description: "Rica hamburguesa de la casa",
        img: "assets/img/productos/pd1.png",
        price: 8.99
    },
    {
        id: 5,
        hot: "Hot",
        name: "Doble Burguer Especial",
        description: "Rica hamburguesa de la casa",
        img: "assets/img/productos/pd1.png",
        price: 9.99
    },
    {
        id: 6,
        hot: "Hot",
        name: "Special Burguer",
        description: "Rica hamburguesa de la casa",
        img: "assets/img/productos/pd1.png ",
        price: 10.99
    }
];

//Segundo paso: declarar la base de datos interna con un objeto.
//tercer paso: Creamos los metodos para el carrito
//Aqui vamos a renderizar nuestros productos
const Db = {
    items: productos,
    methods: {
        find: function(id){
           return  Db.items.find((item)=> item.id === id);
        },
        render: function(){
            let html = '';
            html += '<section class="productos-grid p-t">';
            html += Db.items.map((item)=>{return `<section class="productos-tienda p-l">
            <div>
                <p class="productos-tienda__hot">${item.hot}</p>
                <img src="${item.img}" width="80" alt="">
            </div>

            <div class="productos-tienda__heading p-l">
                <h2  class="productos-tienda__title">${item.name}</h2>
                <p class="productos-tienda__descripcion">${item.description}</p>
                <p class="productos-tienda__title">Precio: S/. ${item.price}</p>
                <p data-id="${item.id}"   class=" btn-add">Agregar al carrito</p>
                
            </div>
            
        </section>   `}).join('');
            html += ' </section>';
            return html;
        },
    }
};



const cart = {
    items: [],
    method: {
        add: function(id){
            if(cart.method.isAlreadyInCart(id)){
                alert('Este producto ya se encuentra en el carrito');
            }else{
                const item = Db.methods.find(id);
             cart.items.push(item);
            }
            
        },
        remove: function(id){
            cart.items = cart.items.filter( (item)=> item.id !== id)
        
        },
        isAlreadyInCart: function (id){
            return cart.items.find(function(item){return item.id === id})
        },
        count: function(){
            return cart.items.length;
        },
        totalPrice: function(){
            let total = 0;
            cart.items.map((item)=> {return total += item.price  } ).join('');
            return `S/. ${total}`
        },
        render: function(){
            document.getElementById('count').innerHTML = cart.method.count();
            document.getElementById('count1').innerHTML = cart.method.count();
            document.getElementById('total').innerHTML = cart.method.totalPrice();
            document.getElementById('total1').innerHTML = cart.method.totalPrice();
            
            let html = '';
            html += '<ul id="contain" class="cart-product__contain" >';
            html += cart.items.map((item)=>{return `<li class="cart-product"><img src="${item.img}" width="40" alt=""> <p>${item.name} - </p> <p> S/. ${item.price}</p>  <a class="btn-remove" data-id="${item.id}">Eliminar del carrito</a> </li>`}).join('');
            html += '</ul>';
            return html;
        },
        comprar(){
          cart.items = [];
        }
    }
}


let products = document.getElementById("products"); 
let carts = document.getElementById("cart");
let comprar = document.getElementById("comprar");
let comprarMobile = document.getElementById("comprarMobile");
const wrapper = document.getElementById('wrapper');

products.innerHTML = Db.methods.render();
carts.innerHTML = cart.method.render();

wrapper.addEventListener('click', (e)=>{
    if(e.target.matches('.btn-add')){
        const id = e.target.dataset.id;
        cart.method.add(+id);
        carts.innerHTML = cart.method.render();
        
    }

    if(e.target.matches('.btn-remove')){
        const id = e.target.dataset.id;
        cart.method.remove(+id);
        carts.innerHTML = cart.method.render();
    }

    if(e.target.matches('#comprar')){  
            
            carts.innerHTML = cart.items = [];
            document.getElementById('count').innerHTML = 0;
            document.getElementById('count1').innerHTML = 0;
            document.getElementById('total').innerHTML = "S/. " + 0;
            document.getElementById('total1').innerHTML = "S/. " + 0;       
       

    }
    

});

document.addEventListener("load", ()=>{
    
        alert("Ya cargó la web");
    
})







// let close = document.getElementById('close');
// close.addEventListener('click', function(){
//     let cartContaint = document.getElementById('contain');
//     cartContaint.style.left= "0";
// });

