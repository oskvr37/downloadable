import { Download } from "./components";

function App() {
  return (
    <main>
      <div className="container">
        <div className="header">
          <img alt="Downloadable Logo" className="logo" src="./logo.svg"></img>
          <h1>Downloadable</h1>
          <p>
            Created by{" "}
            <a href="https://github.com/oskvr37" target="_blank">
              oskvr37
            </a>
          </p>
        </div>
        <Download />
        <p>Download will start automatically after pasting the URL</p>
      </div>
    </main>
  );
}

export default App;
