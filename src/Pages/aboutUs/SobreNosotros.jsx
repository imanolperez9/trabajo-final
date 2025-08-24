
import { Layout } from "../../Components/Layout"
import "./sobreNosotros.css"

const SobreNosotros = () => {
  return (
    <Layout>
      <div className="princ">

        <h1>Sobre Nosotros</h1>

        <div className="section">
          <h2>De qué trata el proyecto</h2>
          <p>
            Este proyecto es una tienda en línea de ejemplo que utiliza la FakeStoreAPI para mostrar productos de distintas categorías. Permite navegar, buscar, actualizar y eliminar productos de manera interactiva, simulando un panel de administración real.
          </p>
        </div>

        <div className="section">
          <h2>A quién está dirigido</h2>
          <p>
            La página está pensada para desarrolladores y estudiantes que quieren aprender a consumir APIs, manejar estados en React, y practicar la creación de interfaces dinámicas y responsivas con componentes reutilizables.
          </p>
        </div>

        <div className="section">
          <h2>Tecnologías y enfoques usados</h2>
          <p>
            Se utilizaron: React para el front-end, hooks como useState y useEffect para manejar el estado y efectos secundarios, Fetch API para conectarse a FakeStoreAPI, y CSS moderno para el diseño responsivo. Además se aplica un enfoque de componentes reutilizables y manejo de errores básico.
          </p>
        </div>

      </div>
    </Layout>
  );
};

export { SobreNosotros };
