Estenda a página web de produtos criada anteriormente, de forma que:
a. Caso o usuário clique no título da tabela de produtos ‘Nome’, exiba a tabela em
ordem alfabética de nomes de produtos;
b. Caso o usuário clique no título da tabela de produtos ‘Valor’, exiba a tabela em
ordem de valor produtos;
c. Adicione um campo de pesquisa que possibilite a pesquisa de um produto pelo
‘nome’ e/ou ‘descrição’ no qual o usuário possa digitar uma string e clicar no botão
‘Buscar’:
i. Caso a string seja vazia, deverá listar todos os produtos;
ii. Caso a string esteja contina no campo nome e/ ou descrição, deve-se ‘filtrar’
a lista de produtos conforme palavra inserida pelo usuário e exibir ao usuário
a nova tabela adicionando a informação `Foram encontrado(s)
${numeroDeProdutos}`;
iii. Caso não exista produtos conforme a string (chave de pesquisa), exibir a
mensagem `Não foram encontrados produtos conforme chave de pesquisa!`.
d. Implemente a função de exclusão de produtos agora utilizando o método slice;
e. Substitua as estruturas de repetição agora utilizando ‘for’ ao invés de ‘while’;
f. Caso deseje poderá utilizar agora o método forEach do array;