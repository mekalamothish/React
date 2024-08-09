const heading = React.createElement("h1",{id:"heading", xyz:"abc", class:"text-block text-xl text-center"},"Hello World from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(heading);
/*
how to creat the this type structure
<div id="parent">
    <div id="child">
        <h1></h1>
    </div>
</div>
 */
// const parent  = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{},"Hello Mothis")));

/// to add more childrens h1, h2.we need to add in the array formate shown in below
const parent = React.createElement("div",{id:"parent", class:"flex text-center w-full"}
    ,React.createElement("div",{id:"child",class:"w-full text-center"},
    [React.createElement("h1",{class:"text-orange-500 text-lg"},"Hello Mothis")
    ,React.createElement("h2",{class:"text-blue-500 text-md"},"Hello Mothis"),
    React.createElement("h3",{class:"text-green-500 text-sm"},"Hello Mothis")]));
root.render(parent);
// above code is the core of react


// next we are going to use the morden React
//1.JSX
