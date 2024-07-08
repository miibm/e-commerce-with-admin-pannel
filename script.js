function register(){

    var username = document.getElementById("Username").value;
    var email = document.getElementById("Email").value;
    var password = document.getElementById("Password").value;


    let data = JSON.parse(localStorage.getItem('userdata')) || [];
    const userExists = data.some(user => user.username === username);
    let fav = [];

    if(userExists){
        alert("Username already exists");
    }
    else{
        data.push({ username, password,email, fav });
        localStorage.setItem('userdata', JSON.stringify(data));
        alert('Registration successful!');
        window.location.href = './login.html';
    }
}

function login(){
    var username = document.getElementById("Username").value;
    var password = document.getElementById("Password").value;

    let data = JSON.parse(localStorage.getItem('userdata')) || [];
    let auth = JSON.parse(localStorage.getItem('user')) || "";

    let validUser = false;
    if((auth === null || auth === undefined || auth === "")){
        data.forEach(user => {
                if (user.username === username && user.password === password) {
                    validUser = true;
                    localStorage.setItem('user', JSON.stringify(username));
                }
        });
        if (validUser) {
            alert('Login successful!');
            window.location.href = './index.html';
        } else {
            alert('Invalid username or password.');
        }
    }
    else{
        alert("You are already logged in");
        window.location.href = './index.html';
    }

    
}

function logout(){
    localStorage.removeItem('user');
    window.location.href = './login.html';
}

function load(){
    let products = [
        {
            "product-id"    : "0",
            "product-name"  : "Vivo V3 Pro 5G",
            "product-price" : "41,300",
            "product-dprice": "36,900",
            "product-rating": 4,
            "product-image" : "https://m.media-amazon.com/images/I/61LI5G00UNL._SX679_.jpg",

        },

        {
            "product-id"    : "1",
            "product-name"  : "Oppo A58",
            "product-price" : "9,999",
            "product-dprice": "16,900",
            "product-rating": 4,
            "product-image" : "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/g/j/6/a38-cph2579-oppo-original-imagt5ukkqmm9eja.jpeg?q=70&crop=false",

        },

        {
            "product-id"    : "2",
            "product-name"  : "Apple Iphone 15",
            "product-price" : "110,300",
            "product-dprice": "129,900",
            "product-rating": 4,
            "product-image" : "https://www.apple.com/v/iphone/home/bv/images/overview/select/iphone_15_pro__bpnjhcrxofqu_xlarge.png",

        },

        {
            "product-id"    : "3",
            "product-name"  : "Honour X9b",
            "product-price" : "56,300",
            "product-dprice": "77,900",
            "product-rating": 4,
            "product-image" : "https://www.honor.com/content/dam/honor/global/products/smartphone/honor-x9b/imgs/sec4/sec4-sliver-phone-pc.png",

        },

        {
            "product-id"    : "4",
            "product-name"  : "Redmi Note 13 Pro+",
            "product-price" : "17,300",
            "product-dprice": "19,000",
            "product-rating": 4,
            "product-image" : "https://i03.appmifile.com/139_item_in/04/07/2024/46058aecef913d385aee9e7ef1cdd257.png?thumb=1&w=300&f=webp&q=85",

        },
        {
            "product-id"    : "5",
            "product-name"  : "Nokia G42 5G",
            "product-price" : "12,300",
            "product-dprice": "15,000",
            "product-rating": 4,
            "product-image" : "https://img3.gadgetsnow.com/gd/images/products/additional/large/G469537_View_1/mobiles/smartphones/nokia-g42-5g-128-gb-so-purple-6-gb-ram-.jpg",

        },
        {
            "product-id"    : "6",
            "product-name"  : "OnePlus 12R",
            "product-price" : "12,300",
            "product-dprice": "15,000",
            "product-rating": 4,
            "product-image" : "https://m.media-amazon.com/images/I/717JX3femML._SX679_.jpg",

        },
        {
            "product-id"    : "7",
            "product-name"  : "Samsung Galaxy S24 Ultra 5G AI",
            "product-price" : "139,300",
            "product-dprice": "159,000",
            "product-rating": 4,
            "product-image" : "https://m.media-amazon.com/images/I/81vxWpPpgNL._SX679_.jpg",

        },
        {
            "product-id"    : "8",
            "product-name"  : "POCO C65",
            "product-price" : "12,300",
            "product-dprice": "15,000",
            "product-rating": 4,
            "product-image" : "https://m.media-amazon.com/images/I/51Zjp5fq1EL._SX679_.jpg",

        },
    ];
    let data = JSON.parse(localStorage.getItem('products')) || [];
    if(data === undefined || data.length === 0) {
        localStorage.setItem("products", JSON.stringify(products));
    }
}

