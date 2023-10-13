    function addContact() {
        // Obtenha os valores do nome e telefone do formulário
        var nameInput = document.getElementById("name");
        var phoneInput = document.getElementById("phone");
    
        var name = nameInput.value;
        var phone = phoneInput.value;
    
        // Verifique se ambos os campos estão preenchidos
        if (name.trim() === "" || phone.trim() === "") {
        alert("Por favor, preencha todos os campos.");
        return;
        }
    
        // Crie uma nova linha na tabela
        var table = document.getElementById("contact-list");
        var newRow = table.insertRow(-1);
    
        // Crie as células para nome e telefone
        var nameCell = newRow.insertCell(0);
        var phoneCell = newRow.insertCell(1);
    
        // Preencha as células com os valores inseridos pelo usuário
        nameCell.innerHTML = name;
        phoneCell.innerHTML = phone;
    
        // Limpe os campos do formulário
        nameInput.value = "";
        phoneInput.value = "";
    }
    