import React from "react";

const FullWidthFooter = () => {
  return (
    <footer className="w-full bg-gray-900 text-white mt-40">
      <div className="w-full max-w-7xl mx-auto px-4 py-8">
        {/* Conteúdo principal do footer */}
        <div className="flex flex-col md:flex-row justify-around mb-8">
          <div>
            <img src="logo-branca.svg" alt="" />
          </div>
          {/* Seção CLASSIFICADOS NINJA */}
          <div className="mb-8 md:mb-0  text-start  md:w-1/4">
            <nav>
              <ul className="gap-2">
                <li><a href="#" className="hover:text-gray-300 transition">Menu</a></li>
                <li><a href="#" className="hover:text-gray-300 transition">Anuncios</a></li>
                <li><a href="#" className="hover:text-gray-300 transition">Categorías</a></li>
                <li><a href="#" className="hover:text-gray-300 transition">Lojas</a></li>
                <li><a href="#" className="hover:text-gray-300 transition">Favorites</a></li>
                <li><a href="#" className="hover:text-gray-300 transition">Contribu</a></li>
              </ul>
            </nav>
          </div>

          

          {/* Seção Contatos */}
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-semibold mb-4">Social/Contratos</h3>
            <address className="not-italic">
              <ul className="space-y-2">
                <li>(IT) 99999-9999</li>
                <li>(IT) 5555-5555</li>
                <li>
                  <a href="mailto:contato@anxdesigni.com" className="hover:text-gray-300 transition">
                    contato@anxdesigni.com
                  </a>
                </li>
              </ul>
            </address>
          </div>

        </div>

        {/* Rodapé inferior */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400">
            Classificados Ninja 2025 - Todos Os Direitos Reservados
          </p>
        </div>
      </div>
     
    </footer>
    
  );
};

export default FullWidthFooter;