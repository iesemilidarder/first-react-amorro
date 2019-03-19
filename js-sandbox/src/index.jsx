import React from 'react';
import ReactDOM from 'react-dom';
import MenuComponent from "./component/MenuComponent";
import ArticleComponent from "./component/ArticleComponent";
import SidebarComponent from "./component/SidebarComponent";


let links = ["link1", "link2", "link3"];
let data = ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque doloribus est minus odio ratione rem voluptas? At atque autem beatae corporis delectus error, id magni obcaecati odio optio perferendis placeat quod sed vero vitae. Beatae commodi consectetur dicta dolore dolorem dolores earum eum eveniet illum impedit itaque, laboriosam libero molestiae natus nisi nobis numquam, obcaecati odio omnis porro possimus quae quia quidem quo quos, rerum sunt suscipit tenetur velit veritatis. Accusantium ad aliquid, animi architecto asperiores cupiditate dicta dolorum eligendi eum explicabo fugiat iusto magni, molestias nesciunt quo quos rem sed vitae! Aspernatur blanditiis cum debitis dignissimos dolorum error esse eum expedita facilis illo in labore laudantium maxime mollitia nisi numquam quam repellendus similique sit, veritatis? Amet animi architecto consequuntur cumque delectus, deleniti dolor dolorem, dolores ducimus, eos esse ex fuga laboriosam nemo nihil non odio omnis sint sunt velit veniam vero voluptate? Animi autem dicta, dolore doloribus ducimus hic inventore ipsum magni maiores nam omnis possimus, quis, similique tempore temporibus ullam voluptates! Error eum, explicabo, fugiat iure labore minus nesciunt nobis, placeat praesentium quo quos reiciendis ullam unde. Alias commodi cumque eius error fuga illo in incidunt ipsam iste libero modi nesciunt nulla pariatur quaerat, quasi quod, sint soluta."];
let sideInfo = ["info1", "info2", "info3"];
//const title= "Lista de energumenos";
//let myData = ["", ""];
//let myComplexData =     {name: "", surname: ""},

ReactDOM.render(
    <div className="container">
        <div className="row">
            <MenuComponent links={links}/>
        </div>
        <div className="row">
            <ArticleComponent data={data}/>
            <SidebarComponent
                info={sideInfo}
                show={false}
            />
        </div>
    </div>
    ,
    document.getElementById("app")
)
;