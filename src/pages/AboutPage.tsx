import React from 'react';
import { Shield, Users, Zap, Heart, Target, Award } from 'lucide-react';
import Card from '../components/ui/Card';

const AboutPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Segurança',
      description: 'Verificamos todos os anúncios para garantir a segurança dos usuários.'
    },
    {
      icon: Users,
      title: 'Comunidade',
      description: 'Mais de 15 mil usuários ativos comprando e vendendo diariamente.'
    },
    {
      icon: Zap,
      title: 'Rapidez',
      description: 'Publique seu anúncio em minutos e comece a vender imediatamente.'
    },
    {
      icon: Heart,
      title: 'Gratuito',
      description: 'Crie anúncios gratuitamente e conecte-se com compradores interessados.'
    },
    {
      icon: Target,
      title: 'Eficiência',
      description: 'Sistema de busca avançado para encontrar exatamente o que precisa.'
    },
    {
      icon: Award,
      title: 'Qualidade',
      description: 'Plataforma confiável com anos de experiência no mercado.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Hero */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Sobre o ClassiMarket
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Somos a plataforma de classificados que conecta pessoas em todo o Brasil,
          facilitando a compra e venda de produtos de forma segura e eficiente.
        </p>
      </section>

      {/* Mission */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossa Missão</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Democratizar o comércio online, oferecendo uma plataforma simples,
            segura e acessível para que qualquer pessoa possa comprar e vender
            produtos com facilidade e confiança.
          </p>
        </div>
      </section>

      {/* Features */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Por que escolher o ClassiMarket?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center">
              <div className="text-blue-600 mb-4 flex justify-center">
                <feature.icon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-900 text-white rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-center mb-12">
          ClassiMarket em Números
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">15K+</div>
            <div className="text-gray-300">Usuários Ativos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">2.5K+</div>
            <div className="text-gray-300">Produtos Ativos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">50K+</div>
            <div className="text-gray-300">Vendas Realizadas</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">98%</div>
            <div className="text-gray-300">Satisfação</div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
          Nossa História
        </h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            Fundado em 2020, o ClassiMarket nasceu da necessidade de criar uma
            plataforma de classificados moderna, segura e fácil de usar. Desde então,
            temos ajudado milhares de pessoas a comprar e vender produtos,
            construindo uma comunidade confiável e ativa em todo o Brasil.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
