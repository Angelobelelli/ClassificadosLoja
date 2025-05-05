import { useEffect, useState } from "react";
import axios from "axios";

export default function AdList() {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/products/products") // Verifique se essa URL está correta
      .then(res => setAds(res.data))
      .catch(err => console.error("Erro ao buscar anúncios:", err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Anúncios Recentes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ads.map(ad => (
          <div key={ad.id} className="bg-white shadow-md rounded-2xl overflow-hidden">
            <img src={ad.image} alt={ad.nome} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{ad.nome}</h2>
              <p className="text-gray-600 text-sm line-clamp-2">{ad.descricao}</p>
              <div className="mt-3 flex justify-between items-center">
                <span className="text-lg font-bold text-green-600">
                  R$ {Number(ad.preco).toFixed(2)}
                </span>
                <button className="text-sm text-blue-600 hover:underline">Ver mais</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
