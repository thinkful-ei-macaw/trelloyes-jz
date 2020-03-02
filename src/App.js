import React from 'react';
import List  from './List';

class App extends React.Component {

    render () {

        return (
            <main className="App">
                <header className="App-header">
                    <h1>Trelloyes!</h1>
                </header>
                <div className="App-List">
                {this.props.store.lists.map((list => 
                     <List header={list.header} cards={list.cardIds.map((cardId => this.props.store.allCards[cardId]))} key={list.id} /> 
                     ))}
                </div>
            </main>
        );
    }
}

export default App;