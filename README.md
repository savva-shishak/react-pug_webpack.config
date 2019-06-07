# Готовая сборка webpack
Выполнить установку - npm i

## Команды:<br/>

npm run dev - запуск сборки в dev режиме<br/>
npm run build - запуск сборки в production режиме<br/>
npm start - запуск сервера в dev режиме<br/>

## Директория src содержит исходники:<br/>

-fonts - подключаемые шрифты <br/>
-images - изображения <br/>
-scripts - jsx -скрипты <br/>
-styles - sass стили <br/>
-template - pug шаблоны <br/>

## В проекте готовая сборка для поектирования React + pug


## Заметка: при написании компонента, используйте функции или классы, а не переменные
```
const App = pug`
div                      }=> <div /> + error
  |Hello world
`

-------

const App = () => pug`
div                      }=>  <div>Hello world</div>
  |Hello world
`

```
