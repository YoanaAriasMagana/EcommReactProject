import { Component } from 'react';  

export default class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.products.id,
            image: this.props.products.image,
            name: this.props.products.name,
            description: this.props.products.description,
            price: this.props.products.price,
        }
    }

    render() {
        return (
        <li className="list-item" id={this.state.id}>
            <img className="item-image" src={this.state.image} alt="headphones" />
            <div className='item-wrapper'>
                <p className="item-name">{this.state.name}</p>
                <p className="item-description">{this.state.description}</p>
                <p className="item-price">Price: ${this.state.price}.00</p>
                <button className="item-btn btn">Add To Cart</button>
            </div>
        </li>
        )
    }
}
