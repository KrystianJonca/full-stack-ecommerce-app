import React, { useState } from 'react';
import Input from '../UI/Input';

const NewsletterSignIn: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();

    console.log(`You have submitted an email: ${email}`);

    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  return (
    <form className="p-1 text-left" onSubmit={handleSubmit}>
      <div className="max-w-xs mx-auto">
        <Input
          type="email"
          name="email"
          label="Email"
          value={email}
          onChange={handleChange}
        ></Input>
        <div className="grid items-center">
          <input type="submit" value="Sign up" className="btn-light mx-auto mt-4" />
        </div>
        {success && <p className="text-center text-lg p-2">Your email has been submitted!</p>}
      </div>
    </form>
  );
};

export default NewsletterSignIn;
