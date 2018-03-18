import { Box, Button, PopupMenu, Input } from "./component.jsx";
import ReactDOM from "react-dom";

let myInput;
ReactDOM.render(
  <Box>
    <Button label="hello" onClick={() => alert(myInput.value)} />
    <PopupMenu
      items={[1, 2, 3, 4, 5]}
      defaultValue={1}
      onChange={item => {
        console.log(item);
      }}
    />
    <Input defaultValue="123" ref={element => (myInput = element)} />
  </Box>,
  document.querySelector("#app")
);
