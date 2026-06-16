import React from 'react';

function Footer() {
  const produtores = [
    "Matheus Ransati",
    "Vitor Ventania",
    "Paulo Rinaldi",
    "Vitor Luis",
    "Enzo Dias",
    "Kenzo Yamamoto",
    "Felipe Giusti",
  ];

  return (
    <footer
      className=" py-5 mt-5 backgroundRGB"
    >
      <div className="container">
        <div className="row text-center text-md-start">
          
          <div className="col-md-6 mb-4">
            <h2 className="fw-bold">VERBALIZE</h2>
            <p className="mb-0">
              Sistema para comunicação entre pessoas surdas e ouvintes,
              promovendo inclusão e acessibilidade através da tecnologia.
            </p>
          </div>

          <div className="col-md-6">
            <h5 className="fw-bold mb-3">Produtores</h5>

            <ul className="list-unstyled row">
              {produtores.map((nome, index) => (
                <li key={index} className="col-6 mb-2">
                  {nome}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="opacity-50 my-4" />

        <div className="text-center">
          <small>
            ©  Projeto acadêmico • 2026
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
