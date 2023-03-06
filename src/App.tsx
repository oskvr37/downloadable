function App() {
  return (
    <main>
      <div className="container">
        <div className="header">
          <h1>Downloadable</h1>
          <p>
            Created by{" "}
            <a href="https://github.com/oskvr37" target="_blank">
              oskvr37
            </a>
          </p>
        </div>
        <input
          id="url"
          type="text"
          placeholder="https://streamable.com/abcdef"
        ></input>
        <p>Download will start automatically after pasting in the url</p>
      </div>
    </main>
  );
}

export default App;