function product_display(){
    let data = JSON.parse(localStorage.getItem('products'));
    let auth = JSON.parse(localStorage.getItem('user')) || null;
    if(!(auth === null || auth === undefined || auth === "") && auth !== "admin"){
        for(let i=0;i<data.length;i++){
            var rating = "<i class=\"fa fa-star text-danger\" aria-hidden=\"true\"></i>".repeat(data[i]['product-rating'])+"<i class=\"fa fa-star\" aria-hidden=\"true\"></i>".repeat(5-data[i]['product-rating']);
            let div = document.createElement('div');
            div.setAttribute('class', 'col-lg-4 col-xxl-3 col-md-6 col-sm-12 my-3 d-flex justify-content-center align-items-center');
            div.innerHTML = `
            <div class="card " style="width: 300px;">
                <img src="${data[i]['product-image']}" class="card-img-top" alt="..." width=200 height=200>
                <div class="card-body text-center">
                    <h5 class="card-title text-capitalize">${data[i]['product-name']}</h5>
                    <span class="card-text">₹ ${data[i]['product-price']}</span>
                    <del class="card-text ms-1">₹ ${data[i]['product-dprice']}</del><br>
                    <span class="card-text">
                        ${rating}
                    </span><br>
		     
                    <a href="#" class="btn btn-outline-primary my-1  ">Add to cart</a><br>
                    <a href="#" class="btn btn-outline-danger my-1 " onclick="add_fav(${data[i]['product-id']})">Add to Favourite</a>
		     
                </div>
            </div>
            `;
            document.getElementById('products').appendChild(div);
        }
    }
    else{
        for(let i=0;i<data.length;i++){
            var rating = "<i class=\"fa fa-star text-danger\" aria-hidden=\"true\"></i>".repeat(data[i]['product-rating'])+"<i class=\"fa fa-star\" aria-hidden=\"true\"></i>".repeat(5-data[i]['product-rating']);
            let div = document.createElement('div');
            div.setAttribute('class', 'col-lg-4 col-xxl-3 col-md-6 col-sm-12 my-3');
            div.innerHTML = `
            <div class="card " style="width: 300px;">
                <img src="${data[i]['product-image']}" class="card-img-top" alt="..." width=200 height=200>
                <div class="card-body text-center">
                    <h5 class="card-title text-capitalize">${data[i]['product-name']}</h5>
                    <span class="card-text">₹ ${data[i]['product-price']}</span>
                    <del class="card-text ms-1">₹ ${data[i]['product-dprice']}</del><br>
                    <span class="card-text">
                        ${rating}
                    </span><br>
                    <a href="#" class="btn btn-primary my-1">Add to cart</a><br>
                </div>
            </div>
            `;
            document.getElementById('products').appendChild(div);
        }
    }
}

function login_logout(){
    let auth = JSON.parse(localStorage.getItem('user')) || null;
    if((auth === null || auth === undefined || auth === "")){
        document.getElementById('navbar-auth').innerHTML =
        `<li class="nav-item">
            <a class="nav-link text-light" href="./login.html">Login</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-light" href="./register.html">Register</a>
        </li>`;
    }
    else if(auth === "admin"){
        document.getElementById('navbar-auth').innerHTML =
        `<li class="nav-item">
            <a class="nav-link text-light text-capitalize" href="#" >Hello! ${auth}</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-light" href="./admin.html">Dashboard</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-light" href="./index.html" onclick="logout()">Logout</a>
        </li>`;
    }
    else{
        document.getElementById('navbar-auth').innerHTML =
        `<li class="nav-item">
            <a class="nav-link text-light text-capitalize" href="#" >Hello! ${auth}</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-light text-capitalize" href="./favourite.html">
                <i class="fa fa-heart text-danger">
                    <i class="badge  bg-danger rounded-circle">${fav_count(auth)}</i>
                </i>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-light" href="./index.html" onclick="logout()">Logout</a>
        </li>`;
    }
}

