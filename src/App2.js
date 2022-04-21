import React from "react";
import Food from "./Food";




//서버에서 전송된 데이터
const foodLike=[
    {
        id:1,
        name:"kimchi",
        image:"https://m.cj.co.kr/resources/img/kfoodlife/behind191130/00.jpg",
        rating:4.5,
    },
    {   
        id:2,
        name:"ramen",
        image:"https://health.chosun.com/site/data/img_dir/2020/09/07/2020090702900_0.jpg",
        rating:4.5,
    },
    {   
        id:3,
        name:"samgiopsal",
        image:"https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg",
        rating:5
    },
    {
        id:4,
        name:"chukumi",
        image:"https://recipe1.ezmember.co.kr/cache/recipe/2019/03/05/52d2be99c015378a75c9db81362422c71.jpg",
        rating:5
    },
    {
        id:5,
        name:"jokbal",
        image:"https://recipe1.ezmember.co.kr/cache/data/goods/20/11/46/1000014318/1000014318_magnify_072.jpg",
        rating:5
    }
];

function App2(){
    return(
        <div>
            <h1>app.js를 app2.js로 대체해서 실습</h1>
            <hr/>
            <h3>내가 좋아하는 음식</h3>
            {/* <Food  fav="kimchi"/>
            <Food  fav="ramen"/>
            <Food  fav="samgiopsal"/>
            <Food  fav="chukumi"/> */}

            {foodLike.map((dish) => (
                <Food name={dish.name}  picture={dish.image} key={dish.id}
                    rating={dish.rating}
                />
            ))}

        </div>
    );
}
export default App2;

//propTypes : 상위 컴포넌트로부터 전달받은 데이터가 하위 컴포넌트에서 원하는 타입의 데이터인지 확인함
