export default function App() {
  const sistemas = [
    {
      titulo: "PDV e Vendas",
      desc: "Controle de vendas, estoque e caixa para lojas e comércios."
    },
    {
      titulo: "Restaurantes",
      desc: "Gestão de pedidos, comandas e atendimento integrado."
    },
    {
      titulo: "Oficinas Mecânicas",
      desc: "Controle de ordens de serviço e histórico de clientes."
    },
    {
      titulo: "Hotéis e Pousadas",
      desc: "Reservas, check-in e controle de hospedagens."
    },
    {
      titulo: "Assistência Técnica",
      desc: "Gestão de equipamentos e ordens de manutenção."
    },
    {
      titulo: "Sistemas Personalizados",
      desc: "Soluções sob medida para o seu negócio."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b1220] to-[#0f172a] text-white">

      <header className="text-center py-24 px-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Sistemas inteligentes para gestão de negócios
        </h1>

        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
          Soluções em PDV, restaurantes, oficinas, hotéis e muito mais.
          Desenvolvidos para facilitar o dia a dia da sua empresa.
        </p>

        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          <a
            href="#sistemas"
            className="bg-blue-600 hover:bg-blue-500 transition px-6 py-3 rounded-xl"
          >
            Conhecer sistemas
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            className="border border-white/30 hover:border-white px-6 py-3 rounded-xl"
          >
            Ver no Facebook
          </a>
        </div>
      </header>

      <section id="sistemas" className="px-6 py-16">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Nossos Sistemas
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {sistemas.map((item, i) => (
            <div
              key={i}
              className="bg-white/5 hover:bg-white/10 transition p-6 rounded-2xl border border-white/10"
            >
              <h3 className="font-semibold text-lg">{item.titulo}</h3>
              <p className="text-sm text-gray-300 mt-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6">
            Por que escolher a Ainertec?
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-gray-300 text-sm">
            <p>✔ Sistemas leves e rápidos</p>
            <p>✔ Suporte e evolução contínua</p>
            <p>✔ Soluções para vários nichos</p>
          </div>
        </div>
      </section>

      <section className="py-20 text-center px-6">
        <h2 className="text-2xl font-semibold mb-4">
          Acompanhe nossos projetos
        </h2>

        <p className="text-gray-300 mb-6">
          Veja novidades, sistemas e atualizações nas redes sociais
        </p>

        <a
          href="https://www.facebook.com/ainertec.ainertec.9"
          target="_blank"
          className="bg-blue-500 hover:bg-blue-400 px-6 py-3 rounded-xl"
        >
          Acessar Facebook
        </a>
      </section>

      <footer className="text-center py-10 text-gray-400 text-sm border-t border-white/10">
        © {new Date().getFullYear()} Ainertec - Sistemas para gestão empresarial
      </footer>

    </div>
  );
}