// script.js

/**
 * Menjalankan perintah saat seluruh halaman selesai dimuat
 */
window.addEventListener("load", function() {
    // Pesan konfirmasi di konsol browser
    console.log("Website Portofolio Nathanael Alexandro Berhasil Dimuat");

    // Efek sederhana: Menambahkan class 'scrolled' pada navigasi saat di-scroll
    const nav = document.querySelector("nav");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            nav.style.backgroundColor = "rgba(254, 254, 255, 0.95)"; // Sedikit transparan saat scroll
            nav.style.padding = "0.8rem 0"; // Navigasi mengecil sedikit saat scroll
        } else {
            nav.style.backgroundColor = "#fcfcfc";
            nav.style.padding = "1.2rem 0";
        }
    });

    // Menandai link aktif berdasarkan halaman yang sedang dibuka
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        const linkPath = link.getAttribute("href");
        if (currentPath === linkPath || (currentPath === "" && linkPath === "index.html")) {
            link.style.color = "#0676e6"; // Memberi warna biru pada menu yang aktif
            link.style.borderBottom = "2px solid #ffffff";
        }
    });
});