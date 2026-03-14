<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Aesthetic Product Picks</title>

<style>

body{
font-family:Arial;
margin:0;
background:url("https://images.unsplash.com/photo-1519389950473-47ba0277781c") center/cover fixed;
}

header{
background:rgba(0,0,0,0.75);
color:white;
padding:20px;
text-align:center;
}

#search{
padding:10px;
width:250px;
margin-top:10px;
border-radius:6px;
border:none;
}

.hero{
text-align:center;
color:white;
padding:80px 20px;
background:rgba(0,0,0,0.5);
}

.hero h1{
font-size:40px;
}

.products{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:25px;
padding:40px;
}

.card{
background:rgba(255,255,255,0.9);
padding:15px;
border-radius:12px;
text-align:center;
box-shadow:0 8px 15px rgba(0,0,0,0.3);
transition:0.3s;
}

.card:hover{
transform:scale(1.05);
}

.card img{
width:100%;
border-radius:8px;
}

.price{
color:#ff6600;
font-weight:bold;
}

.rating{
color:gold;
}

.card a{
display:inline-block;
margin-top:10px;
background:#ff6600;
color:white;
padding:10px 18px;
text-decoration:none;
border-radius:6px;
}

footer{
background:#111;
color:white;
text-align:center;
padding:20px;
}

</style>

</head>

<body>

<header>

<h2>Top Aesthetic Product Picks</h2>

<input type="text" id="search" placeholder="Search products...">

</header>

<div class="hero">

<h1>Best Tech Products of 2026</h1>
<p>Discover the best gadgets and deals</p>

</div>

<section class="products" id="productList">

<div class="card">
<img src="https://via.placeholder.com/250">
<h3>Smart Watch</h3>
<p>Fitness tracking smartwatch</p>
<div class="rating">⭐⭐⭐⭐☆</div>
<div class="price">₹2999</div>
<a href="#">Buy Now</a>
</div>

<div class="card">
<img src="https://via.placeholder.com/250">
<h3>Wireless Earbuds</h3>
<p>Noise cancelling earbuds</p>
<div class="rating">⭐⭐⭐⭐⭐</div>
<div class="price">₹1999</div>
<a href="#">Buy Now</a>
</div>

<div class="card">
<img src="https://via.placeholder.com/250">
<h3>Gaming Mouse</h3>
<p>RGB gaming mouse</p>
<div class="rating">⭐⭐⭐⭐☆</div>
<div class="price">₹899</div>
<a href="#">Buy Now</a>
</div>

<div class="card">
<img src="https://via.placeholder.com/250">
<h3>Bluetooth Speaker</h3>
<p>Portable bass speaker</p>
<div class="rating">⭐⭐⭐⭐☆</div>
<div class="price">₹1499</div>
<a href="#">Buy Now</a>
</div>

<div class="card">
<img src="https://via.placeholder.com/250">
<h3>Mechanical Keyboard</h3>
<p>Best keyboard for gamers</p>
<div class="rating">⭐⭐⭐⭐⭐</div>
<div class="price">₹3499</div>
<a href="#">Buy Now</a>
</div>

<div class="card">
<img src="https://via.placeholder.com/250">
<h3>Power Bank</h3>
<p>10000mAh fast charging</p>
<div class="rating">⭐⭐⭐⭐☆</div>
<div class="price">₹999</div>
<a href="#">Buy Now</a>
</div>

</section>

<footer>

<p>Affiliate Website | Product recommendations</p>

</footer>

<script>

const search=document.getElementById("search");
const cards=document.querySelectorAll(".card");

search.addEventListener("keyup",function(){

let value=search.value.toLowerCase();

cards.forEach(card=>{

let text=card.textContent.toLowerCase();

if(text.includes(value)){
card.style.display="block";
}else{
card.style.display="none";
}

});

});

</script>

</body>
</html>
