import { useContext } from "react";
import { Container, ContainerTitle } from "../../../styles/Container.styles";
import { nextLogIdContext } from "../../_app";
import Report from "./Report";

const Reports = () => {
  const nextLogId = useContext(nextLogIdContext);

  return (
    <Container>
      <ContainerTitle>Reports</ContainerTitle>
      <Report reportName={"오늘의 뽀모도리"} reportNumber={nextLogId.current} />
      <Report reportName={"이번주 뽀모도리"} reportNumber="20" />
      <Report reportName={"리액트 공부"} reportNumber="20" />
    </Container>
  );
};

export default Reports;
