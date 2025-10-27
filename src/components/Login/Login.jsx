import "./login.css";

function Login() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-[#0b0d10] via-[#0e1113] to-[#1a1f25] overflow-hidden text-white font-medium">
      {/* Glow sutil no fundo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)]" />

      {/* Card glassmorphism */}
      <div className="relative z-10 flex flex-col justify-center items-center w-[500px] min-h-[60vh] p-10 border border-white/10 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl">
        {/* Logo */}
        <img className="mx-auto w-24 h-auto" src="/logo.png" alt="Logo" />

        {/* Título */}
        <h1 className="text-3xl font-semibold">
          Bem-vindo ao <span className="text-blue-500">Sistema</span>
        </h1>
        <p className="mt-2 text-gray-300 text-sm">
          Crie sua conta para continuar
        </p>

        {/* Formulário */}
        <form className="flex flex-col gap-4 mt-8 w-full max-w-sm">
          {/* Usuário */}
          <div className="flex flex-col text-left">
            <label className="text-sm text-gray-300 mb-1">Usuário</label>
            <input
              type="text"
              name="usuario"
              placeholder="Digite seu usuário"
              className="placeholder:text-sm p-2 rounded-md bg-[#0e111380] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Senha */}
          <div className="flex flex-col text-left">
            <label className="text-sm text-gray-300 mb-1">Senha</label>
            <input
              type="password"
              name="senha"
              placeholder="Digite sua senha"
              className="placeholder:text-sm p-2 rounded-md bg-[#0e111380] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <p>
            Não tenho conta?{" "}
            <span className="text-blue-500">
              <a href="">Cadastre-se</a>
            </span>
          </p>

          {/* Botão */}
          <button
            type="submit"
            className="mb-8 cursor-pointer bg-blue-800 hover:bg-blue-700 transition-colors rounded-md py-2 font-semibold shadow-md"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
