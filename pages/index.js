import Head from "next/head";
import React from "react";
import Excution from "./components/run/Excution";

/* TODO
timetimeLogs의 start와 end는 Date 오브젝트로 관리하는 게 낫지 않을지?
*/

export default function Home({ unitPomodori, setTimeLogs }) {
  return (
    <div>
      <Head>
        <title>Pomo Weekly</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <Excution
          minutes={unitPomodori}
          seconds={0}
          setTimeLogs={setTimeLogs}
        />
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t"></footer>
    </div>
  );
}
