let component = ReasonReact.statelessComponent("ConfigPage");

let make = _children => {
  ...component,
  render: self => <div> {ReasonReact.string("Config")} </div>,
};

let render = () =>
  ReactDOMServerRe.renderToString(ReasonReact.element(make([||])));
