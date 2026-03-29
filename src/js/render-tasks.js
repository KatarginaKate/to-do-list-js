import { refs } from "./refs";

export function renderTasks(tasks) {
  const markup = tasks
    .map(
      task => `
<li class="task-list-item" data-id="${task.id}">
  <button class="task-list-item-btn">Delete</button>
  <h3>${task.name}</h3>
  <p>${task.description}</p>
</li>
`
    )
    .join('');

  refs.tasksList.innerHTML = markup; // 🔥 повний перерендер
}
