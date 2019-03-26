import React from 'react';
import ReactDOM from 'react-dom';
import MenuComponent from './component/MenuComponent';
import ArticleComponent from './component/ArticleComponent';
import SidebarComponent from './component/SidebarComponent';


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
    }, {
        id: 3,
        label: 'link3',
        link: '#',
        title: 'Link 3',
        text: 'Cosa texto 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque doloribus est minus odio ratione rem voluptas? At atque autem beatae corporis delectus error.'
    }];
const sideInfo = [{label: 'info1'}, {label: 'info2'}, {label: 'info3'}];

class MyArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {currentId: 1};
        this._changeSelection = this._changeSelection.bind(this);
        this._getElement = this._getElement.bind(this);
    }

    _changeSelection(id) {
        if (id !== undefined) {
            this.setState({currentId: id});
        }
    }

    _getElement(i) {
        if (i !== undefined) {
            for (let q=0;q<myData.length;q++){
                if (myData[q].id === i) {
                    return myData[q];
                }
            }
        }
        return {title: 404, content: "Not found"};
    }

    render() {
        const content = this._getElement(this.state.currentId);
        console.log(this.state.currentId);
        console.log(content);
        return <React.Fragment>
            <MenuComponent links={myData}/>
            <main className={"row"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid enim fuga in laboriosam molestiae
                necessitatibus quo. Autem, distinctio, voluptas.
            </main>
            <footer className={"row"}>Hola mundo</footer>
        </React.Fragment>;
    }
}


ReactDOM.render(
    <div className="container">
        <div className='row'>
            <MenuComponent links={myData}/>
        </div>
        <div className='row'>
            <MyArticle/>
            <SidebarComponent info={sideInfo}/>
        </div>
    </div>
    , document.getElementById('app')
);