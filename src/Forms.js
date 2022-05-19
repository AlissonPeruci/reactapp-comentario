import React, { Component } from "react";
import GetComentarios from './Api'


class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comentario: [],
        } 

        this.handleInputChange = this.handleSubmit.bind(this)
    }
 
    handleSubmit = (user_name) => {
        user_name.preventDefault();
        // Transformando em url encode
        let url = encodeURI(`https://localhost:44304/Comments/${user_name.target[0].value}`)
        // Passando a url para a função que chama api
        let result = GetComentarios(url)
        // Convertendo par objeto javaScript
        let user_comments = JSON.parse(result)
        // Passando os comentarios para variavel "comentarios"
        this.setState({
            comentario: user_comments
        })
    }

    render() {
        return (
            <section>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Nome:
                        <input required={true} type='text' placeholder="Nome usuario" />
                    </label>
                    <input type="submit" value="Consultar" />
                </form>
                <ul>
                    {
                        // Para cada comentário vai gerar uma linha
                        this.state.comentario.map(comentario =>
                            <li><b>{`${comentario.comentario}`}</b> {`- Publicado em: ${comentario.data}`}</li>
                        )
                    }
                </ul>
            </section>
        );
    }
}
export default Form;