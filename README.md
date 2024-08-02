# Definição do projeto

Esse projeto comtém a realização de um desafio técnico proposto para uma vaga de Desenvolvedor Jr. Consiste em receber um WebSocket com informações sobre ativos da bolsa de valores e exibir as 5 com valores mais baixos e mais altos. 


# Dependências

Para começar a utilizar o projeto é necessário ter o npm instalado.

`npm instal`

É necessário também possuir o docker instalado na sua máquina. 

# Inicialização

Para incicializar o projeto é necessário rodar `npm start` e o comando `docker run -p 8080:8080 toroinvest/quotesmock` para concectar com a WebSocket utilizada.

# Para testar

Para realizar testes automatizados é necessário rodar o script `npm test`.