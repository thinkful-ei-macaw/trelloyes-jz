import React from 'react';
import Card from './Card';
import STORE from './store';



class List extends React.Component {
    render() {
        return (
            <section className="List">
                <header className="List-header">
                <h1>{this.props.header}</h1>
                </header>
                <div className="List-cards">
                    {this.props.cards.map((obj => 
                        <h3>{obj.id} + {obj.title} + {obj.content}</h3>
                    ))}
                </div>
            </section>
        );
    }
 }



export default List;
