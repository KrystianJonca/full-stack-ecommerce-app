import React from 'react';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  type: string;
  dark: boolean;
}

const Input: React.FC<IInputProps> = ({ label, name, type, dark, ...rest }) => {
  return (
    <div>
      <label htmlFor={name} className="block py-2 text-xl">
        {label}
      </label>
      <input
        {...rest}
        type={type}
        name={name}
        placeholder=" "
        className={`w-full bg-transparent outline-none border-2  py-2 px-3 transition-all ${
          !dark
            ? 'focus:border-primary-light border-gray-200 hover:border-primary-light'
            : 'focus:border-primary-dark border-gray-800 hover:border-primary-dark'
        } `}
      />
    </div>
  );
};

export default Input;
