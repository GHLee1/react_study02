import React from "react";
import "./Food.css";
import { PropTypes } from "prop-types";
/**
 * 음식 데이터 이름
 * @param {*}음식이름
 * @returns  내가 좋아하는 음식 이름
 * 
 */

function Food({name,picture,rating}){
    return(
        <>
            <h2>I like {name}</h2>
            <h4>{rating}/5.0</h4>
            <img className="imgSize" src={picture} alt={name} />
        </>
    );
}
export default Food;

//propTypes : 상위 컴포넌트로부터 전달받은 데이터가 하위 컴포넌트에서 원하는 타입의 데이터인지 확인함
//isRequirde:필수 속성으로 설정,해당데이터가 없을 경우 오류
Food.propTypes={
    name:PropTypes.string.isRequired,
    picture:PropTypes.string.isRequired,
};