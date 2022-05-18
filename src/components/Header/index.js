import React from "react";
import {AreaHeader} from "./styled"

function Header(){
    return (
       <AreaHeader>
        <div className="container">
              <div className="logo">
                  LOGOMARCA
                </div>

                <nav>
                    <ul>
                     <li>configurações</li>
                     <li>sair</li>
                </ul>
              </nav>
          </div>
       </AreaHeader>
    )


}
export default Header;