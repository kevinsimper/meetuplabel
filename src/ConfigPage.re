let component = ReasonReact.statelessComponent("ConfigPage");

let make = _children => {
  ...component,
  render: self =>
    <div> <Layout> <h2> {ReasonReact.string("Config")} </h2> </Layout> </div>,
};

let render = () =>
  ReactDOMServerRe.renderToString(ReasonReact.element(make([||])));
