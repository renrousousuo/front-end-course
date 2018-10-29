import { Box, Button, PopupMenu, Input } from "./component.jsx";
import ReactDOM from "react-dom";
import Pet from "@zswang/react-petchain";

let props = {
  bgColor: "日落黄",
  body: "灰太狼",
  bodyColor: "牙黄",
  eye: "小惊讶",
  eyeColors: "浅钴蓝",
  pattern: "奶牛",
  patternColor: "变异橙",
  bellyColor: "深灰",
  mouth: "小獠牙"
};

let myInput;
ReactDOM.render(
  <Box>
    <Pet {...props} />
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
