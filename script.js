

function svgC(){
var e = document.createElement("div");
e.setAttribute("id", "svgs");
e.setAttribute("class", "hide");
e.innerHTML = svgs();
document.getElementsByTagName('body')[0].appendChild(e);
}

window.onload=svgC();

function svg(id){
return '<svg viewBox="0 0 512 512"><use xlink:href="#'+id+'"></use></svg>';
}
function svgs(){
out ='<svg viewBox="0 0 20 20">';

out+='<g id="home">';
out+='<path  d="M 393.59375 427.832031 L 337.714844 427.832031 C 335.699219 427.832031 334.050781 426.1875 334.050781 424.167969 L 334.050781 410.566406 C 334.050781 408.550781 332.402344 406.902344 330.386719 406.902344 L 252.195312 406.902344 C 250.179688 406.902344 248.53125 408.550781 248.53125 410.566406 L 248.53125 424.167969 C 248.53125 426.1875 246.882812 427.832031 244.867188 427.832031 L 202.855469 427.832031 C 200.839844 427.832031 199.191406 429.480469 199.191406 431.496094 L 199.191406 447.230469 C 199.191406 449.246094 200.839844 450.894531 202.855469 450.894531 L 393.589844 450.894531 C 395.605469 450.894531 397.253906 449.246094 397.253906 447.230469 L 397.253906 431.496094 C 397.257812 429.484375 395.609375 427.832031 393.59375 427.832031 Z M 393.59375 427.832031 "/>';
out+='<path  d="M 487.476562 59.949219 L 88.734375 59.949219 C 74.863281 59.949219 63.578125 71.238281 63.578125 85.113281 C 63.578125 85.113281 63.578125 133.09375 63.578125 150.742188 C 63.578125 159.421875 62.933594 160.648438 68.753906 160.648438 C 71.84375 160.648438 75.269531 160.648438 78.734375 160.648438 C 83.621094 160.648438 82.617188 159.421875 82.617188 150.582031 C 82.617188 132.972656 82.617188 85.113281 82.617188 85.113281 C 82.617188 81.796875 85.421875 78.992188 88.734375 78.992188 L 487.476562 78.992188 C 490.789062 78.992188 493.59375 81.796875 493.59375 85.113281 L 493.59375 330.769531 L 209.316406 330.769531 C 209.316406 330.769531 199.296875 330.75 199.296875 343.707031 C 199.296875 351.386719 199.296875 366.75 199.296875 374.433594 C 199.296875 387.371094 209.640625 387.371094 209.640625 387.371094 L 487.476562 387.371094 C 501.347656 387.371094 512.636719 376.085938 512.636719 362.210938 L 512.636719 85.113281 C 512.636719 71.238281 501.351562 59.949219 487.476562 59.949219 Z M 288.105469 365.644531 C 281.84375 365.644531 276.765625 360.570312 276.765625 354.308594 C 276.765625 348.046875 281.84375 342.96875 288.105469 342.96875 C 294.363281 342.96875 299.441406 348.046875 299.441406 354.308594 C 299.441406 360.570312 294.363281 365.644531 288.105469 365.644531 Z M 288.105469 365.644531 "/>';
out+='<path  d="M 160.484375 183.121094 L 16.238281 183.121094 C 7.28125 183.121094 0 190.40625 0 199.359375 L 0 436.449219 C 0 445.402344 7.28125 452.6875 16.238281 452.6875 L 160.484375 452.6875 C 169.4375 452.6875 176.722656 445.402344 176.722656 436.449219 L 176.722656 199.359375 C 176.722656 190.40625 169.4375 183.121094 160.484375 183.121094 Z M 70.566406 199.683594 L 106.152344 199.683594 C 107.851562 199.683594 109.230469 201.058594 109.230469 202.761719 C 109.230469 204.460938 107.851562 205.839844 106.152344 205.839844 L 70.566406 205.839844 C 68.867188 205.839844 67.492188 204.460938 67.492188 202.761719 C 67.492188 201.058594 68.867188 199.683594 70.566406 199.683594 Z M 88.144531 441.28125 C 83.503906 441.28125 79.742188 437.519531 79.742188 432.878906 C 79.742188 428.234375 83.503906 424.472656 88.144531 424.472656 C 92.785156 424.472656 96.550781 428.234375 96.550781 432.878906 C 96.550781 437.519531 92.785156 441.28125 88.144531 441.28125 Z M 162.769531 416.582031 C 162.769531 418.75 161.035156 420.519531 158.917969 420.519531 L 17.808594 420.519531 C 15.691406 420.519531 13.957031 418.75 13.957031 416.582031 L 13.957031 219.570312 C 13.957031 217.40625 15.691406 215.632812 17.808594 215.632812 L 158.917969 215.632812 C 161.035156 215.632812 162.769531 217.40625 162.769531 219.570312 Z M 162.769531 416.582031 "/>';
out+='</g>';


out+='<g id="group">';
out+='<path d="m254.173 106.667c29.461 0 53.333-23.872 53.333-53.333 0-29.462-23.872-53.334-53.333-53.334s-53.333 23.872-53.333 53.333c-.001 29.462 23.893 53.334 53.333 53.334z"/><path d="m405.341 128c29.461 0 53.333-23.872 53.333-53.333 0-29.44-23.872-53.333-53.333-53.333s-53.333 23.872-53.333 53.333c-.001 29.461 23.893 53.333 53.333 53.333z"/><path d="m106.674 128c29.461 0 53.333-23.872 53.333-53.333 0-29.44-23.872-53.333-53.333-53.333-29.44 0-53.333 23.893-53.333 53.333 0 29.461 23.893 53.333 53.333 53.333z"/>';
out+='<path d="m498.247 305.387-13.675-109.333c-3.328-26.624-26.069-46.72-52.907-46.72h-52.672c-5.931 0-11.904 1.045-17.771 3.136-5.248 1.856-8.171 7.424-6.741 12.8 1.045 3.947 2.027 7.957 2.517 12.117l14.144 123.904c1.856 16.405-3.264 32.747-14.059 44.843-2.347 2.645-5.227 5.12-9.003 7.829-3.029 2.155-4.715 5.739-4.437 9.429l8.384 117.355c.405 5.589 5.035 9.92 10.645 9.92h85.333c5.589 0 10.24-4.331 10.645-9.899l9.963-139.499c8.405-.555 16.277-4.395 21.888-10.752 6.061-6.89 8.898-16.021 7.746-25.13z"/>';
out+='<path d="m163.186 356.053c-4.587-2.88-8.597-6.208-11.925-9.899-10.795-12.096-15.915-28.437-14.059-44.843l14.144-123.904c.512-4.48 1.515-8.789 2.688-12.992.768-2.752.384-5.696-1.045-8.192-1.408-2.475-3.776-4.267-6.528-4.992-4.928-1.28-9.195-1.877-13.461-1.877h-52.673c-26.837 0-49.6 20.075-52.907 46.72l-13.674 109.313c-1.131 9.109 1.685 18.261 7.765 25.152 5.611 6.357 13.483 10.197 21.888 10.752l9.963 139.499c.405 5.589 5.035 9.899 10.645 9.899h85.333c5.589 0 10.24-4.331 10.645-9.899l8.213-114.923c.3-3.968-1.641-7.744-5.012-9.814z"/>';
out+='<path d="m349.938 303.723-14.144-123.925c-3.371-29.526-26.752-51.798-54.379-51.798h-54.464c-27.627 0-51.029 22.272-54.379 51.797l-14.144 123.904c-1.195 10.368 2.005 20.651 8.768 28.245 5.824 6.528 13.547 10.304 21.909 10.773l11.776 159.403c.405 5.547 5.056 9.877 10.645 9.877h85.333c5.589 0 10.219-4.309 10.645-9.877l11.776-159.403c8.384-.469 16.085-4.267 21.909-10.773 6.744-7.551 9.922-17.877 8.749-28.223z"/>';
out+='</g>';

out+='<g id="user-1">';
out+='<path d="m96.025 107.084c29.461 0 53.333-23.872 53.333-53.333s-23.872-53.333-53.333-53.333-53.333 23.872-53.333 53.333c-.001 29.461 23.871 53.333 53.333 53.333z"/>';
out+='<path d="m510.852 224.14c-3.2-25.515-29.269-42.901-54.251-33.408-8.853 3.413-19.691-1.749-23.787-11.115-4.971-11.413-11.115-22.315-18.197-32.448-6.315-8.981-5.141-20.757 2.667-27.349 9.429-7.979 14.699-19.691 14.464-32.171-.256-12.651-6.101-24.341-16.043-32.064-16.32-12.672-34.112-23.211-52.885-31.317-5.12-2.219-10.517-3.349-16.021-3.349-19.797 0-36.501 14.336-39.701 34.091-1.643 10.155-10.539 17.088-21.419 15.893-11.947-1.28-24.341-1.28-36.352 0-10.475 1.237-19.733-5.739-21.397-15.915-3.157-19.648-19.84-33.92-39.573-33.92-4.48 0-8.896.747-13.163 2.219-5.227 1.792-8.235 7.296-6.891 12.651 1.643 6.656 2.411 12.309 2.411 17.813 0 4.864-.64 9.941-2.069 16-.192.832-.277 1.664-.277 2.496l.469 46.4c.043 3.008 1.344 5.867 3.584 7.851 14.763 13.141 24.149 31.36 26.411 51.307l1.259 10.944c.469 4.032 3.179 7.467 6.997 8.832 3.883 1.344 8.107.448 11.029-2.368 16.064-15.573 37.099-24.128 59.243-24.128 47.061 0 85.333 38.272 85.333 85.333s-38.272 85.333-85.333 85.333c-18.475 0-36.288-6.144-51.52-17.771-2.709-2.048-6.187-2.709-9.408-1.771-3.243.917-5.845 3.328-7.04 6.485-2.667 7.061-6.165 13.056-10.432 17.835-3.755 4.203-8.085 7.765-12.885 10.624-3.008 1.771-4.928 4.907-5.205 8.405l-8.363 113.6c0 5.184 3.712 9.6 8.811 10.496 2.304.427 4.651.619 6.933.619 19.797 0 36.48-14.336 39.68-34.069 1.664-10.176 10.603-17.003 21.419-15.915 11.989 1.28 24.384 1.28 36.352 0 10.56-1.109 19.755 5.739 21.397 15.915 3.2 19.733 19.925 34.069 39.701 34.069 5.504 0 10.901-1.131 16.021-3.349 18.795-8.107 36.587-18.645 52.885-31.317 9.941-7.723 15.787-19.413 16.043-32.064.256-12.48-5.013-24.213-14.464-32.171-7.808-6.613-8.981-18.368-2.667-27.371 7.083-10.112 13.205-21.013 18.197-32.427 4.096-9.387 14.144-14.827 24.021-11.029 23.787 9.088 50.816-7.957 54.016-33.472 1.323-10.368 1.984-20.971 1.984-31.488 0-10.495-.662-21.098-1.984-31.445z"/>';
out+='<path d="m183.001 332.364c6.784-7.552 9.963-17.877 8.789-28.224l-14.144-123.925c-3.349-29.525-26.752-51.797-54.4-51.797h-54.464c-27.648 0-51.051 22.272-54.4 51.819l-14.144 123.903c-1.173 10.368 2.027 20.651 8.768 28.224 5.803 6.528 13.547 10.304 21.909 10.773l11.776 159.403c.427 5.547 5.056 9.877 10.645 9.877h85.333c5.589 0 10.219-4.309 10.645-9.877l11.776-159.403c8.385-.469 16.108-4.266 21.911-10.773z"/>';
out+='</g>';

out+='<g id="user">';
out+='<path d="m256.01 106.667c29.461 0 53.333-23.872 53.333-53.333 0-29.441-23.872-53.334-53.333-53.334-29.44 0-53.333 23.893-53.333 53.333 0 29.462 23.893 53.334 53.333 53.334z"/>';
out+='<path d="m351.776 303.701-14.144-123.904c-3.349-29.525-26.752-51.819-54.4-51.819h-54.464c-27.648 0-51.051 22.272-54.4 51.819l-14.144 123.904c-1.173 10.368 2.027 20.651 8.768 28.224 5.803 6.528 13.547 10.304 21.909 10.773l11.776 159.403c.427 5.568 5.056 9.899 10.645 9.899h85.333c5.589 0 10.219-4.309 10.645-9.877l11.776-159.403c8.384-.469 16.107-4.267 21.909-10.773 6.785-7.574 9.964-17.878 8.791-28.246z"/>';
out+='</g>';


out+='</svg>';
return out;
}

