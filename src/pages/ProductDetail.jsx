import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error("Gagal mengambil detail produk:", error));
  }, [id]);

  if (!product) return <p>Memuat detail produk...</p>;

  return (
    <div style={{ display: 'flex', gap: '40px', marginTop: '30px', alignItems: 'center', flexWrap: 'wrap' }}>
      <img src={product.image} alt={product.name} style={{ maxWidth: '400px', width: '100%', borderRadius: '10px' }} />
      <div style={{ flex: '1', minWidth: '300px' }}>
        <h1>{product.name}</h1>
        <h3 style={{ color: '#28a745' }}>Rp {product.price.toLocaleString('id-ID')}</h3>
        <p style={{ margin: '20px 0', lineHeight: '1.6' }}>{product.description}</p>
        <p><strong>Kategori:</strong> {product.category}</p>
        <Link to="/products" style={{ display: 'inline-block', marginTop: '20px', color: '#007bff' }}>&larr; Kembali ke Daftar Produk</Link>
      </div>
    </div>
  );
}

export default ProductDetail;