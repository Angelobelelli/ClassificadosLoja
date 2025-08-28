# App

Classificados style app

## RFs (Requisitos Funcionais)

[] Deve ser possível cadastrar um seller;
[] Deve ser possível realizar login para sellers;
[] Deve ser possível obter o perfil de um seller logado;
[] Deve ser possível cadastrar categorias(admin);
[] Deve ser possível listar categorias com contagem de produtos;
[] Deve ser possível cadastrar um produto (anúncio);
[] Deve ser possível editar ou remover um produto pelo seller;
[] Deve ser possível adicionar, remover ou atualizar imagens de um produto;
[] Deve ser possível buscar produtos por texto, categoria, cidade, estado, faixa de preço e produtos premium;
[] Deve ser possível ordenar produtos por preço, data de criação ou número de views;
[] Deve ser possível visualizar o número de visualizações de um produto;
[] Deve ser possível listar produtos premium;

## RNs (Regras de Negócio)

[] Um seller só pode editar ou remover seus próprios produtos;
[] Produtos premium são destacados na listagem principal;
[] Produtos removidos ou vendidos não aparecem nas buscas públicas;
[] Cada produto deve obrigatoriamente ter uma categoria;
[] Cada produto deve registrar o número de views a cada acesso único;

## RNFs (Requisitos não funcionais)

[] A senha do seller precisa estar criptografada;
[] Os dados da aplicação precisam estar em um banco MySQL via Prisma;
[] Todas listas de dados precisam estar paginadas (20 itens por página);
[] A aplicação precisa ter um sistema de login com JWT;
[] O sistema deve ser responsivo e acessível em dispositivos móveis e desktop;
[] O tempo de resposta das buscas deve ser inferior a 1 segundo para até 10.000 produtos;
