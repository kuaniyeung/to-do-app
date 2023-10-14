import { ChangeEvent } from "react";

interface TextInputProps {
  label?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type: string;
  value?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  type,
  label,
  placeholder,
  value,
  onChange
}) => {
  return (
    <>
      <label htmlFor="placeholder" className="mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        className={
          type === "submit"
            ? "btn rounded-full btn-accent self-center mt-5"
            : "input input-bordered input-accent w-full mb-2 text-base"
        }
        onChange={onChange}
        maxLength={40}
      />
    </>
  );
};

export default TextInput;
