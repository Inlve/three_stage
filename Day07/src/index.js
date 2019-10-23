import _ from 'lodash';
import './style.css';
import Logo from './0.jpg';
import data from './data.xml';

function component() {
    const element = document.createElement('div');

    // Lodash是由当前script脚本import导入进来的
    element.innerHTML = _.join(['Hello','webpack'],'');
    element.classList.add('hello');

    // 将图像添加到我们现有的div.
    const myImg = new Image();
    myImg.src = Logo;

    element.appendChild(myImg);

    console.log(data);

    return element;
}
document.body.appendChild(component());
