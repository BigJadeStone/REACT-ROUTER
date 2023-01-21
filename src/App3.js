import { useEffect, useState } from "react";
import { Fragment } from "react";

const App = () => {

    /*
    Ajax를 이용해서 외부데이터 가져오기
    1. Promise = fetch().
    */

    //이벤트 클릭시 처리하기
    const[raw, setRaw] = useState();

    const handleClick = () => {
    fetch('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    .then( response  => response.json())
    .then(data => setRaw(data)) // 이벤트 밖에서 절대 이렇게 하면안됨. 무한루프 돎.
    }

    //화면이 mount이후 데이터가져오기 - useEffect()
    const[data, setData] = useState();

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
        .then(response => response.json())
        .then(data => setData(data) )
    },[])

    return (
        <Fragment>

            <button onClick={handleClick}>데이터가져오기</button>

            {
                raw === undefined ?
                "데이터 준비중"
                :
                <div>
                    아이디:{raw.userId}<br/>
                    PW: {raw.userPw}<br/>
                    이름: {raw.userName}<br/>
                </div>
            }

            <hr/>

            <h3>mount이후 데이터 가져오기</h3>
            {  // 이 구문은 data 값이 undefinded 이면 false로 판단해서 값을 안 보여주고,
               // 값이 있다면 && 뒤에 구문을 보여준다.
                data && <div>
                    아이디:{data.userId}
                    Pw:{data.userPw}
                    이름:{data.userName}
                </div>
            }

        </Fragment>
    )

}

export default App;