function is_admin(){
    let auth = JSON.parse(localStorage.getItem('user')) || null;
    if((auth === null || auth === undefined || auth === "")){
        alert("You are not logged in ");
        window.location.href = './login.html';
    }
    else if(auth === "admin"){
        alert("Welcome to Admin Dashborad");
    }
    else{
        alert("you not allow to edit products");
        window.location.href = './index.html';
    }
}

function show_select(){
    let data = JSON.parse(localStorage.getItem('products'));
    let select = document.getElementById('product');
    let select_txt = "<option value=\"\">Products</option>"
    for(let i=0;i<data.length;i++){
        select_txt += `
        <option value="${data[i]['product-id']}">${data[i]['product-name']}</option>
        `
    }
    select.innerHTML = select_txt;
}

function show_product_edit(){
    let data = JSON.parse(localStorage.getItem('products'));
    let id = document.getElementById('product').value;
    for(let i=0;i<data.length;i++){
        if(data[i]['product-id'] == id){
            document.getElementById('product-name').value = data[i]['product-name'];
            document.getElementById('product-price').value = data[i]['product-price'];
            document.getElementById('product-dprice').value = data[i]['product-dprice'];
            document.getElementById('product-rating').value = data[i]['product-rating'];
            document.getElementById('product-image').value = data[i]['product-image'];

        }
    }
}

function update(){
    let data = JSON.parse(localStorage.getItem('products'));
    let id = document.getElementById('product').value;
    let index = parseInt(id)-1;
    data[index]['product-id']     = id;
    data[index]['product-name']   = document.getElementById('product-name').value;
    data[index]['product-price']  = document.getElementById('product-price').value;
    data[index]['product-dprice'] = document.getElementById('product-dprice').value;
    data[index]['product-rating'] = parseInt(document.getElementById('product-rating').value);
    data[index]['product-image']  = document.getElementById('product-image').value;

    localStorage.setItem('products',JSON.stringify(data));


    document.getElementById('product-name').value = "";
    document.getElementById('product-price').value = "";
    document.getElementById('product-dprice').value = "";
    document.getElementById('product-rating').value = "";
    document.getElementById('product-image').value = "";
}

function add(){
    let data = JSON.parse(localStorage.getItem('products'));
    let id = (data.length+1).toString();
    let new_data = {
        'product-id'     :  id,
        'product-name'   :  document.getElementById('add-product-name').value,
        'product-price'  :  document.getElementById('add-product-price').value,
        'product-dprice' :  document.getElementById('add-product-dprice').value,
        'product-rating' :  parseInt(document.getElementById('add-product-rating').value),
        'product-image'  :  document.getElementById('add-product-image').value
    }
    data.push(new_data)

    localStorage.setItem('products',JSON.stringify(data));


    document.getElementById('add-product-name').value = "";
    document.getElementById('add-product-price').value = "";
    document.getElementById('add-product-dprice').value = "";
    document.getElementById('add-product-rating').value = "";
    document.getElementById('add-product-image').value = "";


    show_select();
}

function delete_product(){
    let data = JSON.parse(localStorage.getItem('products'));
    let id = document.getElementById('product').value-1;
    data.splice(id,1);
    localStorage.setItem('products',JSON.stringify(data));
    document.getElementById('product-name').value = "";
    document.getElementById('product-price').value = "";
    document.getElementById('product-dprice').value = "";
    document.getElementById('product-rating').value = "";
    document.getElementById('product-image').value = "";
    alert("Product Deleted")
    show_select();
}

