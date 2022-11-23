import React, { useRef, useState } from "react";
import "../styles/globals.css";
import useTasks from "./components/common/hooks/useTasks";
import Header from "./components/Header";
import TestingRrule from "./components/common/TestingRrule";

export const timeLogsContext = React.createContext(null);
export const nextLogIdContext = React.createContext(0);
export const tasksContext = React.createContext(null);

function MyApp({ Component, pageProps }) {
  let unitPomodori = 1;
  const [timeLogs, setTimeLogs] = useState([
    { id: 0, start: Date(), end: Date() },
  ]); //
  const [tasks] = useTasks([
    {
      taskName: "샘플 테스크",
      category: "샘플 카테고리",
      date: "샘플 데이트",
      time: "샘플 타임",
    },
  ]);

  const nextLogId = useRef(0);

  return (
    <div>
      <timeLogsContext.Provider value={timeLogs}>
        <nextLogIdContext.Provider value={nextLogId}>
          <tasksContext.Provider value={tasks}>
            <Header />
            <TestingRrule />

            <Component
              {...pageProps}
              unitPomodori={unitPomodori}
              setTimeLogs={setTimeLogs}
            />
          </tasksContext.Provider>
        </nextLogIdContext.Provider>
      </timeLogsContext.Provider>
    </div>
  );
}

export default MyApp;
