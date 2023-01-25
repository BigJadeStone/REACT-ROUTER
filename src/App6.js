import ColorComponent from "./conponent3/ColorComponent";
import ColorContext from "./contexts/ContextAPI";

const { Fragment, useState } = require("react")

const App = () => {

    /* 
    p.495

    1. ContextAPI 외부에 선언 createContext() 훅사용
    2. 자식 컴포넌트 consumer로 데이터를 받기
    3. 부모 컴포넌트 provider로 데이터를 전달(변경)
     */

    //select태그를 만들어서 state를 활용해서 color값을 변경
    const [color,setColor] = useState('색을 선택해주세요');

    const handleChange = (e) => {
        // console.log(e.target.value);
        setColor(e.target.value);
    }

    return (
        <Fragment>
            <ColorContext.Provider value={{color:color}}>
                {/* Provider는 사용할 root컴포넌트에 선언합니다. */}
                <ColorComponent/>
            </ColorContext.Provider>

            <select onChange={handleChange}>
                <option value='black'>black</option>
                <option value='red'>red</option>
                <option value='green'>green</option>
                <option value='white'>white</option>
            </select>

        </Fragment>
    )

}

export default App;