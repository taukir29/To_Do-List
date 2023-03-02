
	let form = document.querySelector("#newTask");
	let input = document.querySelector("#addTask");
	let listElement = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		let task = input.value;

		let taskElement = document.createElement('div');
		taskElement.classList.add('task');

		let taskContentElement = document.createElement('div');
		taskContentElement.classList.add('content');

		taskElement.appendChild(taskContentElement);

		let taskInputElement = document.createElement('input');
		taskInputElement.classList.add('text');
		taskInputElement.type = 'text';
		taskInputElement.value = task;
		taskInputElement.setAttribute('readonly', 'readonly');

		taskContentElement.appendChild(taskInputElement);

		let taskAction = document.createElement('div');
		taskAction.classList.add('actions');
		
		let taskEdit = document.createElement('button');
		taskEdit.classList.add('edit');
		taskEdit.innerText = 'Edit';

		let task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		taskAction.appendChild(taskEdit);
		taskAction.appendChild(task_delete_el);

		taskElement.appendChild(taskAction);

		listElement.appendChild(taskElement);

		input.value = '';

		taskEdit.addEventListener('click', (e) => {
			if (taskEdit.innerText.toLowerCase() == "edit") {
				taskEdit.innerText = "Save";
				taskInputElement.removeAttribute("readonly");
				taskInputElement.focus();
			} else {
				taskEdit.innerText = "Edit";
				taskInputElement.setAttribute("readonly", "readonly");
			}
		});

		task_delete_el.addEventListener('click', (e) => {
			listElement.removeChild(taskElement);
		});
	});
