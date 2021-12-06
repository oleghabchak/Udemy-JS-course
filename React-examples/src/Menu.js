import React from 'react'
import Funccomponent from './Funccomponent';
import Ccompoonent from './Classcompoonent';
import { AroFuncComponent } from './ArrowFuncComponent';
import FormSubmit from './FormSubmit';
import Father from './Father';
import ToDoList from './ToDoList';
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
            <FormSubmit/>
            <ToDoList/>
            <Father/>
        </div>
    )
    
}
export default Menu;

