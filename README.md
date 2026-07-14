# Exercicio-integrador-01

## 1. Qual a diferença entre módulo e classe?

Um módulo é uma forma de organizar o código em arquivos separados, permitindo importar e exportar funções, classes e outros recursos. Já uma classe é um modelo para criar objetos, reunindo atributos e métodos relacionados a um mesmo contexto.

## 2. Por que utilizar encapsulamento?

O encapsulamento é utilizado para proteger os dados de um objeto e controlar como eles são acessados ou modificados. Isso garante que alterações ocorram apenas por meio de métodos definidos pela classe, preservando a consistência das informações.

## 3. Qual a vantagem de reutilizar funções em uma biblioteca?

Uma biblioteca permite centralizar funções que podem ser reutilizadas em diferentes partes do sistema. Isso evita duplicação de código, facilita a manutenção e torna o desenvolvimento mais organizado.

## 4. Para que serve `super`?

A palavra-chave `super` é utilizada em uma classe derivada para acessar o construtor ou os métodos da classe pai. Assim, é possível reaproveitar comportamentos já implementados antes de adicionar novas funcionalidades.

## 5. Qual a diferença entre herança e sobrescrita?

Herança é o mecanismo que permite que uma classe reutilize atributos e métodos de outra classe. Sobrescrita ocorre quando a classe filha redefine um método herdado para adaptar seu comportamento às suas necessidades.

## 6. Por que a validação do e-mail deve ocorrer dentro de `setEmail()` utilizando a biblioteca?

A validação deve ser realizada dentro de `setEmail()` para garantir que todo e-mail atribuído ao objeto seja validado antes de ser armazenado. Dessa forma, o objeto permanece sempre em um estado válido e a regra de validação fica centralizada em um único local, utilizando a biblioteca responsável por verificar o formato do e-mail.

## 7. Em quais situações utilizar `&&` e `||`?

O operador `&&` é utilizado quando todas as condições precisam ser ser verdadeiras para que uma expressão seja considerada verdadeira. Já o operador `||` é utilizado quando basta que uma das condições seja verdadeira para que a expressão também seja verdadeira.