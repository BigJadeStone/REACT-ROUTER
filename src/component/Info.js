import { useParams } from "react-router-dom";

const Info = () => {

    const data = {
        1: {name: "홍길동", subject: "리액트라우터"},
        2: {name: "이순신", subject: "리액트props"},
        3: {name: "coding404", subject: "리액트state"},
    };

    //useParams()
    let param = useParams(); 
    console.log(param); //URL주소에 값을 키로 받아줍니다.
    console.log(param.num); // 현재 param.num 값은 1

    const {name, subject}= data[param.num]; //data 객체의 해당하는 키가 갖고있는 값을 가져와서 구조분해할당함.

    return (
        <div>
            <h3>Info페이지..</h3>
            {name}님의 데이터{subject}
        </div>
    )

}

export default Info;