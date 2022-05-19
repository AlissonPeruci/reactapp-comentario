import React from "react";
import {ContainerPage, TitlePage} from '../../components/main';
import { useParams } from 'react-router-dom'

// import GetComentarios from '../../Api'


const Page = () => {
    const { user_name } = useParams();

    // const getComentario = (user_name) => { 
    //     let url = encodeURI(`https://localhost:44304/Comments/${user_name})`
    //     let comentario = GetComentarios(url)
    //     let resultado = JSON.parse(comentario)
    //     return resultado   
    // }

    return (
        <ContainerPage>
                <TitlePage>Comentarios - {user_name}</TitlePage>
                <>
                    {user_name}
                </>
        </ContainerPage>
    );
}
export default Page;


// class Page extends React.Component {
  
//     constructor(props) {
//         super(props)
//         this.state = {
//             comentario: [],
//         }

//         this.fetchData = this.fetchData.bind(this);
        
//     }

//     componentDidMount() {
//         this.fetchData('Alisson Peruci');
//     }

//     fetchData = (user_name) => {
//         this.setState({
//             comentario: user_name
//         })
//     };
    
//     render() {
//         return (
//             <ContainerPage>
//                 <TitlePage>Comentarios - {this.state.comentario}</TitlePage>
//                 {/* <>
//                     {getComentario(user_name).map(comentario => (
//                         <div key={ comentario.key }>
//                             <ul>
//                                 <li>{comentario.comentario}</li>
//                             </ul>
//                         </div>
//                     ))}
//                 </> */}
//             </ContainerPage>
//         );
//     }
// }
    
// export default Page;