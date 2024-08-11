import React from "react";
import ReactDOM from "react-dom/client";

// React.CreateElemenmt ==> object ==> HtmlElement(render)
const heading = React.createElement("h1",{id:"heading",class:"text-red-500 text-2xl text-center"},"Namaste React");

// same line using the jsx 
//jsx -HTML-like or XHL-like syntax
const jsxheading = <h1 id="heading" className="text-3xl text-orange-500 text-center" tabIndex="1">Namste Mothish 🚀</h1>
//for multilple lines
const jsxheading1 = (<h1 id="heading" className="text-3xl text-orange-500 text-center" tabIndex="1">
    Namste Mothish 🚀
    </h1>)
const TitleComponent = () => {
    return <h1 id="heading" className="text-3xl text-red-500 text-center">Mothish you are learning</h1>;
};
const Heading = () => {
    return (<div className="flex mx-auto flex-col"> <TitleComponent/> <h1 className="text-3xl text-orange-500 text-center">React Functional Component😊</h1></div>)
};
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// root.render(HeadingComponent()); or
root.render(<Heading/>) // this is the way to render the function componet
//