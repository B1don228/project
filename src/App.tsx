import { useState } from "react";
import styles from "./App.module.scss";
import StyledButton from "./components/Button";
import classNames from "classnames/bind";

function App() {
  const [open, setOpen] = useState<boolean>(false);

  let cx = classNames.bind(styles);

  return (
    <div className={cx("menu", { open: open, close: !open })}>
      <button onClick={() => setOpen((prev) => !prev)}>
        {!open ? "Open" : "Close"}
      </button>
      <div className={cx("desc", { open: open, close: !open })}>
        Instruction
      </div>
    </div>
  );
}

export default App;
