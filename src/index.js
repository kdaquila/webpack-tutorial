import _ from 'lodash';
import css from './style.css';
import scss from './mystyle.scss';
import logo from './logo.svg';

function component() {
    const divElement = document.createElement('div');

    //Add the image
    const myLogo = new Image();
    myLogo.src = logo;
    divElement.appendChild(myLogo);

    // Add the heading
    const headingElement = document.createElement('span');
    headingElement.innerHTML = _.join(['Hello', 'webpack'], ' ');
    headingElement.classList.add(scss.hello);
    headingElement.classList.add(css.hello);
    divElement.appendChild(headingElement);

    return divElement;
}

document.body.appendChild(component());