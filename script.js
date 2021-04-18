web={
front:function(){
out  ='<div class="s-12 l-1 " id="header">.</div>';
out +='<div class="s-12 l-10 " id="body" >';
out +='<div class="s-12 l-12 " id="page1">';
out +='<div class="kiri" ><span class="">sismadi</span><span class="orange">.co.id</span></div>';
out +='<div class="kanan" ></div>';
out +='</div>';
out +='<div class="s-12 l-12 " id="page2">';
out +='<ul>';
out +='<li><a onclick="web.home()"  href="#" >Home</a></li>';
out +='<li><a onclick="web.product()"  href="#" >Product</a></li>';
out +='<li><a onclick="web.order()"  href="#" >Order</a></li>';
out +='<li><a onclick="web.payment()"  href="#" >Payment</a></li>';
out +='<li><a onclick="web.contact()" href="#" >Contact</a></li>';
out +='</ul>';

out +='</div>';
out +='<div class="s-12 l-12 " id="page3">Product</div>';
out +='<div class="s-12 l-12 " id="page4">content</div>';
out +='<div class="s-12 l-12 " id="page5">';
out +='<div class="kiri" >sismadi</div>';
out +='<div class="kanan" >copyright 2021</div>';
out +='</div>';
out +='</div>';
out +='<div class="s-12 l-1 center" id="body">.</div>';
document.getElementById('content').innerHTML=out;
},

web:function(){
  this.front();
  this.home();
},
home:function(){
  arr=[
'<span class="judul">Free</span><br>Paket free stokbarang bisa di download dan digunakan. Maksimal produk yang bisa disimpan adalah 10 item \
Live Demo download Download Desktop Download without Webserver',
'<span class="judul">Unlimited</span> <br> Harga Mulai 100.000, Program Komputer siap pakai, tersedia Aplikasi Inventory, Aplikasi Penjualan, Aplikasi Keuangan dan Aplikasi Dagang. \
+ Order',
'<span class="judul">Customize</span> <br>Harga Mulai 1.500.000, Program Komputer yang disesuaikan dengan kebutuhan anda. \
+ Hubungi Kami \
download \
+ Proposal',
'<span class="judul">News & Events</span><br> \
Sistem Informasi Dagang Berbasis Web <hr> \
Kami siap membantu membuat program yang disesuaikan dengan kebutuhan usaha anda.',
'<span class="judul">Selamat Datang di sismadi.co.id</span><br> \
Program Toko dan Gudang. <hr>\
Program stokbarang adalah aplikasi database untuk distributor yang memiliki banyak supplier dan customer, dengan harga barang yang bervariasi,\
harga sebuah barang yang sama dapat berbeda harganya bergantung pada kesepakatan harga. \
Dibuat menggunakan PHP  dan MySQL , dengan perintah SQL sehingga mampu menangani transaksi data yang besar. Stokbarang mendukung multi user dan Network.\
',
];
  out ='<div class="row" >';
  out +='<div class="s-12 l-4 artikel"><span class="judul2">Free Inventory System </span><br>';
  out +='Gratis Program Gudang, Inventory, Penjualan dan Akuntansi <br>';
  out +='<a href="#">download</a>';
  out +='</div>';
  out +='<div class="s-12 l-8 artikel"><img style="max-width:300px;" class="kanan img" src="responsive.svg" alt="responsive" ></div>';
  out +='</div>';

  out +='<div class="row gading" >';
  out +='<div class="s-12 l-4 artikel" ><img style="max-width:70px;" src="user.svg" alt="user">'+arr[0]+'</div>';
  out +='<div class="s-12 l-4 artikel" ><img style="max-width:70px;" src="group.svg" alt="group">'+arr[1]+' </div>';
  out +='<div class="s-12 l-4 artikel" ><img style="max-width:70px;" src="user-1.svg" alt="user-1">'+arr[2]+'</div>';
  out +='</div>';

document.getElementById('page3').innerHTML=out;
out ='<div class="row" >';
out +='<div class="s-12 l-4 artikel " >'+arr[3]+'</div>';
out +='<div class="s-12 l-8 artikel" >'+arr[4]+'</div>';
out +='</div>';

document.getElementById('page4').innerHTML=out;

},
product:function(){
out ='<div class="artikel"><span class="judul2">Product </span></div>';
document.getElementById('page3').innerHTML=out;
},
order:function(){
  out ='<div class="artikel"><span class="judul2">Order </span></div>';
  document.getElementById('page3').innerHTML=out;
},
payment:function(){
  out ='<div class="artikel"><span class="judul2">Payment </span></div>';
  document.getElementById('page3').innerHTML=out;
},
contact:function(){
  out ='<div class="artikel"><span class="judul2">Contact </span></div>';
  document.getElementById('page3').innerHTML=out;
},
};
web.web();
