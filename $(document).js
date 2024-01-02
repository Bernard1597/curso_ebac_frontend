$(document).ready(function() {
    // Adiciona tarefa ao submeter o formulário
    $('#task-form').submit(function(event) {
        event.preventDefault();
        var taskName = $('#task-name').val();
        if (taskName.trim() !== "") {
            addTask(taskName);
            $('#task-name').val('');
        }
    });

    // Adiciona efeito ao clicar nos itens da lista
    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });

    // Função para adicionar tarefa à lista
    function addTask(taskName) {
        var listItem = $('<li>').text(taskName);
        $('#task-list').append(listItem);
    }
});
