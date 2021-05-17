import React from 'react';

class NovoLivro extends React.Component {
    
    constructor(props) {
        super(props);
    }

    add(input) {
        console.log(input);
    }

    render() {
        return (
            <form action={this.add()}>
                Titulo do Livro: <input type="text"/><br/><br/>
                Autor do Livro: <input type="text" /><br/><br/>
                <input type="submit" value="submit"/>
            </form>
        )
    }
};

export default NovoLivro;