import { useState } from "react";
import "./input.css";
import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";

function App() {
  const [archived, setArchived] = useState(false);
  const fn1 = (param) => {
    setArchived(param);
  };

  return (
    <div className="container">
      <Header archived={archived} fn1={fn1} />
      <div className="container-view">
        <Card archived={archived} />
      </div>
    </div>
  );
}

export default App;
