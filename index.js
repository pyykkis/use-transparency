var Transparency = require('transparency'),
    template,
    todos = [
        {todo: 'Hello'},
        {todo: 'World!'}
    ];

template = document.querySelector('.todos');

Transparency.render(template, todos);

