import "./App.css";
import "../src/assets/js/main.js";

import ChatBot from "./components/ChatBot";
import { lazy, Suspense } from "react";

// Lazy load routes for better initial page load performance
const RoutesPage = lazy(() => import("./mainComponent/routeFile.js"));

function App() {
  return (
    <>
      <Suspense fallback={
        <div className="loading-screen">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      }>
        <RoutesPage />
      </Suspense>
      <ChatBot />
    </>
  );
}

export default App;
