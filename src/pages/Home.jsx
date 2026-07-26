import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Selamat Datang di Toko Online</h1>
      <p>Temukan produk-produk terbaik dengan harga terjangkau di sini!</p>
      <Link to="/products" style={{
        display: 'inline-block', marginTop: '20px', padding: '10px 20px', 
        backgroundColor: '#007bff', color: '#fff', textDecoration: 'none', borderRadius: '5px'
      }}>
        Lihat Semua Produk
      </Link>
    </div>
  );
}

export default Home;