import React, { useState } from "react";
import "./App.css";
import Menu from "./composants/menu";

function App() {
  const [bgClass, setBgClass] = useState("bg-pas-vegan");
  const [regime, setRegime] = useState("2");
  const [formule, setFormule] = useState("1");
  const [facturation, setFacturation] = useState("0");
  // définir les fonctions callback
  const handleRegimeClick = (index: any) => {
    const bg = ["bg-vegan", "bg-viandard-sensible", "bg-pas-vegan"]
    setBgClass(bg[index]);
    setRegime(index);
  };

  const handleFormuleClick = (index: any) => {
    setFormule(index);
  };

  const handleFactureClick = (index: any) => {
    setFacturation(index);
  };
  return (
    <div className="App">
      <header className={bgClass}></header>
      <nav>
        <Menu
          className={`regime ${bgClass}`}
          data={["Vegan", "Viendard sensible", "Véquoi?"]}
          onClick={handleRegimeClick} // injection de la callback dans le menu
          selected={regime}
        />
        <Menu
          className={`formule ${bgClass}`}
          data={["Petite faim", "Grosse dalle"]}
          onClick={handleFormuleClick}
          selected={formule}
        />
      </nav>
      <section className={bgClass}></section>
      <footer>
        <Menu
          className={`facturation ${bgClass}`}
          data={["Abonnés", "Pompiers et militaires", "Autres"]}
          onClick={handleFactureClick}
          selected={facturation}
        />
        <Menu className={`validation ${bgClass}`} data={["Commander"]} />
      </footer>
    </div>
  );
}

export default App;
