body{
font-family:Arial;
margin:0;
background:#f4f4f4;
}

header{
background:#111;
color:white;
text-align:center;
padding:20px;
}

#search{
padding:10px;
margin-top:10px;
}

.products{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:20px;
padding:30px;
}

.card{
background:white;
padding:15px;
border-radius:10px;
text-align:center;
box-shadow:0 5px 10px rgba(0,0,0,0.2);
transition:0.3s;
}

.card:hover{
transform:scale(1.05);
}

.card img{
width:100%;
border-radius:6px;
}

.card a{
display:inline-block;
margin-top:10px;
background:#ff6600;
color:white;
padding:8px 15px;
text-decoration:none;
border-radius:5px;
}

.dark{
background:#222;
color:white;
}

.dark .card{
background:#333;
}
