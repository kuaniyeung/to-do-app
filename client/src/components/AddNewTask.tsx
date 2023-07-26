import { useState, useRef } from "react";
import Flatpickr from "react-flatpickr";

function AddNewTask() {
  const [date, setDate] = useState(new Date());

  const handleDateChange = ([selectedDate]: any) => {
    setDate(selectedDate);
    console.log(selectedDate);
  };

  return (
    <Flatpickr
      data-enable-time
      value={date}
      onChange={handleDateChange}
    />
  );
}

export default AddNewTask;
