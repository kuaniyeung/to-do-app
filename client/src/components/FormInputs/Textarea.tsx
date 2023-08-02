interface TextareaProps {
  placeholder: string;
}

const Textarea: React.FC<TextareaProps> = ({ placeholder }) => {
  return (
    <textarea
      className="textarea textarea-accent w-full max-w-xs"
      placeholder={placeholder}
    ></textarea>
  );
};

export default Textarea;
