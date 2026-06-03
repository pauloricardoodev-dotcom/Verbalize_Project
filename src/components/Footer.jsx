import React from 'react';

function Footer() {
  return (
    <footer className="py-4">
      <div className="container text-center">
        <h4>VERBALIZE</h4>
        <p className="mb-0">
          Sistema para comunicação entre pessoas surdas e ouvintes.
        </p>
        <h3>produtores: </h3>
        <ul className="d-flex justify-content-between">
          <li>Matheus Ransati</li>
          <li>Vitor Ventania</li>
          <li>Paulo Rinaldi</li>
          <li>Vitor</li>
          <li>Enzo Dias</li>
        </ul>
        <small>
          Projeto acadêmico • 2026
        </small>
      </div>
    </footer>
  );
}

export default Footer;
