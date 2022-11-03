import { useContext } from "react";
import context from "./Context";

function Parent2() {
  console.log("From Parent2");
  const theme = useContext(context);

  return <div className={theme ? "dark" : "light"}>Parent2</div>;
}

export default Parent2;
