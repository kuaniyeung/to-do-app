import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/confetti.css";

interface DatePickerProps {
  label: string;
  placeholder: string;
  onDateChange: (selectedDate: Date) => void;
}

const DateAndTimePicker: React.FC<DatePickerProps> = ({
  label,
  placeholder,
  onDateChange,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (dates: Date[]) => {
    setSelectedDate(dates[0]);
    if (dates.length > 0) {
      onDateChange(dates[0]);
    }

    console.log(selectedDate);
  };

  return (
    <>
      <label htmlFor="placeholder" className="mb-2">
        {label}
      </label>
      <Flatpickr
        options={{
          enableTime: true,
          dateFormat: "Y-m-d H:i",
          altInput: true,
          altFormat: "F j, Y h:i K",
          disableMobile: true,
        }}
        placeholder={placeholder}
        value={selectedDate?.toISOString()} // Convert Date to ISO string
        onChange={handleDateChange}
        className="input input-bordered input-accent w-full mb-2 text-base"
        required
      />
    </>
  );
};

export default DateAndTimePicker;
