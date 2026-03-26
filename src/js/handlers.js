import { nanoid } from "nanoid";
import { renderTasks } from "./render-tasks";

export function onHeaderFormSubmit (event) {
    event.preventDefault(); 
    const {taskName, taskDescription} = event.target.elements;
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
   renderTasks(task);
   event.target.reset();
}
