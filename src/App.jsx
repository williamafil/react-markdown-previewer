import React, { useState, useEffect } from "react";
import marked from "marked";
import ReactHtmlParser from "react-html-parser";
import "./App.css";
import DEFAULT_MARKDOWN from "./default-markdown";

marked.setOptions({
  breaks: true,
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
      <div id="preview">{ReactHtmlParser(marked(markdown))}</div>
    </div>
  );
}

export default App;
