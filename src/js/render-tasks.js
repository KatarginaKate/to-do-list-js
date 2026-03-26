import { refs } from "./refs";

export function renderTasks(tasks) {
  const markup = `
            <li class="task-list-item">
      <button class="task-list-item-btn">Delete</button>
      <h3>${tasks.name}</h3>
      <p>${tasks.description}</p>
  </li>
        `;
  refs.tasksList.insertAdjacentHTML('beforeend', markup);
}
