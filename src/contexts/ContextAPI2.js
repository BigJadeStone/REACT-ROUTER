import { createContext, useState } from "react";


//1. 초기값 설정
const UserContext = createContext(
    // { //이거는 확인하기 위한 모형일 뿐임.
    // state : {id: 'aaa', name : 'bbb'},
    // action : {
    //     setUser: () => {}
    // }
    // }
)

//2. Provider 컴포넌트 정의 - 구조분해 할당은 반드시 children으로.
const UserProvider = ({children}) => {

    const [user, setUser] = useState({id :'aaa', name : 'bbb'});

    const value = {
        state : user,
        action: {setUser} /* ,js6문법 중 빠른할당구문. 함수를 담아주면 키값이 함수 이름이 되게해주는게 있음 그래서 이렇게 사용. */
    }

    // console.log(children); //Provider 사이에 있는 컴포넌트.
    // console.log(value);

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}

//3. 컨슈머, 프로바이더 반환
const UserConsumer = UserContext.Consumer;

export {UserProvider, UserConsumer}

//4. 기본 export
export default UserContext;