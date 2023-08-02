import ActionButton from "./Buttons/ActionButton";
import DateAndTimePicker from "./FormInputs/DateAndTimePicker";
import TextInput from "./FormInputs/TextInput";
import Textarea from "./FormInputs/Textarea";

const AddTask: React.FC = () => {
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
      <ActionButton text={"Add"} style={"btn-accent"} />
      <ActionButton text={"Cancel"} style={"btn-outline"} />
    </>
  );
};

export default AddTask;
