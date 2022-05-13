import React, { useEffect, useState } from "react";

function App() {

  const handleAdmin = () => {
    const data = window.prompt("Digite sua credencial!");
    if(data == ""){
      window.alert("Preencha a credencial!")
      handleAdmin();
    }else if(data != null){

    }
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center items-start">
        <img className="rounded-lg" src="https://lh3.googleusercontent.com/pw/AM-JKLVqIiF-4eeYSEbslC1l8nqykwz44A7YyIzFgMWSy8PwjThVSbpwj7LylUpGMDPR1V4fsqQKnjbTaDLdu0RTFKKB3ggEDloFQaRnhVdXmw-1Jgfq_v9c0DGXKA_C-ljolP7HqHpt8MsSpYTPC5owhxt0=w990-h345-no" />
      </div>
      <div className="flex justify-center mt-2 gap-4 w-6/6 text-center items-center bg-white/10 p-4 mr-0 sm:mr-64 sm:w-3/6">
        <img className="w-1/6" src="https://lh3.googleusercontent.com/pw/AM-JKLWzWIbzscstLG2OHo83psMrwCfJBG0dgEOmy1YVqYB1tke6bv075G3prXAYDAOUGgDNIYc9Ogh9erXmrRCzVTwexwTtONbshIntLqN5QHX9nkMkyYyOYlzdRnwiBYT7upNQi6YFvIAWynBbZ76Lcg0_=s579-no" />
        <p className="text-white text-sm">Ainertec - Uma solução simples para seus problemas é com a gente! Venha fazer parte do time Ainertec.</p>
      </div>
      <div className="flex justify-center mt-2 gap-4 w-6/6 text-center items-center bg-white/10 p-4 ml-0 sm:ml-64 sm:w-3/6">
        <img className="w-1/6" src="https://lh3.googleusercontent.com/pw/AM-JKLWbvUDgjC6whJ7FzotHLTLZM_VR0R_fpePHu9X_4XTr2JvzsiE3yVlKz14L2glK-gqpKGmwp8vKbTGhfVI9Zkuy1Ow0EtyMhmXYhP540VTovHqCYEZ2ilBUNYdIP6dVjkwzTi1-ZhACueUxzLfTcM2Y=w434-h472-no" />
        <p className="text-white text-sm">Ainertec é uma micro empresa fundada pelo desenvolvedor Aldair Klein e seu sócio Cleiton Baloneker.</p>
      </div>
      <div className="flex justify-center mt-2 gap-4 w-6/6 text-center items-center bg-white/10 p-4 mr-0 sm:mr-64 sm:w-3/6">
        <img className="w-2/6" src="https://lh3.googleusercontent.com/pw/AM-JKLXYwxnObCSwQXlTqzp-MjhmIXB0VWXfNP7xWlGTTn-n2zzDo3BGsURNccaW-8ClSbBbdf2SWY1k7eaGnKoETWIXkWiHOACrIhRa_5z1Vt_aSq8W8Y2lKAqCwtoIDDLuJJCrYJYCFcKzg-XV9fwFz4WJ=w1125-h417-no" />
        <p className="text-white text-sm">
          Histórico dos primeiros sistemas da empresa.
          <br/>
          <a className="text-blue-300" href="https://github.com/Ainertec/softwaresextras">Link para histórico</a>
        </p>
      </div>
      <div className="flex justify-center mt-2 gap-4 w-6/6 text-center items-center bg-white/10 p-4 mr-0 sm:mr-64 sm:w-3/6">
        <img className="w-1/4" src="https://lh3.googleusercontent.com/pw/AM-JKLX1HLQUxNEN7lw1qByTpZvbXsjPR9Agzlkqf1NcbZNDCPoDL86BR3GYN4Htk8Ws--wYHFlfvhLK3RoYMdOE8qg9VNhFMBdbLPzVZSQjLmYyfAO-CsGwMo03D7CFPKYpphdobnFRSygC7JPvrmP-20VJ=w268-h150-no" />
        <p className="text-white text-sm">
          Conheça as aplicações apresentadas em nosso canal do Facebook.
          <br/>
          <a className="text-blue-300" href="https://www.facebook.com/ainertec.ainertec.9">Link para página</a>
        </p>
      </div>
      <div className="flex justify-center mt-2 gap-4 w-6/6 text-center items-center bg-white/10 p-4 ml-0 sm:ml-64 sm:w-3/6">
        <img className="w-1/6" src="https://lh3.googleusercontent.com/pw/AM-JKLW7OMh2ddHZCeJMR_YSor5FbJqiMlEBoyLGkgv0nQD4SSPiTpCllytepe4D_WA0haVfYA6uixDM_IsDikykUcFC5t8hhdMyK1vd8me9jXkAYDuTXXJKTAZLq3EJ08MGlQAj9zdFILkL9FVMOEr5Bs5o=w230-h348-no" />
        <p className="text-white text-sm">
          Conheça um pouco mais sobre o fundador: 
          <br/>
          <a className="text-blue-300" href="https://br.linkedin.com/in/aldair-camargo-duarte-klein-a2bb751a4">Aldair Klein</a>
        </p>
        <p className="text-white text-sm">
          Conheça um pouco mais sobre o fundador:
          <br/>
          <a className="text-blue-300" href="https://br.linkedin.com/in/cleiton-baloneker-a759a0194?trk=public_profile_browsemap&original_referer=https%3A%2F%2Fwww.google.com%2F">Cleiton Baloneker</a>
        </p>
        <img className="w-1/6" src="https://lh3.googleusercontent.com/pw/AM-JKLWpVqHS69C9Ac6zZvajN2D6-lffTN7QR2v9-_oRptJCUpdVQ8L9mrlXNJpfRELlBwKsAultHdd9aNxEODT9-_3rfjnOxqFwXGmZWXXpOxyXqrcMbYuaOdm0za2zQbakyTrgTe1LBmhoAJgCXu3O4tWp=w417-h579-no" />
      </div>
      <div className="flex justify-center mt-2 gap-4 w-6/6 text-center items-center bg-white/10 p-4 mr-0 sm:mr-64 sm:w-3/6">
        <img className="w-1/6" src="https://lh3.googleusercontent.com/pw/AM-JKLWzWIbzscstLG2OHo83psMrwCfJBG0dgEOmy1YVqYB1tke6bv075G3prXAYDAOUGgDNIYc9Ogh9erXmrRCzVTwexwTtONbshIntLqN5QHX9nkMkyYyOYlzdRnwiBYT7upNQi6YFvIAWynBbZ76Lcg0_=s579-no" />
        <p className="text-white text-sm">A empresa Ainertec nasceu no mês de Julho de 2019 a partir da dedicação e companheirismo dos estudantes, Aldair Camargo Duarte Klein e Cleiton da Silva Baloneker, que tiveram como objetivo criar a empresa para demonstração de suas qualidades e dedicações na área de desenvolvimento. Sendo ambos estudantes de sistemas de informação deram prosseguimento com o projeto com objetivo de se tornar um bom portfólio. Até o este dado momento a empresa tem em sua base o desenvolvimento de alguns sistemas, tanto para desktop como para web, e seus desenvolvedores tendo como objetivo o crescimento dá empresa e de suas qualidades buscam o aperfeiçoamento e capacidade necessária para o desenvolvimento de novos sistemas.</p>
      </div>
      <div className="flex justify-center mt-2 gap-4 w-6/6 text-center items-center bg-white/10 p-4 ml-0 sm:ml-64 sm:w-3/6">
        <img className="w-1/6" src="https://lh3.googleusercontent.com/pw/AM-JKLWzWIbzscstLG2OHo83psMrwCfJBG0dgEOmy1YVqYB1tke6bv075G3prXAYDAOUGgDNIYc9Ogh9erXmrRCzVTwexwTtONbshIntLqN5QHX9nkMkyYyOYlzdRnwiBYT7upNQi6YFvIAWynBbZ76Lcg0_=s579-no" />
        <p className="text-white text-sm">
          Precisa de ajuda quer compartilhar alguma opnião? Acesse o blog de suporte da empresa.
          <br/>
          <a className="text-blue-300" href="https://suporteainertec.blogspot.com/">Acesse aqui!</a>
        </p>
      </div>
      <div className="flex justify-center mt-2 gap-4 w-6/6 text-center items-center bg-white/10 p-4 mr-0 sm:mr-64 sm:w-3/6">
        <img className="w-1/6" src="https://lh3.googleusercontent.com/pw/AM-JKLWzWIbzscstLG2OHo83psMrwCfJBG0dgEOmy1YVqYB1tke6bv075G3prXAYDAOUGgDNIYc9Ogh9erXmrRCzVTwexwTtONbshIntLqN5QHX9nkMkyYyOYlzdRnwiBYT7upNQi6YFvIAWynBbZ76Lcg0_=s579-no" />
        <p className="text-white text-sm">
          Área do adminitrador, por trás dessa página que a mágica acontece.
          <br/>
          <a className="text-blue-300" href="#" onClick={() => {handleAdmin()}}>Área do administrador</a>
        </p>
      </div>
      <div className="flex justify-center mt-4 gap-4 w-6/6 text-center items-center bg-white/10 p-4 ml-0 sm:ml-64 sm:w-3/6">
        <img className="w-1/4" src="https://lh3.googleusercontent.com/pw/AM-JKLUEka5DgpdUfrCK0ZWMdZK4irMSSq5MLKazPqwS88JqaDIfjVNpCjM8GfOFCe57sGxtTzZQpayPb-VhcMMXhcn26U8GcS5rgiH_eAwFUL08u_MLODbV8e67iIYoKmRG0Y1uV5LpXk7E3fo69w0Mw4T_=w1020-h355-no" />
        <img className="w-1/4" src="https://lh3.googleusercontent.com/pw/AM-JKLVPv-MzIuLBVoszBFpfUvqhNB09KEFsi_1QW12_6bnRhlxUtKiFAb7vhBghit2qkTCT5LKUkT-JuqqiC6O1EpXJUk4MZLE-MimzJlvaOAI4lV65mPHOWuuU5lquq3WYzbqH5X0LeP1fNezGVSab3UjO=w1020-h355-no" />
        <img className="w-1/4" src="https://lh3.googleusercontent.com/pw/AM-JKLXItG-3W6qIGVfsJm79V8yxEkbd97prebb04z4ninAT_xfx7pvBlNnliM0oHiJNTkbbRjf-ktJrz5fCC0lR9P-NeKi8_jh5Q8gT4ArKNtFNVpP1wfUdOS_55MCudlpCcvXDAhS8e8kxHqLj8Fm1CE3j=w1020-h355-no" />
        <p className="text-white text-sm">Ferramentas utilizadas</p>
      </div>
      <div className="flex justify-center mt-4 gap-4 w-6/6 text-center items-center bg-white/10 p-4 ml-0 sm:ml-64 sm:w-3/6">
        <img className="w-1/4" src="https://lh3.googleusercontent.com/pw/AM-JKLU85eUiVeIGLyfuN9aS2DilKQW4UzTrv6xlY--H_atWe1DLZ4T7zqvE6icfP4uE0dxXsyhEFlnnf3N_BkX8KR_vkRy9MLdFSHVXoFg5DwswbQQPvo_1AlqcxbwMrri5s8fkPtHm8EYiqwrzmB4gislL=w1366-h475-no" />
        <p className="text-white text-sm">Apoios e parcerias</p>
      </div>
    </div>
  );
}

export default App;
