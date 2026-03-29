import { nanoid } from 'nanoid';
import { renderTasks } from './render-tasks';
import { saveTasks, loadTasks } from './local-storage-api';

let tasks = loadTasks(); // 🔥 завантаження з localStorage

// 🔹 рендер при старті
renderTasks(tasks);

export function onHeaderFormSubmit(event) {
  event.preventDefault();
  const { taskName, taskDescription } = event.target.elements;
  console.log(taskDescription);
  if (taskName.value.trim() === '' || taskDescription.value.trim() === '') {
    alert('Будь ласка, заповніть всі поля форми!');
    return;
  }
  const task = {
    name: taskName.value.trim(),
    description: taskDescription.value.trim(),
    id: nanoid(),
  };

  tasks.push(task); // 🔥 додаємо в масив
  saveTasks(tasks); // 🔥 зберігаємо
  renderTasks(tasks);
  event.target.reset();
}


import { refs } from "./refs";

refs.tasksList.addEventListener('click', onDeleteTask);

function onDeleteTask(event) {
  if (!event.target.classList.contains('task-list-item-btn')) return;

  const item = event.target.closest('.task-list-item');
  const id = item.dataset.id;

  tasks = tasks.filter(task => task.id !== id);

  saveTasks(tasks);
  renderTasks(tasks);
}

