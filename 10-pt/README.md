Crie uma página web que peça ao usuário que digite um nome de ‘produto’, sua ‘descrição’
e seu respectivo ‘valor’ e que possua um botão de ‘Incluir produto’ e outro botão de ‘Listar
produtos’, de forma que:
a. Caso o usuário preencha um nome de produto, sua descrição e valor válidos e clique
no botão ‘Incluir produto’, deve ser criado um ‘objeto’ do produto (com as
propriedades ‘id’, ‘nome’, ‘descricao’, ‘valor’, ‘incluidoEm’) que será incluído em um
array de ‘produtos’ e uma mensagem do tipo `Produto ${produto.nome} incluído
com sucesso!`;
b. O objeto do produto deve conter o seu ‘id’ que é um número inteiro que sempre
incrementa garantido que o produto sempre terá um ‘id’ diferente dos demais;
c. O objeto do produto deve conter a data e a hora da sua criação na propriedade
‘incluidoEm’ no formato de timestamp (Date.now());
d. Caso o usuário preencha algum dado incorreto (condições de validação de nome,
descrição e valor) e clique no botão ‘Incluir produto’, deverá ser mostrada uma
mensagem do tipo `Falha no cadastro do produto!` e, se possível, o motivo da falha
na inclusão do produto;
e. Caso o usuário clique no botão ‘Listar produtos’, deve ser mostrada uma tabela com
os produtos cadastrados, sendo que:
i. A tabela deve conter 4 colunas: Produto, Valor, Editar e Apagar
ii. Cada linha da tabela deve ter o id do produto, seu nome, seu valor, uma
imagem pequena que representa um botão de editar e uma imagem pequena
que representa um botão de apagar;
iii. Caso o usuário clique no nome do produto, devem ser exibidos todos os
dados cadastrados no objeto respectivo, isto é, o ‘id’, o ‘nome’, a ‘descricao’,
o ‘valor’ e a informação da sua criação em ‘incluidoEm’ no formato
`dd/mm/aaaa – HH:MM:SS` (dd: dia, mm: mês, aaaa: ano, HH: hora, MM:
minutos, SS: segundos);
iv. Caso o usuário clique na imagem de editar da linha do produto, deve ser
possível ao usuário de substituir as informações do ‘id’ do produto
selecionado;
v. Caso a lixeira do produto na linha seja clicada, deve-se apagar o produto do
array de ‘produtos’.
f. A tabela deve ser ‘atualizada’ a cada operação de clique no botão ‘Listar produtos’,
de operação de edição e exclusão de produtos.
g. Para incluir um ‘produto’ no array de ‘produtos’ utilizar o método push;
h. Para obter o tamanho do array ‘produtos’ utilizar seu atributo ‘length’;
i. Deve-se utilizar apenas a função ‘while’ ou ‘do...while’ para percorrer os items do
array, pegar um id ou para excluir um produto específico deste array não sendo
permitidas outras estrutura de repetição como ‘for’;
j. Não é permitido o uso de qualquer outro método de array como map, filter, reduce,
splice, slice, find, forEach entre outros