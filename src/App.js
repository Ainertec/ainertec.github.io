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
      desc: "Soluções desenvolvidas sob medida para sua empresa."
    }
  ];

  return (
    <div className="min-h-screen bg-[#050B1B] text-white">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur bg-[#050B1B]/90 border-b border-cyan-500/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <div className="flex items-center gap-3">
            <img
              src="https://lh3.googleusercontent.com/pw/AP1GczNdziV7sWkt7AS4fM9Fl5BfajdrxdiNW9-Y0dwD2BChy_n8poCVi9Lcz7ciuim6hsxgl-7KtIGixTYyHCwHUcf0G1dMsjchmbdLXL1rmqGzSN67t9immFb993-Z9bw2xRVtA6suDUM9fey5_E1fXfEo=w773-h773-s-no-gm"
              alt="Ainertec"
              className="h-12"
            />

            <div>
              <h2 className="font-bold text-lg">
                Ainertec
              </h2>

              <p className="text-xs text-gray-400">
                Tecnologia • Inovação
              </p>
            </div>
          </div>

          <div className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#sistemas" className="hover:text-cyan-400">
              Sistemas
            </a>

            <a href="#sobre" className="hover:text-cyan-400">
              Sobre
            </a>

            <a href="#contato" className="hover:text-cyan-400">
              Contato
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-24">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>

              <span className="inline-block bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-4 py-2 rounded-full text-sm mb-6">
                Soluções Inteligentes para Empresas
              </span>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Tecnologia para impulsionar seu negócio
              </h1>

              <p className="text-gray-300 mt-6 text-lg leading-relaxed">
                Sistemas modernos para gestão empresarial,
                automação de processos e controle operacional.
                Tudo desenvolvido para aumentar a produtividade
                e facilitar a administração do seu negócio.
              </p>

              <div className="mt-8 flex gap-4 flex-wrap">

                <a
                  href="#sistemas"
                  className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-3 rounded-xl transition"
                >
                  Conhecer Sistemas
                </a>

                <a
                  href="https://www.facebook.com/ainertec.ainertec.9"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-cyan-400 text-cyan-300 px-8 py-3 rounded-xl hover:bg-cyan-500/10 transition"
                >
                  Facebook
                </a>

              </div>

            </div>

            <div className="flex justify-center">
              <img
                src="https://lh3.googleusercontent.com/pw/AP1GczPqg0msE6etTZuTEd4c8crjZ7VGPMPuRq5e3WoBZbtosbVB8xAj-HurVcsXbb-jS5YC6ggySnZT90vh9mwGmQ-Ffh8cQAzjeTqXY2SkbN4X8IQqpFzkch5XD5DsizLA10cL5n4PwRl4W5EdHOoj5zLM=w1600-h480-s-no-gm"
                alt="Ainertec"
                className="w-full max-w-md drop-shadow-[0_0_40px_rgba(34,211,238,0.3)]"
              />
            </div>

          </div>

        </div>
      </header>

      {/* SISTEMAS */}
      <section
        id="sistemas"
        className="py-24 px-6"
      >
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">

            <h2 className="text-4xl font-bold">
              Nossos Sistemas
            </h2>

            <p className="text-gray-400 mt-4">
              Soluções desenvolvidas para diferentes segmentos
              empresariais.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {sistemas.map((item, index) => (
              <div
                key={index}
                className="
                  bg-slate-900/50
                  border
                  border-cyan-500/10
                  rounded-2xl
                  p-6
                  hover:border-cyan-400
                  hover:translate-y-[-5px]
                  transition
                "
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-xl mb-4">
                  ⚙
                </div>

                <h3 className="text-xl font-semibold text-cyan-300">
                  {item.titulo}
                </h3>

                <p className="text-gray-300 mt-3">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-20 px-6 bg-black/20">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-14">
            Por que escolher a Ainertec?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-slate-900/40 p-8 rounded-2xl border border-white/5">
              <h3 className="text-cyan-400 text-xl font-semibold mb-4">
                Performance
              </h3>

              <p className="text-gray-300">
                Sistemas rápidos, leves e preparados para o crescimento da sua empresa.
              </p>
            </div>

            <div className="bg-slate-900/40 p-8 rounded-2xl border border-white/5">
              <h3 className="text-cyan-400 text-xl font-semibold mb-4">
                Suporte
              </h3>

              <p className="text-gray-300">
                Atendimento próximo e evolução constante das soluções.
              </p>
            </div>

            <div className="bg-slate-900/40 p-8 rounded-2xl border border-white/5">
              <h3 className="text-cyan-400 text-xl font-semibold mb-4">
                Personalização
              </h3>

              <p className="text-gray-300">
                Sistemas adaptados às necessidades específicas do seu negócio.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* SOBRE */}
      <section
        id="sobre"
        className="py-24 px-6"
      >
        <div className="max-w-5xl mx-auto">

          <div className="bg-slate-900/40 border border-cyan-500/10 rounded-3xl p-10">

            <h2 className="text-4xl font-bold text-center text-cyan-400 mb-8">
              Sobre a Ainertec
            </h2>

            <p className="text-center text-gray-300 leading-8">
              A Ainertec desenvolve sistemas para automação e gestão empresarial,
              ajudando empresas a organizar processos, aumentar produtividade e
              melhorar a tomada de decisões. Nossa missão é entregar tecnologia
              de forma simples, eficiente e acessível.
            </p>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contato"
        className="py-24 px-6"
      >

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-6">
            Vamos transformar sua gestão?
          </h2>

          <p className="text-gray-300 text-lg mb-10">
            Entre em contato e descubra como nossos sistemas podem ajudar sua empresa.
          </p>

          <a
            href="https://www.facebook.com/ainertec.ainertec.9"
            target="_blank"
            rel="noreferrer"
            className="
              inline-block
              bg-cyan-500
              hover:bg-cyan-400
              text-black
              font-bold
              px-10
              py-4
              rounded-xl
              transition
            "
          >
            Falar com a Ainertec
          </a>

        </div>

      </section>

      {/* FUNDADORES */}
      <section className="py-24 px-6 bg-black/30 border-t border-white/10">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">
            Fundadores da Ainertec
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {/* FUNDADOR 1 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6 hover:border-cyan-500 transition">

              <img
                src="https://lh3.googleusercontent.com/pw/AM-JKLW7OMh2ddHZCeJMR_YSor5FbJqiMlEBoyLGkgv0nQD4SSPiTpCllytepe4D_WA0haVfYA6uixDM_IsDikykUcFC5t8hhdMyK1vd8me9jXkAYDuTXXJKTAZLq3EJ08MGlQAj9zdFILkL9FVMOEr5Bs5o=w230-h348-no"
                alt="Aldair Klein"
                className="w-28 h-28 object-cover rounded-xl border border-cyan-500/30"
              />

              <div className="text-center sm:text-left">
                <h3 className="text-xl font-semibold text-white">
                  Aldair Klein
                </h3>

                <p className="text-gray-300 text-sm mt-2">
                  Fundador da Ainertec, responsável pela gestão, desenvolvimento e visão estratégica dos sistemas.
                </p>

                <a
                  href="https://br.linkedin.com/in/aldair-camargo-duarte-klein-a2bb751a4"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-400 text-sm mt-3 inline-block hover:underline"
                >
                  Ver perfil no LinkedIn
                </a>
              </div>

            </div>

            {/* FUNDADOR 2 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6 hover:border-cyan-500 transition">

              <img
                src="https://lh3.googleusercontent.com/pw/AM-JKLWpVqHS69C9Ac6zZvajN2D6-lffTN7QR2v9-_oRptJCUpdVQ8L9mrlXNJpfRELlBwKsAultHdd9aNxEODT9-_3rfjnOxqFwXGmZWXXpOxyXqrcMbYuaOdm0za2zQbakyTrgTe1LBmhoAJgCXu3O4tWp=w417-h579-no"
                alt="Cleiton Baloneker"
                className="w-28 h-28 object-cover rounded-xl border border-cyan-500/30"
              />

              <div className="text-center sm:text-left">
                <h3 className="text-xl font-semibold text-white">
                  Cleiton Baloneker
                </h3>

                <p className="text-gray-300 text-sm mt-2">
                  Fundador da Ainertec, atuando na estruturação e evolução dos sistemas.
                </p>

                <a
                  href="https://br.linkedin.com/in/cleiton-baloneker-a759a0194"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-400 text-sm mt-3 inline-block hover:underline"
                >
                  Ver perfil no LinkedIn
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8">

        <div className="max-w-7xl mx-auto px-6 text-center text-gray-500">

          <img
            src="https://lh3.googleusercontent.com/pw/AP1GczPqg0msE6etTZuTEd4c8crjZ7VGPMPuRq5e3WoBZbtosbVB8xAj-HurVcsXbb-jS5YC6ggySnZT90vh9mwGmQ-Ffh8cQAzjeTqXY2SkbN4X8IQqpFzkch5XD5DsizLA10cL5n4PwRl4W5EdHOoj5zLM=w1600-h480-s-no-gm"
            alt="Ainertec"
            className="h-14 mx-auto mb-4 opacity-80"
          />

          <p>
            © 2019 Ainertec — Tecnologia • Inovação
          </p>

        </div>

      </footer>

    </div>
  );
}