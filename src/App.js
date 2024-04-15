import { Footer, Header } from "antd/es/layout/layout";
import Home from "./pages/home";
import FooterComponent from "./components/footer";
import "./styles/style.scss";

function App() {
  return (
    <div className="App">
      <Header>Header</Header>
      <Home />
      <Footer>
        <FooterComponent />
      </Footer>
    </div>
  );
}

export default App;
