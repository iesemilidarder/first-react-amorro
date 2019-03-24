import React from 'react';
import ReactDOM from 'react-dom';
import MenuComponent from './component/MenuComponent';
import ArticleComponent from './component/ArticleComponent';
import SidebarComponent from './component/SidebarComponent';


const links = ['link1', 'link2', 'link3'];
const myData = [{
    id: 1,
    label: 'link1',
    link: '#',
    title: 'Link 1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque doloribus est minus odio ratione rem voluptas? At atque autem beatae corporis delectus error.'
},
    {
        id: 2,
        label: 'link2',
        link: '#',
        title: 'Link 2',
        text: 'Cosa texto 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque doloribus est minus odio ratione rem voluptas? At atque autem beatae corporis delectus error.'
    },{
        id: 3,
        label: 'link3',
        link: '#',
        title: 'Link 3',
        text: 'Cosa texto 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque doloribus est minus odio ratione rem voluptas? At atque autem beatae corporis delectus error.'
    }];
let sideInfo = ['info1', 'info2', 'info3'];

ReactDOM.render(
            <MenuComponent links={links}/>,
            <ArticleComponent content={myData}/>,
            <SidebarComponent info={sideInfo}/>
    ,
    document.getElementById('app')
)
;