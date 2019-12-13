import React from 'react';
import {hot} from 'react-hot-loader/root';
import scss from './mystyle.scss';

export default function App(props) {
    return (
        <h1 className={scss.hello}>Hello {props.name}!</h1>
    )
}