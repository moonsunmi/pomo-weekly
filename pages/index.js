import Head from "next/head";
import Image from "next/image";
import React, { useRef, useState } from "react";
import TimeLogs from "../components/TimeLogs";
import States from "../components/States";
import TimerContainer from "../components/TimerContainer";
import styles from "../styles/Home.module.css";

/* TODO
timetimeLogs의 start와 end는 Date 오브젝트로 관리하는 게 낫지 않을지?
*/
export const timeLogsContext = React.createContext(null);
export const nextLogIdContext = React.createContext(0);

export default function Home() {
  let unitPomodori = 1;
  const [timeLogs, setTimeLogs] = useState([{ id: 0, start: "", end: "" }]); //
  const nextLogId = useRef(0);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Pomo Weekly</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <p className="font-NotoSansKorea text-xl">뽀모 프로젝트</p>
        <p className="font-NotoSansMono text-xl">뽀모 프로젝트</p>

        <timeLogsContext.Provider value={timeLogs}>
          <nextLogIdContext.Provider value={nextLogId}>
            <TimerContainer
              minutes={unitPomodori}
              seconds={0}
              nextLogId={nextLogId}
              addtimeLogs={setTimeLogs}
            />

            <States nextLogId={nextLogId} />
          </nextLogIdContext.Provider>
          <TimeLogs />
        </timeLogsContext.Provider>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t"></footer>
    </div>
  );
}
