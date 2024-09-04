import React, {useState, useEffect} from "react";

const Info2=()=>{
    const [name, setName] = useState("");
    const [nickname, setNickname] = useState("");

    const onChangeName=(e)=>{
        setName(e.target.value);
    }

    const onChangeNickname=(e)=>{
        setNickname(e.target.value);
    }

    // useEffect(()=>{
    //     console.log("렌더링이 완료 되었습니다.");
    //     console.log({name, nickname});
    // });

    // useEffect에서 설정한 함수를 컴포넌트가 화면에 맨 처음 렌더링될 때만 실행하고,
    // 업데이트될 때는 실행하지 않으려면 함수의 두번째 파라미터를 비어있는 배열로 설정하면 된다.
    useEffect(()=>{
        console.log("렌더링이 완료 되었습니다.");
        console.log({name, nickname});
    }, []); // 1번만 출력됨

    return(
        <div>
            <div>
                <input onChange={onChangeName} />
                <input onChange={onChangeNickname} />
            </div>
            <div>이름 : {name}</div>
            <div>닉네임 : {nickname}</div>
        </div>
    );
}

export default Info2;