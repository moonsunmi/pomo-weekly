import Head from "next/head";
import Image from "next/image";
import { useRef, useState } from "react";
import Logs from "../components/Logs";
import TimerContainer from "../components/TimerContainer";
import styles from "../styles/Home.module.css";

export default function Home() {
  let unitPomodori = 1;
  const [logs, setLogs] = useState([{ id: 0, start: "", end: "" }]);
  const nextLogId = useRef(0);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Pomo Weekly</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <p className="font-NotoSansKorea text-3xl">뽀모 프로젝트</p>
        <p className="font-NotoSansMono text-3xl">뽀모 프로젝트</p>
        <TimerContainer
          minutes={unitPomodori}
          seconds={0}
          nextLogId={nextLogId}
          logs={logs}
          addLogs={setLogs}
        />
        <Logs logs={logs} />
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t"></footer>
    </div>
  );
}
