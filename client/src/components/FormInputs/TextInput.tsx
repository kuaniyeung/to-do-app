interface TextInputProps {
  placeholder: string;
}

const TextInput: React.FC<TextInputProps> = ({ placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="input input-bordered input-accent w-full max-w-xs"
    />
  );
};

export default TextInput;
