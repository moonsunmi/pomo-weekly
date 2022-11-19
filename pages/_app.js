import React, { useRef, useState } from "react";
import "../styles/globals.css";
import Header from "./components/Header";

export const timeLogsContext = React.createContext(null);
export const nextLogIdContext = React.createContext(0);

function MyApp({ Component, pageProps }) {
  let unitPomodori = 1;
  const [timeLogs, setTimeLogs] = useState([{ id: 0, start: "", end: "" }]); //
  const [testTimeLogs, setTestTimeLogs] = useState([
    { id: 0, start: Date(), end: Date() },
  ]);

  const nextLogId = useRef(0);

  return (
    <div>
      <timeLogsContext.Provider value={timeLogs}>
        <nextLogIdContext.Provider value={nextLogId}>
          <Header />

          <Component
            {...pageProps}
            unitPomodori={unitPomodori}
            setTimeLogs={setTimeLogs}
          />
        </nextLogIdContext.Provider>
      </timeLogsContext.Provider>
    </div>
  );
}

export default MyApp;
