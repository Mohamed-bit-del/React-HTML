var myInputVal;
var allItems = [];

var handleInputChange = (e) => {
    myInputVal = e.target.value
}

var handleFormSubmit = (e) => {
    e.preventDefault();
    allItems.push(myInputVal);
    e.target.elements[0].value = "";
    render()
}

var obj = {
    name: 'mido',
    age: 20
};

function render () {
    let content = (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input type="text" onChange={handleInputChange} />
                <input type="submit" />
            </form>
            {/* {`${obj.name} ${obj.age}`} */}
    
            <ul>
                { allItems.length ? allItems.map((item) => <li> { item } </li> ) : '' }
            </ul>
            
        </div>
    );
    // ReactDOM.render(content, document.getElementById('app'))
} render();


let toggleButton = true;
var toggleText = () => {
    toggleButton = !toggleButton;
    renders()
}

function renders () {
    let toggle = (
        <div>
            <button onClick={toggleText}>Toggle Text</button>
            {toggleButton ? <p>This is Text</p> : ''}
        </div>
    );

    ReactDOM.render(toggle, document.getElementById('app'))
} renders()
