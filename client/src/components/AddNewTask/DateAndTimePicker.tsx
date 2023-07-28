import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/confetti.css";

interface DatePickerProps {
  onDateChange: (selectedDate: Date) => void;
}

const DateAndTimePicker: React.FC<DatePickerProps> = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (dates: Date[]) => {
    setSelectedDate(dates[0]);
    if (dates.length > 0) {
      onDateChange(dates[0]);
    }
  };

  console.log(selectedDate?.toISOString()); // 2023-09-05T08:00:00.000Z

  return (
    <Flatpickr
      options={{
        enableTime: true,
        dateFormat: "Y-m-d H:i",
        altInput: true,
        altFormat: "F j, Y h:i K",
      }}
      placeholder="Select a date and time"
      value={selectedDate?.toISOString()} // Convert Date to ISO string
      onChange={handleDateChange}
    />
  );
};

export default DateAndTimePicker;
