import React from "react";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Módulo 7: DESARROLLO FRONTEND CON REACTJS</h1>
      </header>
      <section className="welcome-section">
        <h2>Bienvenido</h2>
        <p>
          Este módulo se centra en el uso de <strong>React</strong>, incluyendo
          la creación de <strong>componentes</strong>, el manejo de{" "}
          <strong>hooks</strong>, y el uso de <strong>Redux</strong>.
        </p>
      </section>
      <section className="topics-section">
        <h3>Temas Cubiertos</h3>
        <div className="topics">
          <div className="topic-item">Componentes funcionales y de clase</div>
          <div className="topic-item">
            Uso de <strong>React hooks</strong> como <strong>useState</strong> y{" "}
            <strong>useEffect</strong>
          </div>
          <div className="topic-item">
            Creación de <strong>custom hooks</strong> como{" "}
            <strong>useForm</strong>
          </div>
          <div className="topic-item">
            Gestión de variables de estado con <strong>useState</strong>
          </div>
          <div className="topic-item">
            Gestión de estado global con <strong>Redux</strong>
          </div>
          <div className="topic-item">
            Integración de <strong>Redux</strong> con <strong>React</strong>
          </div>
          <div className="topic-item">
            Manejo de <strong>Formularios</strong> en React
          </div>
          <div className="topic-item">
            Publicando nuestra página con <strong>GitHub Pages</strong>
          </div>
        </div>
      </section>
      <section className="resources-section">
        <h3>Recursos Adicionales</h3>
        <p>
          Para profundizar en los temas cubiertos, consulta los siguientes
          recursos:
        </p>
      </section>
      <footer className="footer">
        <p>© 2024 Módulo 7. USIP.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
