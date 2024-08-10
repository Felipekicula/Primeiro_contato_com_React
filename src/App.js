import React, { useEffect, useState } from "react";
import './App.css';

function App() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'

    fetch(url)
      .then((r) => r.json())
      .then((json) => {
        setNutri(json);
      })
  }, []);

  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>

      {nutri.map((item) => {
        return (
          <article key={item.id} className="post">
            <strong>{item.titulo}</strong>
            <div className="image-container">
              <img src={item.capa} alt={item.titulo} className="post-image" />
            </div>
            <p>{item.subtitulo}</p>
            <span>{item.categoria}</span>
          </article>
        );
      })}
    </div>
  );
}

export default App;
