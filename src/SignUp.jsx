import React, { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`signed up to newsletter with email: ${email}`);
    setEmail("");
    setSubscribed(true);
  };

  return (
    <div className="p-4 bg-emerald-900">
      {/* medium and above screens */}
      <div className="hidden md:inline">
        <form
          onSubmit={handleSubmit}
          className="flex align-center justify-center"
          action="/"
          method="post"
        >
          <label className="text-5xl text-white" htmlFor="email">
            Sign Up For Our Daily Insider
          </label>
          <input
            className="flex-1 p-2 mx-6 rounded-lg text-2xl"
            type="email"
            placeholder={`${
              subscribed ? "Thanks for subscribing!" : "Enter your email"
            }`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={subscribed}
          />
          <button
            className="bg-emerald-600 ml-auto rounded-lg w-[200px] text-white text-3xl"
            type="submit"
            disabled={subscribed}
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* mobile screens up to medium */}
      <div className="md:hidden">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2"
          action="/"
          method="post"
        >
          <label className="text-3xl text-center text-white" htmlFor="email">
            Sign Up For Our Daily Insider!
          </label>
          <input
            className="flex-1 p-2 rounded-lg text-2xl"
            type="email"
            placeholder={`${
              subscribed ? "Thanks for subscribing!" : "Enter your email"
            }`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={subscribed}
          />
          <button
            className="bg-emerald-600 p-2 rounded-lg text-white text-2xl"
            type="submit"
            disabled={subscribed}
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
