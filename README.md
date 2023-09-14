AmoCRM API Service
Описание
Back-end сервис для работы с API AmoCRM. Реализует метод, который принимает GET запрос и на основе входных данных обновляет или создает новый контакт в AmoCRM, а также создает новую сделку для этого контакта.

Технологии
Node.js
Express.js (или NestJS)
Docker
Установка и Запуск
Клонировать репозиторий:

bash
Copy code
git clone [URL репозитория]
Перейти в директорию проекта:

bash
Copy code
cd [Название директории]
Установить зависимости:

bash
Copy code
npm install
(Опционально) Запустить в Docker:

bash
Copy code
docker-compose up
Или запустить локально:

bash
Copy code
npm start
Использование
Отправить GET запрос на http://localhost:3000/createOrUpdateContact с параметрами:

name: ФИО контакта
email: Email контакта
phone: Телефон контакта
Пример:
