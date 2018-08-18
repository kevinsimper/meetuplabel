let component = ReasonReact.statelessComponent("App");

let make = _children => {
  ...component,
  render: self => <div> {ReasonReact.string("Hello from ReasonReact")} </div>,
};

let output = () =>
  ReactDOMServerRe.renderToString(ReasonReact.element(make([||])));
