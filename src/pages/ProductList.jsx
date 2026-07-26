import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://toko-online-backend-zeta.vercel.app/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error("Gagal mengambil data produk:", error));
  }, []);

  return (
    <div>
      <h2>Daftar Produk</h2>
      {/* Menggunakan Layouting CSS Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px',
        marginTop: '20px'
      }}>
        {products.map(product => (
          <div key={product._origin || product._id} style={{
            border: '1px solid #ddd', borderRadius: '8px', padding: '15px', textAlign: 'center'
          }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '5px' }} />
            <h3>{product.name}</h3>
            <p style={{ fontWeight: 'bold', color: '#28a745' }}>Rp {product.price.toLocaleString('id-ID')}</p>
            <Link to={`/products/${product._id}`} style={{
              display: 'block', marginTop: '10px', padding: '8px', 
              backgroundColor: '#28a745', color: '#fff', textDecoration: 'none', borderRadius: '5px'
            }}>
              Lihat Detail
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;