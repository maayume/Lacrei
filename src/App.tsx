import Header from "./components/Header";
import "./styles/global.css";

import Routes from "./Routes";

export default function App(){
  return(
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}