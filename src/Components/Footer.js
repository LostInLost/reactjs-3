import React from "react";


// Untuk menangkap Value yang dikasih dari luar component perlu dipanggil dengan 
// mendeklarasikan props seperti dibawah ini agar bisa digunakan
const Footer = (props) => {
    return (
        <div>
            <h3>Halaman Footer</h3>
            <h3>Component ini dibuat menggunakan Function bukan Class</h3>
            <p>Nilai ini ditampilkan dari props: { props.judul } </p>
            <p>Nama Saya: { props.nama } </p>
        </div>
    )
}

export default Footer