function add_fav(id){
    let auth = JSON.parse(localStorage.getItem('user')) || null;
    let data = JSON.parse(localStorage.getItem('userdata')) || [];
    for(let i=0;i<data.length;i++){
        if(data[i]['username'] == auth){
            if(!contains(id,data[i]['fav'])){
                data[i]['fav'].push((id));
                break;
            }
            else{
                alert("Already In Favourites");
            }
        }
    }
    localStorage.setItem('userdata',JSON.stringify(data));
    login_logout();
}

function remove_fav(id){
    let auth = JSON.parse(localStorage.getItem('user')) || null;
    let data = JSON.parse(localStorage.getItem('userdata')) || [];
    for(let i=0;i<data.length;i++){
        if(data[i]['username'] == auth){
            if(contains(id,data[i]['fav'])){
                data[i]['fav'].splice(data[i]['fav'].indexOf(parseInt(id)),1);
                break;
            }
        }
    }
    localStorage.setItem('userdata',JSON.stringify(data));
    login_logout();
    display_fav();
}

function display_fav(){
    let data = JSON.parse(localStorage.getItem('products')) || [];
    let auth = JSON.parse(localStorage.getItem('user')) || null;
    let fav_data = JSON.parse(localStorage.getItem('userdata')) || [];
    document.getElementById('products').innerHTML = "";
    for(let j=0;j<fav_data.length;j++){
        if(fav_data[j]['username'] == auth){
            for(let i=0;i<data.length;i++){
                if(contains(parseInt(data[i]['product-id']),fav_data[j]['fav'])){
                    var rating = "<i class=\"fa fa-star text-danger\" aria-hidden=\"true\"></i>".repeat(data[i]['product-rating'])+"<i class=\"fa fa-star\" aria-hidden=\"true\"></i>".repeat(5-data[i]['product-rating']);
                    let div = document.createElement('div');
                    div.setAttribute('class', 'col-lg-4 col-xxl-3 col-md-6 col-sm-12 my-3 d-flex justify-content-center align-items-center');
                    div.innerHTML = `
                    <div class="card " style="width: 300px;">
                        <img src="${data[i]['product-image']}" class="card-img-top" alt="..." width=200 height=200>
                        <div class="card-body text-center">
                            <h5 class="card-title text-capitalize">${data[i]['product-name']}</h5>
                            <span class="card-text">₹ ${data[i]['product-price']}</span>
                            <del class="card-text ms-1">₹ ${data[i]['product-dprice']}</del><br>
                            <span class="card-text">
                                ${rating}
                            </span><br>
                            <a href="#" class="btn btn-outline-primary my-1">Add to Cart</a><br>
                            <a href="#" class="btn btn-outline-danger my-1" onclick="remove_fav(${data[i]['product-id']})">Remove from Favourite</a>
                        </div>
                    </div>
                    `;
                    document.getElementById('products').appendChild(div);
                }
            }
            break;
        }
    }
}

function is_user(){
    let auth = JSON.parse(localStorage.getItem('user')) || null;
    if((auth === null || auth === undefined || auth === "")){
        alert("You are not logged in ");
        window.location.href = './login.html';
    }
    else{
        alert("Welcome to Favourites");
    }
}

function fav_count(user){
    let data = JSON.parse(localStorage.getItem('userdata')) || [];
    for(let i=0;i<data.length;i++){
        if(data[i]['username'] == user){
            return data[i]['fav'].length;
        }
    }
}

function contains(id,array){
    for(let i=0;i<array.length;i++){
        if(array[i] == id){
            return true;
        }
    }
    return false;

}

let file_path = window.location.href;
if(file_path.includes('index.html')){
    load();
    product_display();
    login_logout();
}
else if(file_path.includes('favourite.html')){
    is_user()
    load();
    display_fav();
    login_logout();
}
else if(file_path.includes('admin.html')){
    is_admin();
    load();
    show_select()
    login_logout();
    document.getElementById('Addform').addEventListener('submit', function(e) {
        e.preventDefault();
        add();
    });
    document.getElementById('Updateform').addEventListener('submit', function(e) {
        e.preventDefault();
        update();
    });
}
else if(file_path.includes('login.html')){
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        login();
    });
}
else if(file_path.includes('register.html')){
    document.getElementById('registrationForm').addEventListener('submit', function(e) {
        e.preventDefault();
        register();
    });
}
else{

}