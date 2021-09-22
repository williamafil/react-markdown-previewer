import React, { useState, useEffect } from "react";
import "./App.css";
import DEFAULT_MARKDOWN from "./default-markdown";
import marked from "marked";
import parse from "html-react-parser";

marked.setOptions({
  breaks: true,
  gfk: true,
});

function App() {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    setMarkdown(DEFAULT_MARKDOWN);
  }, []);

  const onChangeHandler = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div className="App">
      <main>
        <h1 className="heading">
          React Markdown Previewer <span>by William Kang</span>
        </h1>
        <textarea id="editor" value={markdown} onChange={onChangeHandler} />
      </main>
      <div id="preview">{parse(marked(markdown))}</div>
    </div>
  );
}

export default App;
