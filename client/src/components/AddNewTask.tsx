import DateAndTimePicker from "./Form Inputs/DateAndTimePicker";
import TextInput from "./Form Inputs/TextInput";
import Textarea from "./Form Inputs/Textarea";

const AddNewTask: React.FC = () => {
  const handleDateChange = (selectedDate: Date) => {
    console.log("Selected date:", selectedDate); // Selected date: Mon Jul 24 2023 12:00:00 GMT-0400 (Eastern Daylight Time)
    console.log("Selected date:", selectedDate.toISOString()); // Selected date: 2023-07-24T16:00:00.000Z
  };

  return (
    <>
      <TextInput placeholder={"Title"} />
      <Textarea placeholder={"Details"} />
      <DateAndTimePicker
        placeholder={"Date and Time"}
        onDateChange={handleDateChange}
      />
    </>
  );
};

export default AddNewTask;
