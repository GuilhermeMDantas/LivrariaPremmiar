import React from 'react';
import { Link } from 'react-router-dom';

class GetAll extends React.Component {
    constructor(props) {
        super(props);
        this._livros = this.getLivros();
        this.state = {livros: []};
    }

    componentDidMount() {
        console.log(this.state.livros)
    }

    getLivros = async() => {
        await fetch("http://localhost:5000/livros")
            .then(res => res.json())
            .then(found => {
                this.setState({livros: found})
            });
    }

    render() {
        return (
            <ul>
                {this.state.livros.map(livro =>
                    <div>
                        <h1 style={{display: "inline"}}>{livro.titulo} -- {livro.autor}</h1><span style={{paddingLeft: "20px"}}><Link to={"editar/"+livro.id} query={livro}>Editar</Link></span>
                    </div>
                )}
            </ul>
        )
    }
}

const Home = () => {
    return (
        <GetAll/>
    );
};

export default Home;