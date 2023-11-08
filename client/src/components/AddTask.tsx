import { useState } from "react";
import DateAndTimePicker from "./FormInputs/DateAndTimePicker";
import Input from "./FormInputs/Input";
import Textarea from "./FormInputs/Textarea";
import WarningDialog from "./Dialogs/WarningDialog";

interface AddTaskProps {
  onAdd: Function;
  closeAdd: Function;
}

const AddTask: React.FC<AddTaskProps> = ({ onAdd, closeAdd }) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [due_by, setDueBy] = useState("");

  const handleDateChange = (selectedDate: Date) => {
    setDueBy(selectedDate.toISOString());
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || due_by === "") {
      setWarningDialogIsOpen(true);
      setWarningDialogText("Please add Task Name and Due Date.");
      return;
    }

    onAdd({ title, details, due_by });

    setTitle("");
    setDetails("");
    setDueBy("");

    closeAdd();
  };

  const [warningDialogIsOpen, setWarningDialogIsOpen] =
    useState<boolean>(false);

  const [warningDialogText, setWarningDialogText] = useState<string>("");


  return (
    <>
      <div className="fixed top-0 left-0 right-0 w-full h-full bg-base-200">
        <form
          action="/submit-form"
          onSubmit={onSubmit}
          className="w-full mx-auto flex flex-col z-10 px-8 p-10 xl:max-w-7xl"
        >
          <Input
            type={"text"}
            label={"Task Name"}
            placeholder={"Title"}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            label={"Task Description"}
            placeholder={"Details"}
            onChange={(e) => setDetails(e.target.value)}
          />
          <DateAndTimePicker
            label={"Due Date"}
            placeholder={"Date"}
            onDateChange={handleDateChange}
          />
          <Input type={"submit"} value={"Add"} />
        </form>
      </div>

      <WarningDialog
        isOpen={warningDialogIsOpen}
        onConfirm={() =>setWarningDialogIsOpen(false)}
        text={warningDialogText}
      />
    </>
  );
};

export default AddTask;
