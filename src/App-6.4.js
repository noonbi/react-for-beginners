import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello() {
  //select...
  useEffect(function () {
    console.log("hi :) ");
    return function () {
      console.log("bye :( ");
    };
  });
  //select.
  useEffect(() => {
    console.log("cteated :> ");
    return () => console.log("destroyed :< ");
  });
  return <h1>Hello</h1>;
}

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);
  const onClickShow = () => setShowing((prev) => !prev);
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");
  useEffect(() => {
    console.log("Call the API...");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("Search for", keyword);
    }
  }, [keyword]);
  return (
    <div>
      {showing ? <Hello /> : null}
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>Click me</button>
      <button onClick={onClickShow}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
