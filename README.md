# Interior Buisness

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Top Product Reviews</title>
<link rel="stylesheet" href="style.css">
</head>

<body>

<header>

<h1>Top Product Reviews</h1>

<input type="text" id="search" placeholder="Search products">

<button id="darkMode">🌙</button>

</header>

<section class="products" id="productList">

<div class="card">
<img src="https://via.placeholder.com/250">
<h3>Smart Watch</h3>
<p>Track fitness, heart rate and sleep easily.</p>
<a href="#">Buy Now</a>
</div>

<div class="card">
<img src="https://via.placeholder.com/250">
<h3>Wireless Earbuds</h3>
<p>Crystal clear sound with long battery life.</p>
<a href="#">Buy Now</a>
</div>

<div class="card">
<img src="https://via.placeholder.com/250">
<h3>DSLR Camera</h3>
<p>Best camera for photography beginners.</p>
<a href="#">Buy Now</a>
</div>

<div class="card">
<img src="https://via.placeholder.com/250">
<h3>Gaming Mouse</h3>
<p>High precision RGB gaming mouse.</p>
<a href="#">Buy Now</a>
</div>

</section>

<script src="script.js"></script>

</body>
</html>


const search = document.getElementById("search");
const cards = document.querySelectorAll(".card");
body{
font-family:Arial;
margin:0;
background:#f5f5f5;
transition:0.3s;
}

header{
display:flex;
justify-content:center;
align-items:center;
gap:15px;
padding:20px;
background:#111;
color:white;
flex-wrap:wrap;
}

search.addEventListener("keyup", function() {
#search{
padding:10px;
border-radius:5px;
border:none;
}

#darkMode{
padding:10px;
cursor:pointer;
border:none;
border-radius:5px;
}

let filter = search.value.toLowerCase();
.products{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:20px;
padding:30px;
}

cards.forEach(card => {
.card{
background:white;
padding:15px;
border-radius:10px;
text-align:center;
box-shadow:0 5px 10px rgba(0,0,0,0.1);
transition:0.3s;
}

let text = card.textContent.toLowerCase();
.card:hover{
transform:scale(1.05);
}

if(text.includes(filter)){
card.style.display = "block";
.card img{
width:100%;
border-radius:5px;
}
else{
card.style.display = "none";

.card a{
display:inline-block;
margin-top:10px;
background:#ff6600;
color:white;
padding:8px 15px;
text-decoration:none;
border-radius:5px;
}

});
.dark{
background:#1e1e1e;
color:white;
}

});
.dark .card{
background:#333;
}
