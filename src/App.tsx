import { useState } from "react";
import "./App.css";
import StyledButton from "./components/Button";
import classNames from "classnames";

function App() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <StyledButton onClick={() => setOpen((prev) => !prev)}>
        {!open ? "Open" : "Close"}
      </StyledButton>
      <div className={classNames("desc", { open: open })}>Instruction</div>
    </div>
  );
}

export default App;
