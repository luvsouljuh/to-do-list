{
    const tasks = [
        {
            content: "wykonać pracę",
            done: false,
        },
        {
            content: "ostylować strone",
            done: true,
        },
    ];

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li class=
                ${task.done ? "\"tasks__task--done\"" : "\"tasks__task\""}>
                ${task.content}
            </li>
            `;
            document.querySelector(".js-tasks").innerHTML = htmlString;
        }
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();

        if (newTaskContent === "") {
            return;
        }

        addNewTask(newTaskContent);
    }

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        })

        render();
    }

    const init = () => {

        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();
}
        
        
        
