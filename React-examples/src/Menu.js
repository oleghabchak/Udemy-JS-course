import React from 'react'
import Funccomponent from './Funccomponent';
import Ccompoonent from './Classcompoonent';
import { AroFuncComponent } from './ArrowFuncComponent';
import Form from './FormSubmit'
import FormSubmit from './Form1'
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
            <Form/>
            <FormSubmit/>
            <ToDoList/>
        </div>
    )
    
}
export default Menu;

