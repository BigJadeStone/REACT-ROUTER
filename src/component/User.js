import { useLocation, useSearchParams } from "react-router-dom";

const User = () => {

    //쿼리스트링으로 넘어오는 값을 받기
    //1. - useLocation훅
    // const location = useLocation();
    // console.log(location); //객체안에 쿼리스트링 값은 분해해서 사용

    //2. - useSearchParams훅
    //배열반환 [값을 조회하거나 수정하는 get, set 담긴 객체, 쿼리스트링을 업데이트하는 함수] -> 두번째 매개변수의 함수는 잘 안씀.
    const [obj, setObj] = useSearchParams(); 
    // console.log(obj);
    // console.log(setObj);

    let id = obj.get("id"); //request.getParameter("id") 와 똑같음.
    let age = obj.get("age");
    // console.log(id, age);

    //쿼리스트링 강제로 변경하기
    const handleClick = () => {
        let num = parseInt(age) + 1; //age값에 1더함 (age가 string이므로 parseInt해준것.)
        setObj({id: "변경", age: num})
    }

    return(
        <div>
            <h3>유저화면..</h3>

            쿼리스트링으로 넘어온 id: {id}<br/>
            쿼리스트링으로 넘어온 age: {age}<br/>

            <button onClick={handleClick}>쿼리스트링 강제수정</button>
        </div>
    )
}

export default User;