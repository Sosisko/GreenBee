# AngularGreenbee

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.6.

## Порядок установки и запуска
1. Склонировать рпозиторий командой в терминале git clone https://github.com/Sosisko/GreenBee.git
2. Перейти в терминале в папку GreenBee
3. Установить зависимости командой npm i
4. Запустить проект командой npm start

## Администратирование
ВНИМАНИЕ!
Редактирование/удаление/добавление товаров происходит в реальной базе данных!

Для перехода в админку необходимо перейти по адресу http://localhost:4200/admin
Email: a@a.ru
Password: 123456

Использована база данных FireBase от Google.
База данных в открытом доступе.
Возможность добавлять, удалять и редактировать товары.

Для добавления картинки использована библиотека ngx-quill.
Картинка кодируется в формат base64.

Опционально можно добавлять опции товара, такие как вес и литры.

Также есть возможность установить скидку на товар.

## Клиентская часть
Для поиска и сортировки товаров использованы pipes.

Если у товара есть опции, то вместо кнопки "Добавить в корзину" появляется кнопка "Выбрать опции".

Модальные окна выполнены с помощью Angular Material.

Для анимации иконок быстрого просмотра товара использован Angular Animations.

Товары попавшие в корзину сохраняются в Local Storage.

Для алертов при добавлении, редактировании, удалении товара создан отдельный сервис и соответстующий переиспользуемый компонент.

(Функция добавления товара в избранное не реализована)


