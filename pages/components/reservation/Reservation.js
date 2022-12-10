import { useState } from "react";
import useInputs from "../common/hooks/useInputs";
import useSelectOptions from "../common/hooks/useSelectOptions";
import { Container, ContainerTitle } from "../../../styles/Container.styles";
import Input from "../../../styles/Input.styles";
import { DateInput } from "../../../styles/Reservation.styles";
import { ButtonContainer } from "../../../styles/Button.styles";

const today = new Date();
const dateToString_yyyy_MM_dd = (date) => {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
};

const Reservation = () => {
  // -------------------- <input type: "select">----------------------
  const categoryOptions = [
    { value: "banana", text: "banana" },
    { value: "kiwi", text: "kiwi" },
    { value: "tomato", text: "tomato" },
  ];
  const [selectedCategory, handleChangeOption, resetOption] =
    useSelectOptions(categoryOptions);

  // -------------------- <input type: "checkbox">----------------------
  const [weekPeriod, setWeekPeriod] = useState([
    { name: "Mon", label: "월", isChecked: true },
    { name: "Tue", label: "화", isChecked: false },
    { name: "Wed", label: "수", isChecked: false },
    { name: "Thu", label: "목", isChecked: false },
    { name: "Fri", label: "금", isChecked: false },
    { name: "Sat", label: "토", isChecked: false },
    { name: "Sun", label: "일", isChecked: false },
  ]); // fill({seleced: false})가 되어야 할 수도.
  //const [selectedWeek, handleChangeCheckbox, resetChangeCheckbox]

  // -------------------- <input type: the others>----------------------
  const [
    { taskName, pomodoriNumber, startDate, stopDate },
    handleChangeInput,
    handleResetInput,
  ] = useInputs({
    taskName: "",
    pomodoriNumber: "",
    startDate: dateToString_yyyy_MM_dd(today),
    stopDate: dateToString_yyyy_MM_dd(today),
  });

  const onSubmit = () => {
    // add reservation
    console.log("예약이 완료되었습니다.");
  };

  /*


  */
  return (
    <form onSubmit={onSubmit}>
      <Container>
        <ContainerTitle>뽀모도로 예약하기</ContainerTitle>
        <Input
          //{...register("taskName", { required: true })}
          name="taskName"
          placeholder="Task Name"
          value={taskName}
          onChange={handleChangeInput}
        />
        <Input
          //{...register("phomodoriNumber", { required: true, min: 0, max: 48 })}
          name="pomodoriNumber"
          type="number"
          min="1"
          placeholder="1~48"
          onChange={handleChangeInput}
          value={pomodoriNumber}
        />
        <select
          //{...register("category")}
          name="category"
          value={selectedCategory}
          onChange={handleChangeOption}
        >
          {categoryOptions.map((option) => (
            <option value={option.value} key={option.value}>
              {option.text}
            </option>
          ))}
        </select>
        <fieldset className="items-center text-sm align-middle mb-3 flex justify-between">
          <legend style={{ textAlign: "center" }}>반복</legend>
          {weekPeriod.map((weekday, index) => (
            <span style={{ marginRight: 3 }} key={index}>
              <input
                id="weekPeriod"
                //key={index}
                name="weekPeriod"
                type="checkbox"
                checked={weekday.isChecked}
                //onChange={handleChangeWeek} // <--- 구현 아직 안 됨.
              />
              <label>{weekday.label}</label>
            </span>
          ))}
        </fieldset>
        <label>시작일:</label>
        <DateInput
          name="date"
          type="date"
          id="startDate"
          value={startDate}
          onChange={handleChangeInput}
        />
        <br />
        <label>종료일:</label>
        <DateInput
          name="date"
          type="date"
          id="stopDate"
          value={stopDate}
          onChange={handleChangeInput}
        />

        <ButtonContainer>
          <input type="submit" value={"뽀모도리 예약"} onClick={onSubmit} />
        </ButtonContainer>
      </Container>
    </form>
  );
};

export default Reservation;
