import React, { useState } from "react";
import Counter from "./Counter";
import StartStopButton from "./StartStopButton";
import { PropTypes } from "prop-types";
import { Container, ContainerTitle } from "../../../styles/Container.styles";

const initialState = {
  isCounting: false,
};
const reducer = (state, action) => {
  if (action.type == "TOGGLE") {
    return !action.isCounting;
  }
  return initialState;
};

export const isCountingContext = React.createContext(false);

const TimerContainer = ({ minutes, seconds, setTimeLogs }) => {
  // 분과 초를 따로 관리하는 게 나을 수도 있겠다.
  const [isCounting, setIsCounting] = useState(false);

  return (
    <Container>
      <ContainerTitle>리액트 프로그래밍 공부</ContainerTitle>

      <isCountingContext.Provider value={isCounting}>
        <Counter
          minutes={minutes}
          seconds={seconds}
          setIsCounting={setIsCounting}
        />
        <StartStopButton
          setTimeLogs={setTimeLogs}
          setIsCounting={setIsCounting}
        />
      </isCountingContext.Provider>
    </Container>
  );
};

TimerContainer.propTypes = {
  minutes: PropTypes.number,
  seconds: PropTypes.number,
  setTimeLogs: PropTypes.func, // { id: 0, start: Date(), end: Date() } 형태의 매개변수, { id: 0, start: Date(), end: Date() } 형태의 반환값
};

export default TimerContainer;
