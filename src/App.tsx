import React from "react";
import "./App.css";
import Menu from "./composants/menu";

function App() {
  // définir les fonctions callback
  const handleRegimeClick = (index: number) => {
    console.log(index);
  };

  const handleFormuleClick = (index: number) => {
    console.log(index);
  };

  const handleFactureClick = (index: number) => {
    console.log(index);
  };
  return (
    <div className="App">
      <header></header>
      <nav>
        <Menu
          data={["Vegan", "Viendard sensible", "Véquoi?"]}
          onClick={handleRegimeClick} // injection de la callback dans le menu
        />
        <Menu
          data={["Petite faim", "Grosse dalle"]}
          onClick={handleFormuleClick}
        />
      </nav>
      <section></section>
      <footer>
        <Menu
          data={["Abonnés", "Pompiers et militaires", "Autres"]}
          onClick={handleFactureClick}
        />
        <Menu data={["Commander"]} />
      </footer>
    </div>
  );
}

export default App;
