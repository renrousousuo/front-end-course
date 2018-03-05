import { Box, Button, PopupMenu } from "./component.jsx";
import ReactDOM from "react-dom";

ReactDOM.render(
  <Box>
    <Button label="hello" onClick={() => alert(2)} />
    <PopupMenu
      items={[1, 2, 3, 4, 5]}
      defaultValue={1}
      onChange={item => {
        console.log(item);
      }}
    />
  </Box>,
  document.querySelector("#app")
);
