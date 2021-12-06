import React, { Component } from 'react';

export default class Api extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            error: null,
            isLoaded: false,
            items: []
         }
    }
    

    componentDidMuont() {
        fetch("www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.drinks
                });
            }
        )

    }

    render() { 
        const items = this.state;
        return ( 
            <ul>
                <li key={items.name}>
                    {items.strDrink}
                </li>
            </ul>
         )
    }
}
 
