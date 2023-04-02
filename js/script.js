{
    const tasks = [];

    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });

        const toggleDoneButtons = document.querySelectorAll(".js-done");

        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });

    }

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
            done: false,
        })

        render();
    }

    const removeTask = (index) => {
        tasks.splice(index, 1);
        render();
    }

    const toggleTaskDone = (index) => {
        tasks[index].done = !tasks[index].done;
        render();
    }


    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li class=
                ${task.done ? "\"tasks__task tasks__task--done\"" : "\"tasks__task\""}
                >
                
                <button class="tasks__button tasks__button--done js-done"> ${task.done ? "✔" : ""} </button>
                
                ${task.content}
                
                <button class="tasks__button tasks__button--remove js-remove"> 🗑 </button>
            </li>
            `;
            
        };

        document.querySelector(".js-tasks").innerHTML = htmlString;
            bindEvents();
        };


            

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskElement = document.querySelector(".js-newTask");
        const newTaskContent = newTaskElement.value.trim();

        if (newTaskContent !== "") {
            addNewTask(newTaskContent);
            newTaskElement.value = "";
        }

        newTaskElement.focus();
    }



    const init = () => {

        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();
}       