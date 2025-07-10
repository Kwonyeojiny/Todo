import { useEffect, useState } from "react";

const TodoInput = () => {
  const [inputValue, setInputValue] = useState<string>("");

  // 입력값 바뀌자마자 뭔가 하고 싶다 -> handleChange
  // 상태가 바뀐 이후 효과를 실행하고 싶다 -> useEffect
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // useEffect 사용법을 알기위한 코드
  //  -> console.log와 같은 코드는 handleChange 함수 안에 넣는 것이 일반적
  useEffect(() => {
    console.log("변경된 값: ", inputValue);
  }, [inputValue]);

  return <input type="text" value={inputValue} onChange={handleChange} />;
};

export default TodoInput;
