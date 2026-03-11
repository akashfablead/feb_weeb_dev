import "./App.css";
import "../src/assets/js/main.js";

import ChatBot from "./components/ChatBot";
import { lazy } from "react";
const RoutesPage = lazy(() => import("./mainComponent/routeFile.js"));
function App() {
  return (
    <>
      <RoutesPage />
      <ChatBot />
    </>
  );
}

export default App;
