import "./Cadastro.css";
import api from "../../services/api.js";
import { useEffect, useState, useRef } from "react";

function Cadastro() {
  //to decalarando que a const users vai ser modificada td vez que a set user for
  const [users, setUsers] = useState([]);

  //aq eu to falando que vou utilizar como referencia os parametros dos inputs do html
  const inputEmail = useRef();
  const inputUser = useRef();
  const inputPassword = useRef();

  //função pra criar (POST)
  async function createUsers(e) {
    //atualizando a pagina toda vez q chamo a func
    e.preventDefault();
    await api.post("/cadastro", {
      //aq eu to passando o valor atual do input do html
      user: inputUser.current.value,
      email: inputEmail.current.value,
      password: inputPassword.current.value,
    });

    getUsers();
    //dando um alert pra avisar o usuário
    alert(`usuário ${inputUser.current.value} criado com sucesso`);
    //zerando os valores do formulario dps
    inputUser.current.value = "";
    inputEmail.current.value = "";
    inputPassword.current.value = "";
  }

  //função pra deletar pelo ID
  async function deleteUsers(id) {
    //to passando por interpolação o ID do usuario
    await api.delete(`/cadastro/${id}`);
    getUsers();

    alert(`Usuario com ID: ${id} deletado com sucesso`);
  }

  //função assincrona pra resgatar os dados da minha API
  async function getUsers() {
    //to dizendo que vou pegar meus usuarios da rota cadastro
    const usersFromApi = await api.get("/cadastro");
    //e to setando que vai ser do data onde vai sair o JSON
    setUsers(usersFromApi.data);
  }

  //aqui é o use effect pra renderizar a função e recarregar a página
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="relative flex flex-col min-h-screen items-center justify-center bg-linear-to-br from-[#0b0d10] via-[#0e1113] to-[#1a1f25] overflow-hidden text-white font-medium p-10 gap-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)]" />
      <div className="relative z-10 flex flex-col justify-center items-center w-[500px] min-h-[60vh] p-10 border border-white/10 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl">
        <img className="mx-auto w-24 h-auto" src="/logo.png" alt="Logo" />

        <h1 className="text-3xl font-semibold">
          Bem-vindo ao <span className="text-blue-500">Sistema</span>
        </h1>
        <p className="mt-2 text-gray-300 text-sm">
          Acesse sua conta para continuar
        </p>

        <form className="flex flex-col gap-4 mt-8 w-full max-w-sm">
          <div className="flex flex-col text-left">
            <label className="text-sm text-gray-300 mb-1">Usuário</label>
            <input
              type="text"
              name="usuario"
              ref={inputUser}
              placeholder="Digite seu usuário"
              className="placeholder:text-sm p-2 rounded-md bg-[#0e111380] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col text-left">
            <label className="text-sm text-gray-300 mb-1">Email</label>
            <input
              type="email"
              name="email"
              ref={inputEmail}
              placeholder="Digite seu email"
              className="placeholder:text-sm p-2 rounded-md bg-[#0e111380] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col text-left">
            <label className="text-sm text-gray-300 mb-1">Senha</label>
            <input
              type="password"
              name="senha"
              ref={inputPassword}
              placeholder="Digite sua senha"
              className="placeholder:text-sm p-2 rounded-md bg-[#0e111380] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <p>
            Já tenho uma conta{" "}
            <span className="text-blue-500">
              <a href="">Logar</a>
            </span>
          </p>

          <button
            type="submit"
            onClick={createUsers}
            className="mb-8 cursor-pointer bg-blue-800 hover:bg-blue-700 transition-colors rounded-md py-2 font-semibold shadow-md"
          >
            Cadastrar
          </button>
        </form>
      </div>

      {/* aq é o map onde vai aparecer os usuários cadastrados */}
      <div className="relative z-10 flex flex-wrap justify-center gap-6 w-full max-w-6xl">
        {users.map((user) => (
          <div
            key={user.id}
            className="w-[220px] bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-lg transition-transform hover:scale-105 hover:bg-white/20"
          >
            <div className="flex flex-col gap-1 text-sm">
              <p>
                <span className="text-gray-400">Usuário:</span> {user.user}
              </p>
              <p>
                <span className="text-gray-400">Email:</span> {user.email}
              </p>
              <p>
                <span className="text-gray-400">Senha:</span> {user.password}
              </p>
            </div>
            {/* aqui quando eu tento passar parametro pra uma função no onClick no react, eu preciso deixar como arrow function antes () => */}
            <button
              onClick={() => deleteUsers(user.id)}
              className="mt-3 cursor-pointer bg-red-700 hover:bg-red-600 transition-colors rounded-md py-1 px-3 text-sm font-semibold shadow-md"
            >
              🗑️ Deletar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cadastro;
