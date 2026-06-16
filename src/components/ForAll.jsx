import React from 'react';

function ForAll() {
  return (
    <section className="py-5 mt-5 backgroundRGB">
      <div className="container">
        <div className="row justify-content-center" id="handsComunication">
          <div className="col-6 d-flex align-items-center justify-content-center">
            <img src={`${process.env.PUBLIC_URL}/assets/ForAll.png`} alt="For All" className="img-fluid" />
          </div>
          <div className="col-lg-6 text-center">
            <h2 className="text-center section-title">
            Para todos!
            </h2>
            <p className="fs-5">
              O Verbalize foi desenvolvido com o propósito de tornar a comunicação entre pessoas verbais e não
              verbais
              mais
              simples,
              rápida e acessível. Embora seu principal foco seja a tradução de Libras em tempo real, a
              plataforma
              também pode ser
              utilizada
              como uma ferramenta de apoio para estudantes, profissionais e qualquer pessoa interessada em
              aprender e
              praticar a
              Língua Brasileira de Sinais.
              Nosso objetivo é eliminar barreiras de comunicação, permitindo que surdos e ouvintes interajam
              de forma
              natural e
              eficiente, sem a necessidade de
              intermediários. Para isso, o sistema conta com uma interface cuidadosamente projetada para ser
              intuitiva, limpa e
              prática, garantindo que usuários
              de diferentes níveis de familiaridade com tecnologia possam utilizá-lo com facilidade no dia a
              dia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ForAll;
