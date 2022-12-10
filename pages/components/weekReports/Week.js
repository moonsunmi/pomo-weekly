import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";
import styled from "styled-components";
import React from "react";
import { darken } from "polished";
import { Aday, AdayDetail, WeekIcon } from "../../../styles/WeekReport.styles";

const Week = () => {
  const Meter = styled.meter`
    margin: 0;
    padding: 0;

    ::-webkit-meter-optimum-value {
      background: ${(props) => darken(0.4, props.theme.primary)};
    }
  `;
  return (
    <div>
      <div className="flex justify-around ">
        <WeekIcon>
          <ArrowLeftCircleIcon />
        </WeekIcon>
        12/5 ~ 12/11
        <WeekIcon>
          <ArrowRightCircleIcon />
        </WeekIcon>
      </div>
      <div>
        <label for="goal_archived">달성: 10 | 목표: 40</label>
        <br />
        <Meter id="goal_archived" value="10" max="40"></Meter>
      </div>
      <div>
        <Aday>
          <span style={{ display: "flex", justifyContent: "space-between" }}>
            <span>금) 09일(5/6) ● ● ● ● ● ○ </span> <span>▼</span>
          </span>
          <AdayDetail>
            리액트 공부(4/4) ● ● ● ●<br />
            수영 블로그 글 쓰기(1/2) ● ○
          </AdayDetail>
        </Aday>

        <Aday>
          <span style={{ display: "flex", justifyContent: "space-between" }}>
            <span>토) 10일 ● ● ● ● ● ○ (5/6) </span> <span>▼</span>
          </span>
          <AdayDetail>
            리액트 공부 ● ● ● ● (4/4)
            <br />
            수영 블로그 글 쓰기 ● ○ (1/2)
          </AdayDetail>
        </Aday>
      </div>
    </div>
  );
};

export default Week;
