import React from 'react';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  type: string;
}

const Input: React.FC<IInputProps> = ({ label, name, type, ...rest }) => {
  return (
    <div>
      <label htmlFor={name} className="block py-2 text-lg">
        {label}
      </label>
      <input
        {...rest}
        type={type}
        name={name}
        placeholder=" "
        className="w-full bg-transparent outline-none border-2 focus:border-primary-light border-gray-200 hover:border-primary-light py-2 px-3 transition-all"
      />
    </div>
  );
};

export default Input;
