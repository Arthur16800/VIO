// Chamada da função "createUser" para associação ao evento de envio do formulário
document
  .getElementById("formulario-registro")
  .addEventListener("submit", createUser);

document.addEventListener("DOMContentLoaded", getAllUsers);

// DOMContentLoaded carrega o html
document.addEventListener("DOMContentLoaded", getAllUsersTable );

document.addEventListener("DOMContentLoaded", getAllOrganizador);

document.addEventListener("DOMContentLoaded", getAllOrganizadoresTable);

function createUser(event) {
  //previne o comportamento padrão do formulário, ou seja, impede que ele seja enviado e recarreguea página.
  event.preventDefault();

  //captura os valores dos campos do formulário

  const name = document.getElementById("nome").value;
  const cpf = document.getElementById("cpf").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("senha").value;
  const data_nascimento = document.getElementById("data").value;

  //requisição HTTP para o endpoint de cadastro de usuário.
  fetch("http://10.89.240.14:5000/api/v1/user", {
    //realiza uma chamada http para o servidor (a rota definida)
    method: "POST",
    headers: {
      //a requisição será em formato JSON
      "Content-Type": "application/json",
    },
    //transforma os dados do formulário em uma string JSON para serem enviados no corpo da requisição
    body: JSON.stringify({ name, cpf, password, email, data_nascimento }),
  })
    .then((response) => {
      //tratamento da resposta do servidor / API
      if (response.ok) {
        //verifica se a resposta foi bem sucedida (status 2xx {200 alguma coisa})
        return response.json();
      }
      //convertendo o erro em formato json
      return response.json().then((err) => {
        //Mensagem retornada do servidor, acessada pela chave "error"
        throw new Error(err.error);
      });
    }) //fechamento da then(response)
    .then((data) => {
      //Executa a resposta de sucesso - retorna ao usuário final
      //exibe um alerta para o usuário final(front) com o nome do usuário que acabou de ser cadastrado
      alert(data.message);
      console.log(data.message);

      //reseta os campos do formulário após o sucesso do cadastro
      document.getElementById("formulario-registro").reset();
    })
    .catch((error) => {
      //captura qualquer erro que ocorra duante o processo de requisição / resposta
      //Exibe alerta (front) com o erro processado
      alert("erro no cadastro: " + error.message);

      console.error("Erro:", error.message);
    });
} //fechamento createUser

function getAllUsers() {
  fetch("http://10.89.240.14:5000/api/v1/user", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    // then é usado para tratar respostas
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return response.json().then((err) => {
        throw new Error(err.error);
      });
    })
    .then((data) => {
      const userList = document.getElementById("user-list");
      userList.innerHTML = ""; //limpa a lista existente
      data.users.forEach((user) => {
        const listItem = document.createElement("li"); //tag <li> line(linha)
        listItem.textContent = `Nome:${user.name}, CPF:${user.cpf}, Email:${user.email}, Data de Nascimento:${user.data_nascimento}`;
        userList.appendChild(listItem);
      });
    })
    .catch((error) => {
      alert("Erro ao obter usuários" + error.message);
      console.error("Erro: ", error.message);
    });
}
function getAllUsersTable() {
  fetch("http://10.89.240.14:5000/api/v1/user", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    // then é usado para tratar respostas
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return response.json().then((err) => {
        throw new Error(err.error);
      });
    })
    .then((data) => {
      const userList = document.getElementById("user-list-tabela");
      // Limpa a lista antes de adicionar novos itens
      userList.innerHTML="";

      // Verifica se há usuarios retornados e os adiciona à tabela
      data.users.forEach((usuario) => {
        // cria uma nova linha 
        const tr = document.createElement("tr");
        // cria células para nome, cpf e email

        const tdName = document.createElement("td");
        tdName.textContent = usuario.name;
        tr.appendChild(tdName); 

        const tdcpf = document.createElement("td");
        tdcpf.textContent = usuario.cpf;
        tr.appendChild(tdcpf); 

        const tdEmail = document.createElement("td");
        tdEmail.textContent = usuario.email;
        tr.appendChild(tdEmail); 

        const tdData_nascimento = document.createElement("td");
        tdData_nascimento.textContent = usuario.data_nascimento;
        tr.appendChild(tdData_nascimento); 


        // Adiciona a linha à tabela
        userList.appendChild(tr);
      });
    })
    .catch((error) => {
      alert("Erro ao obter usuarios: " + error.message)
    });
}

function getAllOrganizador() {
  fetch("http://10.89.240.14:5000/api/v1/organizador", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    // then é usado para tratar respostas
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return response.json().then((err) => {
        throw new Error(err.error);
      });
    })
    .then((data) => {
      const organizadorList = document.getElementById("organizador-list");
      organizadorList.innerHTML = ""; //limpa a lista existente
      data.organizadores.forEach((organizador) => {
        const listItem = document.createElement("li"); //tag <li> line(linha)
        listItem.textContent = `Nome:${organizador.nome}, Telefone:${organizador.telefone}, Email:${organizador.email}`;
        organizadorList.appendChild(listItem);
      });
    })
    .catch((error) => {
      alert("Erro ao obter organizadores" + error.message);
      console.error("Erro: ", error.message);
    });
}


function getAllOrganizadoresTable() {
  fetch("http://10.89.240.14:5000/api/v1/organizador", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    // then é usado para tratar respostas
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return response.json().then((err) => {
        throw new Error(err.error);
      });
    })
    .then((data) => {
      const organizadorList = document.getElementById("organizador-list-tabela");
      // Limpa a lista antes de adicionar novos itens
      organizadorList.innerHTML="";

      // Verifica se há usuarios retornados e os adiciona à tabela
      data.organizadores.forEach((organizador) => {
        // cria uma nova linha 
        const tr = document.createElement("tr");
        // cria células para nome, cpf e email

        const tdNome = document.createElement("td");
        tdNome.textContent = organizador.nome;
        tr.appendChild(tdNome); 

        const tdtelefone = document.createElement("td");
        tdtelefone.textContent = organizador.telefone;
        tr.appendChild(tdtelefone); 

        const tdEmail = document.createElement("td");
        tdEmail.textContent = organizador.email;
        tr.appendChild(tdEmail); 

        // Adiciona a linha à tabela
        organizadorList.appendChild(tr);
      });
    })
    .catch((error) => {
      alert("Erro ao obter usuarios: " + error.message)
    });
}

