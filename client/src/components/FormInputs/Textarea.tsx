import { ChangeEvent } from "react";
interface TextareaProps {
  label: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
}

const Textarea: React.FC<TextareaProps> = ({
  label,
  placeholder,
  onChange,
}) => {
  return (
    <>
      <label htmlFor="placeholder" className="mb-2">
        {label}
      </label>
      <textarea
        className="textarea textarea-accent w-full mb-2 text-base h-32"
        placeholder={placeholder}
        onChange={onChange}
        maxLength={150}
      ></textarea>
    </>
  );
};

export default Textarea;
