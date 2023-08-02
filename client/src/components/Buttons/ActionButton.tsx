interface ActionButtonProps {
  text: string;
  style: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ text, style }) => {
  return <button className={`btn rounded-full ${style}`}>{text}</button>;
};

export default ActionButton;
