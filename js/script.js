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
                ${task.done ? "\"tasks__task--done\"" : "\"tasks__task\""}
                >
                <button class="js-done"> zrobione? </button>
                
                ${task.content}
                
                <button class="js-remove"> usuń </button>
            </li>
            `;
            
        };

        document.querySelector(".js-tasks").innerHTML = htmlString;
            bindEvents();
        };


            

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();

        if (newTaskContent === "") {
            return;
        }

        addNewTask(newTaskContent);
    }



    const init = () => {

        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();
}       