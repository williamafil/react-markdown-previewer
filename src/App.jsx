import React, { useState } from "react";
import marked from "marked";
import ReactHtmlParser from "react-html-parser";
import "./App.css";

marked.setOptions({
  breaks: true,
});

function App() {
  const [markdown, setMarkdown] = useState("");

  const onChangeHandler = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div className="App">
      <textarea id="editor" value={markdown} onChange={onChangeHandler} />
      <div id="preview">{ReactHtmlParser(marked(markdown))}</div>
    </div>
  );
}

export default App;
