let taskList = [];

const task = localStorage.getItem('todoText');
console.log(taskList, task);
if (task !== null) {
    taskList = JSON.parse(task);
    for (let i = 0; i < taskList.length; i++) {
        $('#todoList').append(`<li>${taskList[i]}</li>`);
    }
}

$('#addTodoBtn').on('click', function () {
    const todoText = $('#todoText').val();
    taskList.push(todoText);
    $('#todoList').append(`<li>${todoText}</li>`);
    localStorage.setItem('todoText', JSON.stringify(taskList));
    console.log(taskList);
    $('#todoText').val();
});

$('#deleteTodoBtn').on('click', function () {
    localStorage.clear();
    $('#todoList').empty();
    taskList = [];
});

const a1='孫悟空';
const a2='孫悟飯';
const a3='孫悟天';
const a4='ベジータ';
const a5='トランクス';

if(
    taskList.includes(a1)||
    taskList.includes(a2)||
    taskList.includes(a3)||
    taskList.includes(a4)||
    taskList.includes(a5)
){
    $('#result').html('さすがだ！')
};
