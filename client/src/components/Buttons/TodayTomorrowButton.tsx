interface TodayTomorrowButtonProps {
text: string;
buttonColor: string;
}

const TodayTomorrowButton: React.FC<TodayTomorrowButtonProps> = (
  {text,
  buttonColor}
) => {
  return (
    <button className={`btn btn-outline btn-${buttonColor} rounded-full w-2/4`}>
      {text}
    </button>
  );
};

export default TodayTomorrowButton;
