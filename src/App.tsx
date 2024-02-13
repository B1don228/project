import { useState } from "react";
import styles from "./App.module.scss";
import StyledButton from "./components/Button";
import classNames from "classnames/bind";
import Graph from "./components/Graph";

function App() {
  const [open, setOpen] = useState<boolean>(false);
  const [star, setStar] = useState<boolean>(false);

  let cx = classNames.bind(styles);

  return (
    <div className={cx("menu", { open: open, close: !open })}>
      <button onClick={() => setOpen((prev) => !prev)}>
        {!open ? "Open" : "Close"}
      </button>
      <div className={cx("desc", { open: open, close: !open })}>
        Instruction
      </div>
      <div>
        <div
          className={cx("star", { active: star })}
          onClick={() => setStar((prev) => !prev)}
        >
          Star
        </div>
      </div>
      <Graph />
      <div>Hello</div>
    </div>
  );
}

export default App;
