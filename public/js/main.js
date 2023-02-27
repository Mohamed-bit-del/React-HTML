"use strict";

var myInputVal;
var allItems = [];

var handleInputChange = function handleInputChange(e) {
    myInputVal = e.target.value;
};

var handleFormSubmit = function handleFormSubmit(e) {
    e.preventDefault();
    allItems.push(myInputVal);
    e.target.elements[0].value = "";
    render();
};

var obj = {
    name: 'mido',
    age: 20
};

function render() {
    var content = React.createElement(
        "div",
        null,
        React.createElement(
            "form",
            { onSubmit: handleFormSubmit },
            React.createElement("input", { type: "text", onChange: handleInputChange }),
            React.createElement("input", { type: "submit" })
        ),
        React.createElement(
            "ul",
            null,
            allItems.length ? allItems.map(function (item) {
                return React.createElement(
                    "li",
                    null,
                    " ",
                    item,
                    " "
                );
            }) : ''
        )
    );
    // ReactDOM.render(content, document.getElementById('app'))
}render();

var toggleButton = true;
var toggleText = function toggleText() {
    toggleButton = !toggleButton;
    renders();
};

function renders() {
    var toggle = React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { onClick: toggleText },
            "Toggle Text"
        ),
        toggleButton ? React.createElement(
            "p",
            null,
            "This is Text"
        ) : ''
    );

    ReactDOM.render(toggle, document.getElementById('app'));
}renders();
