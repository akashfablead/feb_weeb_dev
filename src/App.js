import "./App.css";
import "../src/assets/js/main.js";
import RoutesPage from "./mainComponent/routeFile.js";
import ChatBot from "./components/ChatBot";
function App() {
  return (
    <>
      <RoutesPage />
      <ChatBot />
    </>
  );
}

export default App;
