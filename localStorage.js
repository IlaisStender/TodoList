const itemsStorage = JSON.parse(localStorage.getItem('todo-list')) || [
  {
    title: 'Duplicate door key',
    done: false,
    id: 'test',
  },
  {
    title: 'Boom Shka lak',
    done: true,
    id: 'test',
  },
];

export default itemsStorage;
