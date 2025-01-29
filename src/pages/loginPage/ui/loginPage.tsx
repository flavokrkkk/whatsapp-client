const LoginPage = () => {
  return (
    <form className=" flex flex-col space-y-4 rounded-xl w-[500px] p-5 py-7 bg-blue-300">
      <div className="flex justify-center items-center space-x-3">
        <h1 className="text-center text-white text-3xl font-bold">Войти</h1>
      </div>

      <section className=" flex flex-col space-y-4">
        <div className="flex flex-col space-y-2">
          <label className="font-light uppercase text-xs text-white">
            Email
          </label>
          <section className="space-y-1">
            <input name="email" placeholder="Email" />
          </section>
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-light uppercase text-xs text-white">
            Пароль
          </label>
          <section className="space-y-1">
            <input name="password" placeholder="Пароль" />
          </section>
        </div>
      </section>
    </form>
  );
};

export default LoginPage;
