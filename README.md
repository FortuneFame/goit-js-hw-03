# goit-js-hw-03

About Репозиторий по выполнению ДЗ №3 JavaScript

# Задание 1

CRUD для свойств объекта С - create (создать) R - read (читать) U - update
(обновить) D - delete (удалить) Напиши скрипт, который, для объекта user,
последовательно:

-добавляет поле 'mood' со значением 'happy' -добавляет поле 'full time' со
значением true -заменяет значение 'hobby' на 'skydiving' -заменяет значение
'premium' на false -в переменную message записывает содержимое объекта user: для
переменной keys присваивает массив свойств объекта, используя метод
Object.keys() -с помощью оператора for...of -в формате ключ:значение -c
переносом строки ('\n')

```js
let message = '';
const user = {
  age: 20,
  hobby: 'html',
  name: 'Mango',
  premium: true,
};

//Write code under this line

const keys = Object.keys(user);
// Write code under this line

//console.log(message);
/*
'age : 20 
hobby : skydiving 
name : Mango 
premium : false 
mood : happy 
"full time" : true 
' */
```

# Задание 2

Напиши функцию countProps(obj), которая возвращает число - количество свойств в
объекте.

Циклы не должны использоваться

```js
const countProps = function (obj) {
  'use strict';
  // Write code under this line
};

//console.log(countProps({})); // 0

//console.log(countProps({a:1, b:1})); // 2

//console.log(countProps({a:1, b:1, c:1, d:1, e:1})); // 5
```

# Задание 3

Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников
и возвращает имя самого продуктивного (который выполнил больше всех задач).
Сотрудники и кол-во выполненных задач содержатся как свойства объекта в формате
"имя":"кол-во задач".

```js
const findBestEmployee = function (employees) {
  'use strict';
  // Write code under this line
};

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
//console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
//console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
//console.log(findBestEmployee(sellers));
// 'lux'
```

# Задание 4

```js

```

# Задание 5

```js

```

# Задание 6

```js

```
