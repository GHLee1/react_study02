import React from "react";
import Food from "./Food";


/**
 * 음식 데이터 이름
 * @param {*}음식이름
 * @returns  내가 좋아하는 음식 이름
 * 
 */

function App2(){
    return(
        <div>
            <h1>app.js를 app2.js로 대체해서 실습</h1>
            <Food  fav="kimchi"/>
            <Food  fav="ramen"/>
            <Food  fav="samgiopsal"/>
            <Food  fav="chukumi"/>
        </div>
    );
}
export default App2;