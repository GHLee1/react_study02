import React from "react";
//import '.App4.css';

//문제 1) class형 컴포넌트 App4를 생성하고 ,화면에 현재 채널,볼륨을 표시하고,볼륨up/down 채널updown버튼을 생성하여 버튼을 클릭시마다 현재 채널및 볼륨의 크기가 변경되는 프로그램을 작성하세요.
//ps1)불륨은 0~15, 0이하로 내려갈 수 없음,15이상 올라갈 수 없음
//ps2)채널은 1~15, 1이하로 내려가면 최대값은 15가 출력 올라가면 1이 출력
//ps3)각각 볼륨은 및 채널은 1씩 변경될 수 있음

class App4 extends React.Component {
    state={
        channelCount:1,
        volumeCount:0,
    };
    
    add=() =>{
        // this.setState(
        //         {channelCount:this.state.channelCount+1}
        // );
        // if(this.state.channelCount>14){
        //     this.setState({
        //         channelCount:1
        //     });
        // }

        this.setState((current)=>({
            channelCount:current.channelCount+1,
        }));
        if(this.state.channelCount>=15){
            this.setState((current)=>({
                channelCount:1,
            }));
        }
        
        
    }
    minus=() => {
        //비동기방식
        // this.setState({channelCount:this.state.channelCount-1});
        // if(this.state.channelCount<2){
        //     this.setState({
        //         channelCount:15
        //     })
        // }
        //함수사용 비동기방식 단점없앰
        this.setState((current)=>({
            channelCount:current.channelCount-1,
        }));
        if(this.state.channelCount<=1){
            this.setState((current)=>({
                channelCount:15,
            }));
        }
    }
    volumeadd=()=>{
        // this.setState(
        //     {volumeCount: this.state.volumeCount+1}
        // );
        // if(this.state.volumeCount>14){
        //     this.setState({volumeCount:15});
        // }
        this.setState((current)=>({
            volumeCount:current.volumeCount+1,
        }));
        if(this.state.volumeCount>14){
            this.setState((current)=>({
                volumeCount:15,
            }));
        }
    }
    volumeminus=()=>{
        // this.setState({volumeCount:this.state.volumeCount-1});
        // if(this.state.volumeCount<1){
        //     this.setState({volumeCount:0});
        // }
        this.setState((current)=>({
            volumeCount:current.volumeCount-1,
        }));
        if(this.state.volumeCount<1){
            this.setState((current)=>({
                volumeCount:0,
            }));
        }
    }
    
    render(){
        return(
            <div>
                <h1>TV볼륨채널 클릭하기</h1>
                <h2>현재채널:{this.state.channelCount}</h2>
                <h2>현재볼륨:{this.state.volumeCount}</h2>
                <div className="channals">
                <button onClick={this.add}>채널업</button>
                <button onClick={this.minus}>채널다운</button>
                </div>
                <div className="volumes">
                    <button onClick={this.volumeadd}>볼륨업</button>
                    <button onClick={this.volumeminus}>볼륨다운</button>
                </div>
                
            </div>
        );
    }
}
export default App4;