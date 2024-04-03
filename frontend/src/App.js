import React from "react";
import { PostContextProvider } from "./context/PostsContext.tsx";
import HomePage from "./pages/HomePage.tsx";
import "./styles/App.css";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <PostContextProvider>
        <HomePage />
      </PostContextProvider>
    </div>
  );
}

export default App;
