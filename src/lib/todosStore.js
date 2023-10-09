// eslint-disable-next-line import/no-unresolved
import { writable } from 'svelte/store';
import { v4 as uuid } from 'uuid';

const defaultTodos = [
  {
    id: uuid(),
    title: 'Study for 4 hours',
    isCompleted: true,
  },
  {
    id: uuid(),
    title: 'Go to the gym',
    isCompleted: false,
  },
  {
    id: uuid(),
    title: 'Meditate for 30 minutes',
    isCompleted: true,
  },
];

const storedTodos = JSON.parse(localStorage.getItem('todos')) || defaultTodos;
const todos = writable(storedTodos);
todos.subscribe((value) => {
  localStorage.setItem('todos', JSON.stringify(value));
});

export default todos;
