# Завдання: Виправлення помилок та рефакторинг

## Опис:

Цей проєкт реалізує систему кошика для покупок у Angular. Було проведено рефакторинг коду для покращення структури, типізації та стилізації компонентів.

## Виконані зміни:

### Оптимізація компонентів

- Додано implements **OnDestroy** у клас ProductListComponent для очищення ресурсів.
- Додано implements **OnInit**, **OnChanges** у клас CartComponent для кращого контролю за змінами.

### Винесення інтерфейсів

- Створено файл **interface.ts** для інтерфейсу ProductList.
- Тепер масив товарів має чітку типізацію.

### Виправлення типізації

- Оновлено всі змінні, методи та компоненти відповідно до TypeScript-типізації.
- Покращено безпеку коду та зменшено можливість помилок.

### Додавання стилів

- Покращено вигляд кнопок (дизайн, градієнти, анімації).

### Реалізовано функціонал видалення товару

- У CartComponent додано кнопку для видалення товару зі списку.
- Реалізовано метод для видалення товару з масиву.

## Підсумок: рефакторинг зробив код чистішим, більш структурованим та зручним для подальшого розширення.
