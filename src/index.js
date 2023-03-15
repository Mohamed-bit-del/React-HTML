class App extends React.Component {

    constructor () {
        super();
        this.state = {
            products: [],
            items: ''
        }

        this.changeValue = (e) => {
            this.setState({
                items: e.target.value
            })
        }

        this.submitForm = (e) => {
            e.preventDefault();
            let products = [...this.state.products, {
                id: Math.random(),
                name: this.state.items
            }]
            this.setState({
                products,
                items: ''
            })
        }

        this.deleteITem = (id) => {
            let products = [...this.state.products]
            let newProduct = products.filter(product => product.id != id)
            this.setState({
                products: newProduct
            })
        }

    }

    render () {
        return (
            <div>
                <Header />
                <AddItem
                    changeInput={this.changeValue}
                    saveData={this.submitForm}
                    clearItem={this.state.items}
                />
                <ListITem products={this.state.products} removeItem={this.deleteITem} />
            </div>
        )
    }
}

class Header extends React.Component {
    render () {
        return <div> ToDo List </div>
    }
}
class ListITem extends React.Component {
    render () {
        return (
            <div>
                {this.props.products.map(product => (
                    <Item
                        id={product.id}
                        item={product.name}
                        removeItem={this.props.removeItem}
                    /> 
                ))}
            </div>
        )
    }
}
class Item extends React.Component {
    render () {
        return (
            <ul>
                <li>
                    <h4>{this.props.item}</h4>
                    <button onClick={() => this.props.removeItem(this.props.id)}>&times;</button>
                </li>
            </ul>
        )
    }
}

class AddItem extends React.Component {
    render () {
        return (
            <form onSubmit={this.props.saveData}>
                <input type="text" onChange={this.props.changeInput} value={this.props.clearItem} />
                <input type="submit" />
            </form>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))


// class App extends React.Component {

//     constructor () {
//         super();
//         this.state = {
//             products: [],
//             item: '',
//         }

//         this.changeInputVal = this.changeInputVal.bind(this)

//         this.submitForm = (e) => {
//             e.preventDefault();
//             let products = [...this.state.products, {
//                 id: Math.random(),
//                 name: this.state.item
//             }]
//             this.setState({
//                 products,
//                 item: ''
//             })
//         }

//         this.deleteItem = (id) => {
//             let products = [...this.state.products];
//             let newProducts = products.filter(product => product.id != id)
//             this.setState({
//                 products: newProducts
//             })
//         }
//     }

//     changeInputVal (e) {
//         this.setState({
//             item: e.target.value
//         })
//     }

//     render () {
//         console.log(this.state.products);
//         return (
//             <div className="app">
//                 <Header />
//                 <ListItem products={this.state.products} removeItem={this.deleteItem} />
//                 <AddITem 
//                     changeInput={this.changeInputVal}
//                     saveDate={this.submitForm}
//                     clearItem={this.state.item}
//                 />
//             </div>
//         )
//     }
// }

// class Header extends React.Component {

//     render () {
//         return <header> Header </header>
//     }
// }

// class ListItem extends React.Component {
//     render () {
//         console.log(this.props);
//         return (
//             <div>
//                 {this.props.products.map(product => (
//                     <Item id={product.id} item={product.name} removeItem={this.props.removeItem}/>
//                 ))}
//             </div>
//         )
//     }
// }

// class Item extends React.Component {
//     render () {
//         return (
//         <div>
//             {this.props.item}
//             <button onClick={() => this.props.removeItem(this.props.id)}>&times;</button>
//         </div>
//         )
//     }
// }

// class AddITem extends React.Component {
//     render () {
//         return (
//             <form onSubmit={this.props.saveDate}>
//                 <input type="text" onChange={this.props.changeInput} value={this.props.clearItem} />
//                 <input type="submit" />
//             </form>
//         )
//     }
// }

// ReactDOM.render(<App />,document.getElementById('app'))