import React from "react";
import "./App.css";

// 리액트의 각 컴포넌트는 3가지 주요 단계를 통해 생명주기를 관리함
// 3가지 주기는 Mounting,Updating,Unmounting 을 의미함
// Mounting : html의 DOM에 React 컴포넌트를 붙이는 것
    // constructor() > getDerivedStateFromProps() >render()> componentDidMount()
    // constructor() : 컴포넌트가 초기화될 때 가장 먼저 호출,state와 다른 초기값들을 세팅
    // getDerivedStateFromProps():DOM요소들이 렌더링되기 직전에 호출,최초의 props에 기반한 state 객체를 저장함
    // render():DOM에 React의 가상DOM을 사용하여 화면을 그려줌
    // componentDidMount(): 해당 컴포넌트가 렌더링된 직후에 호출

// Updating : 화면 구성이 완료된 후 컴포넌트의 상태가 변경될 때를 의미
// getDerivedStateFromProps() > shoulComponentUpdate()>render()>getSnapshopBeforeUpdate()>componentDidUpdate()순으로 동작
// getDerivedStateFromProps() :화면 업데이트 시 가장 먼저 호출
// shoulComponentUpdate() : 리액트가 렌더링은 계속 해야하는지에 대한 정보를 Boolean값으로 반환
//render() : 실제 변경된 내용을 다시 화면에 출력
// getSnapshotBeforeUpdate() : 업데이트전의 proprs와 state에 접근 할 수 있음,Update가 완료된 이후에도 update이전의 props와 state의 정보를 확인할 수 있음,
// getSnapshoptBeforeUpdate()메서드를 사용시 반드시 componentDidUpdate()메서드도 사용해야함
//componentDidUpdate():컴포넌트의 정보가 업데이트 되고 난 후 호출
// Unmounting : DOM을 제거하거나 해당 컴포넌트를 사용하지 않을때 호출
//componentWillUnmount():컴포넌트가 DOM에서 제거될 때 호출
class App5 extends React.Component{
    constructor(props){
        super(props)
        console.log('constructor 동작');
    }

    state={
        count:0,
    };

    add=()=>{
        this.setState((state)=>({
            count:state.count+1,
        }));
    };

    minus=()=>{
        this.setState((state)=>({
            count:state.count-1,
        }));
    };

    componentDidMount(){
        console.log("componentDidMount 동작");
    }

    render(){
        console.log("render 동작");

        
        return(<div>
            <h1>번호:{this.state.count} </h1>
            <button onClick={this.add}> + </button>
            <button onClick={this.minus}> - </button>
            </div>);
    }

}

export default App5;