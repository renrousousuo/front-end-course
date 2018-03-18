function Welcome(props) {
  return (
    <button name={props.name}>
      {props.children}
      <label />
    </button>
  );
}

ReactDOM.render(
  <Welcome>hello world!</Welcome>,
  document.querySelector("#app")
);