web={
gebi:function(id){
return document.getElementById(id) ;
},
web:function(){
web.gebi('content').innerHTML=web.front[0];
web.setPage(web.home);
},

setPage:function(arr){
web.gebi('page3').innerHTML=arr[0];
web.gebi('page4-1').innerHTML=arr[1];
web.gebi('page4-2').innerHTML=arr[2];
},

front:[
'\
<div class="s-12 l-1 " id="header">.</div> \
<div class="s-12 l-10 " id="body" > \
<div class="s-12 l-12 " id="page1"> \
<div class="kiri" ><span class="">Sismadi</span><span class="orange">.co.id</span></div> \
<div class="kanan" ></div> \
</div> \
<div class="s-12 l-12 " id="page2"> \
<ul> \
<li><a onclick="web.setPage(web.home)"  href="#" >Home</a></li> \
<li><a onclick="web.setPage(web.product)"  href="#" >Product</a></li> \
<li><a onclick="web.setPage(web.order)"  href="#" >Order</a></li> \
<li><a onclick="web.setPage(web.payment)"  href="#" >Payment</a></li> \
<li><a onclick="web.setPage(web.contact)" href="#" >Contact</a></li> \
</ul> \
</div> \
<div class="s-12 l-12 " id="page3"></div> \
<div class="s-12 l-12 " id="page4"> \
<div class="s-12 l-4 artikel" id="page4-1"></div> \
<div class="s-12 l-8 artikel" id="page4-2"></div> \
</div> \
<div class="s-12 l-12 " id="page5"> \
<div class="kiri" >Sismadi</div> \
<div class="kanan" >Copyright 2021</div> \
</div> \
</div> \
<div class="s-12 l-1 center" id="body">.</div> \
'
],

home:[
'<div class="row" > \
<div class="s-12 l-4 artikel"><span class="judul2">Free Inventory System </span><br> \
Gratis Program Gudang, Inventory, Penjualan dan Akuntansi <br> \
<a href="#">download</a> \
</div> \
<div class="s-12 l-8 artikel">\
<i style="max-width:300px;" class="kanan img">'+svg('home')+'</i>\
</div> \
</div> \
<div class="row gading" > \
<div class="s-12 l-4 artikel" >\
<i class="simg">'+svg('user')+'</i>\
<span class="judul">Free</span><br>Paket free stokbarang bisa di download dan digunakan. \
Maksimal produk yang bisa disimpan adalah 10 item <br>\
+ Live Demo <br>\
+ download<br> \
+ Download Desktop <br>\
+ Download without Webserver</div> \
<div class="s-12 l-4 artikel" >\
<i class="simg">'+svg('group')+'</i>\
<span class="judul">Unlimited</span> <br> \
Harga Mulai 100.000, Program Komputer siap pakai, tersedia Aplikasi Inventory, Aplikasi Penjualan, Aplikasi Keuangan dan Aplikasi Dagang. <br>\
+ Order </div> \
<div class="s-12 l-4 artikel" >\
<i class="simg">'+svg('user-1')+'</i>\
<span class="judul">Customize</span> <br>\
Harga Mulai 1.500.000, Program Komputer yang disesuaikan dengan kebutuhan anda. <br>\
+ Hubungi Kami<br> \
+ download <br>\
+ Proposal</div> \
</div>',
'<span class="judul">News & Events</span><br> \
Sistem Informasi Dagang Berbasis Web <hr> \
Kami siap membantu membuat program yang disesuaikan dengan kebutuhan usaha anda.',
'<span class="judul">Selamat Datang di Sismadi.co.id</span><br> \
Program Toko dan Gudang. <hr>\
Program stokbarang adalah aplikasi database untuk distributor yang memiliki banyak supplier dan customer, dengan harga barang yang bervariasi,\
harga sebuah barang yang sama dapat berbeda harganya bergantung pada kesepakatan harga.<br> \
Dibuat menggunakan PHP  dan MySQL , dengan perintah SQL sehingga mampu menangani transaksi data yang besar. Stokbarang mendukung multi user dan Network.<hr>\
<div class="s-12 l-6">\
+ Cocok untuk banyak jenis usaha.<br>\
+ Nominal Converter.<br>\
+ Multi User.<br>\
+ Barcode Ready.<br>\
+ Laporan Keuangan Akuntansi Dagang dan Jasa.<br>\
</div>\
<div class="s-12 l-6">\
+ Pengingat batas minimal persediaan.<br>\
+ Pengingat barang kadaluarsa.<br>\
+ Export-impor dalam format excel.<br>\
+ Bisa Untuk Kasir.<br>\
</div>\
',
],

payment:[
'<div class="artikel"><span class="judul2">Payment</span></div>',
'\
<span class="judul">Payment Confirmation Form </span>\
<hr>\
Informasi<br>\
Download aplikasi stokbarang free, Produk yang bisa disimpan palig banyak 10 item.<br>\
Jika sesuai dengan yang anda butuhkan, anda bisa upgrade ke Paket Unlimited\
<hr>\
1. Lakukan Pembayaran <br>\
Transfer Pembayaran ke<br>\
BCA : 628 036 0048 <br>\
a/n : Wawan Sismadi <br>\
<hr>\
2. Konfirmasi Pembayaran <br>\
Kirim SMS ke 087885073737 <br>\
atau email ke konfirmasi@sismadi.co.id<br> \
dengan menyertakan nama pemilik rekening, email dan nama paket. <br>\
Kode aktifasi dikirim melalui email setelah kami terima pembayaran.',
'\
<span class="judul">Konfirmasi Pembayaran</span><hr>\
Email *\
<input type="text">\
Jumlah Dibayarkan *\
<input type="text">\
<input type="submit" value="Submit">\
'
],

order:[
'<div class="artikel"><span class="judul2">Order</span></div>',
'\
<span class="judul">Order Paket Unlimited </span>\
<hr>\
Informasi<br> \
Download aplikasi stokbarang free, Produk yang bisa disimpan palig banyak 10 item.<br>\
Jika sesuai dengan yang anda butuhkan, anda bisa upgrade ke Paket Unlimited \
<hr>\
1. Lakukan Pembayaran<br> \
Transfer Pembayaran ke <br>\
BCA : 628 036 0048 <br>\
a/n : Wawan Sismadi <br>\
<hr>\
2. Konfirmasi Pembayaran <br>\
Kirim SMS ke 087885073237 <br>\
atau email ke sales@sismadi.co.id <br>\
dengan menyertakan nama pemilik rekening, email dan nama paket.<br>\
Kode aktifasi dikirim melalui email setelah kami terima pembayaran.',
'\
<span class="judul">Order Form</span><hr>\
Nama *\
<input type="text">\
Email *\
<input type="text">\
Paket *\
<input type="text">\
Inventory\
<input type="text">\
Harga\
<input type="text">\
Kode Unik\
<input type="text">\
Jumlah Yang Dibayar *\
<input type="text">\
<input type="submit" value="submit">\
'
],

product:[
'<div class="artikel"><span class="judul2">Product</span></div>',
'<span class="judul">Paket Free Stokbarang</span><br> \
Produk yang bisa disimpan maksimal 10 item <br>\
Demo | Download | Manual Book | Video Tutorial |\
<hr>\
<span class="judul">Paket Unlimited</span><br>\
Input data tidak dibatasi\
Order\
<hr>\
<span class="judul">Paket Training</span><br>\
Training aplikasi Stokbarang.<br>\
Biaya: Rp75.000/jam/orang.<br>\
Lama training: minimal 2 jam .<br>\
Waktu dan tempat: disesuaikan.<br>\
Peserta: minimal 2 Orang .<br>\
Modul Training: Buku dan CD aplikasi\
',
'\
\
<span class="judul">Harga dan Perbandingan Paket</span><br>\
Modul Aplikasi yang tersedia pada masing masing Paket .\
<hr>\
<div class="table">\
<table cellspacing="0"> \
<tr><th>Details</th>\
<th>Inventory </th>\
<th>Penjualan</th>\
<th>Mini Market </th>\
<th>Akuntansi</th>\
</tr>\
\
<td>Harga</td>\
<td>Rp.100000 /user</td>\
<td>Rp.150000 /user</td>\
<td>Rp.200000 /user</td>\
<td>Rp.250000 /user</td></tr>\
<tr>\
<td>Lokasi</td>\
<td>Ya</td>\
<td>Ya</td>\
<td>Ya</td>\
<td>Ya</td></tr>\
<tr class="even">\
<td>Keluar</td>\
<td>Ya</td>\
<td>Ya</td>\
<td>Ya</td>\
<td>Ya</td></tr>\
\
<tr>\
<td>Masuk</td>\
<td>Ya</td>\
<td>Ya</td>\
<td>Ya</td>\
<td>Ya</td></tr>\
<tr class="even">\
<td>Laporan Distribusi </td>\
<td>Ya</td>\
<td>Ya</td>\
<td>Ya</td>\
<td>Ya</td></tr>\
<tr class="even">\
<td>Kontak</td>\
<td>&nbsp;</td>\
<td>Ya</td>\
<td>Ya</td>\
<td>Ya</td></tr>\
\
<tr>\
<td>Beli</td>\
<td>&nbsp;</td>\
<td>Ya</td>\
<td>Ya</td>\
<td>Ya</td></tr>\
\
<tr>\
<td>Jual</td>\
<td>&nbsp;</td>\
<td>Ya</td>\
<td>Ya</td>\
<td>Ya</td></tr>\
\
<tr>\
<td>Tagihan</td>\
<td>&nbsp;</td>\
<td>Ya</td>\
<td>Ya</td>\
<td>Ya</td></tr>\
\
<tr>\
<td>Laporan Transaksi </td>\
<td>&nbsp;</td>\
<td>Ya</td>\
<td>Ya</td>\
<td>Ya</td></tr>\
<tr>\
<td>Kasir</td>\
<td>&nbsp;</td>\
<td>&nbsp;</td>\
<td>Ya</td>\
<td>Ya</td></tr>\
<tr>\
<td>Akun</td>\
<td>&nbsp;</td>\
<td>&nbsp;</td>\
<td>&nbsp;</td>\
<td>Ya</td></tr>\
\
<tr>\
<td>Persamaan</td>\
<td>&nbsp;</td>\
<td>&nbsp;</td>\
<td>&nbsp;</td>\
<td>Ya</td></tr>\
\
<tr>\
<td>Posting</td>\
<td>&nbsp;</td>\
<td>&nbsp;</td>\
<td>&nbsp;</td>\
<td>Ya</td></tr>\
\
<tr>\
<td>Jurnal</td>\
<td>&nbsp;</td>\
<td>&nbsp;</td>\
<td>&nbsp;</td>\
<td>Ya</td></tr>\
\
<tr>\
<td>Buku Besar </td>\
<td>&nbsp;</td>\
<td>&nbsp;</td>\
<td>&nbsp;</td>\
<td>Ya</td></tr>\
\
<tr>\
<td>Laporan Keuangan </td>\
<td>&nbsp;</td>\
<td>&nbsp;</td>\
<td>&nbsp;</td>\
<td>Ya</td></tr>\
\
<tr class="even"><td></td>\
<td><input type="submit" value="order"></td>\
<td><input type="submit" value="order"></td>\
<td><input type="submit" value="order"></td>\
<td><input type="submit" value="order"></td></tr>\
</table>\
</div>\
'
],

contact:[
'<div class="artikel"><span class="judul2">Contact</span></div>',
'\
<span class="judul">Contact Info</span>\n\
<hr>\
Wawan Sismadi <br>\
Phone:087885073237 <br> \
email: wawan@sismadi.co.id',
'\
<span class="judul">Contact Form</span> <br>\
Jika ada pertanyaan atau informasi lain berhubungan dengan stokbarang, \
kami siap membantu, bisa hubungi kami melalui telpon, email, messenger atau mengisi form berikut. \
<hr>\
Your Name * \
<input type="text">\
Your Email *\
<input type="text">\
Company Name \
<input type="text">\
Subject \
<input type="text">\
Message * \
<input type="text">\
<input type="submit" value="submit">\
'
],
};
web.web();
