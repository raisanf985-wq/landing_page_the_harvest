const menu = [
    [
        "Chicken Steak",
        "Western",
        35000,
        "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
    ],

    [
        "Spaghetti",
        "Western",
        28000,
        "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?auto=format&fit=crop&w=600&q=80"
    ],

    [
        "Beef Burger",
        "Western",
        30000,
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
    ],

    [
        "Tteokbokki",
        "Korean",
        25000,
        "https://images.unsplash.com/photo-1635363638580-c2809d049eee?auto=format&fit=crop&w=600&q=80"
    ],

    [
        "Korean Chicken",
        "Korean",
        30000,
        "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=600&q=80"
    ],

    [
        "Kimbap",
        "Korean",
        22000,
        "https://images.unsplash.com/photo-1617196034183-421b4917c92d?auto=format&fit=crop&w=600&q=80"
    ],

    [
        "Nasi Goreng",
        "Chinese",
        22000,
        "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80"
    ],

    [
        "Dimsum",
        "Chinese",
        20000,
        "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=600&q=80"
    ],

    [
        "Kwetiau",
        "Chinese",
        24000,
        "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80"
    ],


    /* NUSANTARA */

    [
        "Rendang",
        "Nusantara",
        30000,
        "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=600&q=80"
    ],

    [
        "Sate Ayam",
        "Nusantara",
        25000,
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80"
    ],

    [
        "Pangsit Ayam",
        "Nusantara",
        22000,
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
    ],

    [
        "Brownies",
        "Dessert",
        18000,
        "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80"
    ],

    [
        "Pancake",
        "Dessert",
        22000,
        "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=600&q=80"
    ],

    [
        "Pudding",
        "Dessert",
        15000,
        "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=600&q=80"
    ],

    [
        "Iced Chocolate",
        "Minuman",
        15000,
        "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80"
    ],

    [
        "Lemon Tea",
        "Minuman",
        12000,
        "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80"
    ],

    [
        "Milky Gula Aren Boba",
        "Minuman",
        18000,
        "https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&w=600&q=80"
    ]

];


/* ================= VARIABEL ================= */

let cart = [];

const menuList =
    document.getElementById("menuList");

const cartList =
    document.getElementById("cartList");

const jumlahEl =
    document.getElementById("jumlah");

const promoList =
    document.getElementById("promoList");

const paymentTotal =
    document.getElementById("paymentTotal");

const uangPelanggan =
    document.getElementById("uangPelanggan");

const hasilPembayaran =
    document.getElementById("hasilPembayaran");


/* ================= TAMPIL MENU ================= */

function tampilMenu(data = menu) {

    menuList.innerHTML = data.map(m => `

        <div class="card">

            <img
                src="${m[3]}"
                alt="${m[0]}"
            >

            <h3>
                ${m[0]}
            </h3>

            <p>
                ${m[1]}
            </p>

            <b>
                Rp${m[2].toLocaleString("id-ID")}
            </b>

            <button
                onclick="tambah(${menu.indexOf(m)})">

                Pesan

            </button>

        </div>

    `).join("");
}


/* ================= TAMBAH MENU ================= */

function tambah(i) {

    let item =
        cart.find(x => x.nama == menu[i][0]);


    if (item) {

        item.jumlah++;

    } else {

        cart.push({

            nama: menu[i][0],

            harga: menu[i][2],

            jumlah: 1

        });

    }

    tampilCart();
}


/* ================= TAMPIL KERANJANG ================= */

function tampilCart() {

    let total = 0;
    let jumlah = 0;


    if (cart.length == 0) {

        cartList.innerHTML =
            "Keranjang masih kosong.";

    } else {

        cartList.innerHTML =
            cart.map((item, i) => {

                let sub =
                    item.harga * item.jumlah;


                total += sub;
                jumlah += item.jumlah;


                return `

                    <div class="item">

                        <b>
                            Nama Menu:
                            ${item.nama}
                        </b>

                        <p>
                            Jumlah Dipesan:
                            ${item.jumlah}
                        </p>

                        <p>
                            Harga:
                            Rp${item.harga.toLocaleString("id-ID")}
                        </p>

                        <p>
                            Subtotal:
                            Rp${sub.toLocaleString("id-ID")}
                        </p>


                        <button
                            onclick="kurang(${i})">

                            −

                        </button>


                        <button
                            onclick="plus(${i})">

                            +

                        </button>


                        <button
                            onclick="hapus(${i})">

                            Hapus

                        </button>

                    </div>

                `;

            }).join("");


        cartList.innerHTML += `

            <p class="total">

                Total:
                Rp${total.toLocaleString("id-ID")}

            </p>

        `;
    }


    /* JUMLAH PADA TOMBOL KERANJANG */

    jumlahEl.innerText = jumlah;


    /* TOTAL PEMBAYARAN */

    paymentTotal.innerText =
        "Rp" + total.toLocaleString("id-ID");


    hasilPembayaran.innerHTML = "";
}


