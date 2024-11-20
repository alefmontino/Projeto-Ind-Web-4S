function openAddUserModal(userId = null) {
    const modal = document.getElementById("userModal");
    const form = document.getElementById("userForm");
    const title = document.getElementById("modalTitle");

    if (userId) {
        title.textContent = "Editar Usuário";

    } else {
        title.textContent = "Adicionar Novo Usuário";
    }

    form.reset();
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("userModal");
    modal.style.display = "none";
}

document.getElementById("userForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Usuário salvo com sucesso!");
    closeModal();
});

function deleteUser(userId) {
    if (confirm("Tem certeza que deseja excluir este usuário?")) {
       
        alert("Usuário excluído com sucesso!");
    }
}


function editUser(userId) {
    openAddUserModal(userId);
}

function searchUser() {
    const searchTerm = document.getElementById("search").value.toLowerCase();
    const rows = document.querySelectorAll("#userTable tbody tr");

    rows.forEach(row => {
        const name = row.cells[1].textContent.toLowerCase();
        const email = row.cells[2].textContent.toLowerCase();
        const username = row.cells[3].textContent.toLowerCase();

        if (name.includes(searchTerm) || email.includes(searchTerm) || username.includes(searchTerm)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}
