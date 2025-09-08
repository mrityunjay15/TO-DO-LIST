const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    // Add task
    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText === "") return;

      const li = document.createElement("li");
      li.innerHTML = `
        <span>${taskText}</span>
        <div class="task-actions">
          <i class="fa-solid fa-check" onclick="toggleComplete(this)"></i>
          <i class="fa-solid fa-trash" onclick="deleteTask(this)"></i>
        </div>
      `;
      taskList.appendChild(li);
      taskInput.value = "";
    }

    // Toggle complete
    function toggleComplete(el) {
      const li = el.closest("li");
      li.classList.toggle("completed");
    }

    // Delete task
    function deleteTask(el) {
      const li = el.closest("li");
      li.remove();
    }

    // Enter key support
    taskInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        addTask();
      }
    });