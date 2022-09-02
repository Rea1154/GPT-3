import "./App.css";
import {
  Nav,
  Header,
  Sponsored,
  WhatIs,
  Case,
  OpenAi,
  Register,
  EarlyAccess,
  Footer,
  Blog,
} from "./sections";

function App() {
  return (
    <div className="App">
      <div className="gradient-bg">
        <Nav />
        <Header />
      </div>
      <Sponsored />
      <WhatIs />
      <Case />
      <OpenAi />
      <Register />
      <Blog />
      <EarlyAccess />
      <Footer />
    </div>
  );
}

export default App;
