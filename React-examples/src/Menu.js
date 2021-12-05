import React from 'react'
import Funccomponent from './Funccomponent';
import Ccompoonent from './Classcompoonent';
import { AroFuncComponent } from './ArrowFuncComponent';
const Menu = () => {
    return (
        <div>
            <ul>
                <li>
                <Funccomponent name="Alex"/>
                <li>
                <AroFuncComponent numbers={[1,2,3,4]}/>
                </li>
                <li>
                <Ccompoonent male="YES"/>
                </li>
                </li>
            </ul>

        </div>
    )
    
}
export default Menu;