/* ================= TAMBAH JUMLAH ================= */

function plus(i) {

    cart[i].jumlah++;

    tampilCart();
}


/* ================= KURANG JUMLAH ================= */

function kurang(i) {

    cart[i].jumlah--;


    if (cart[i].jumlah == 0) {

        cart.splice(i, 1);

    }


    tampilCart();
}


/* ================= HAPUS ================= */

function hapus(i) {

    cart.splice(i, 1);

    tampilCart();
}


/* ================= FILTER MENU ================= */

function filterMenu(kategori) {

    if (kategori == "Semua") {

        tampilMenu(menu);

    } else {

        tampilMenu(
            menu.filter(
                m => m[1] == kategori
            )
        );

    }
}


/* ================= SCROLL KERANJANG ================= */

function lihatKeranjang() {

    document
        .querySelector(".keranjang")
        .scrollIntoView({
            behavior: "smooth"
        });
}


/* ================= PROMO ================= */

const promo = [

    {
        nama: "Chicken Steak",

        harga: 35000,

        diskon: 28000,

        foto: menu[0][3]
    },

    {
        nama: "Nasi Goreng",

        harga: 22000,

        diskon: 17600,

        foto: menu[6][3]
    }

];


/* ================= TAMPIL PROMO ================= */

function tampilPromo() {

    promoList.innerHTML =
        promo.map((p, i) => `

        <div class="promo-card">

            <img
                src="${p.foto}"
                alt="${p.nama}"
            >

            <span class="diskon">
                DISKON 20%
            </span>

            <h3>
                ${p.nama}
            </h3>

            <p class="harga-lama">

                Rp${p.harga.toLocaleString("id-ID")}

            </p>

            <b class="harga-diskon">

                Rp${p.diskon.toLocaleString("id-ID")}

            </b>

            <button
                onclick="pesanPromo(${i})">

                Pesan Sekarang

            </button>

        </div>

    `).join("");
}


/* ================= PESAN PROMO ================= */

function pesanPromo(i) {

    let p = promo[i];

    let item =
        cart.find(x => x.nama == p.nama);


    if (item) {

        item.jumlah++;

    } else {

        cart.push({

            nama: p.nama,

            harga: p.diskon,

            jumlah: 1

        });

    }


    tampilCart();


    alert(
        p.nama +
        " berhasil ditambahkan ke keranjang!"
    );
}


/* ================= PEMBAYARAN ================= */

function hitungKembalian() {

    let total = 0;


    cart.forEach(item => {

        total +=
            item.harga * item.jumlah;

    });


    let bayar =
        Number(uangPelanggan.value);


    hasilPembayaran.className = "";


    /* KERANJANG KOSONG */

    if (cart.length == 0) {

        hasilPembayaran.className =
            "kurang";

        hasilPembayaran.innerHTML =
            "⚠️ Keranjang masih kosong.";

        return;
    }


    /* UANG BELUM DIISI */

    if (!bayar) {

        hasilPembayaran.className =
            "kurang";

        hasilPembayaran.innerHTML =
            "⚠️ Masukkan uang pelanggan terlebih dahulu.";

        return;
    }


    /* UANG KURANG */

    if (bayar < total) {

        let kurang =
            total - bayar;


        hasilPembayaran.className =
            "kurang";


        hasilPembayaran.innerHTML = `

            ❌ Uang pelanggan kurang.

            <br>

            Kurang:
            Rp${kurang.toLocaleString("id-ID")}

        `;

    }


    /* UANG PAS */

    else if (bayar == total) {

        hasilPembayaran.className =
            "berhasil";


        hasilPembayaran.innerHTML = `

            ✅ Pembayaran sesuai.

            <br>

            Uang pas, tidak ada kembalian.

        `;

    }


    /* UANG LEBIH */

    else {

        let kembalian =
            bayar - total;


        hasilPembayaran.className =
            "berhasil";


        hasilPembayaran.innerHTML = `

            ✅ Pembayaran berhasil.

            <br>

            Kembalian:
            Rp${kembalian.toLocaleString("id-ID")}

        `;

    }

}


/* ================= JALANKAN ================= */

tampilMenu();

tampilCart();

tampilPromo();