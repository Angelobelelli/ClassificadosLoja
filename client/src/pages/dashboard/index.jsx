import { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';
import api from "../../api/api"; // Importa a instância do Axios configurada


export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      window.location.href = '/login';
      return;
    }

  api
      .get('/products', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(res => setProducts(res.data))
      .catch(err => console.error('Erro ao buscar produtos:', err));
  }, [token]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Meus Anúncios</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} showActions />
        ))}
      </div>
    </div>
  );
}
