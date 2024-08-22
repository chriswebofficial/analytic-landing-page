import React, { useState } from "react";

const Search = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!e.target.value.includes("@")) {
      //i targeted the @ symbol if the symbol is note used then the mail is not valid it is not true.
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <div className="w-full py-16 text-white px-5">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="md:text-3xl sm:text-4xl text-3xl font-bold py-5">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className={`p-3 flex w-full rounded-md text-black ${
                error ? "border-2 border-red-500  ," : "" // if the erro is  true then the border turns red.
              }`}
              type="email"
              name="email"
              placeholder="Enter Email"
              required
              value={email}
              onChange={handleEmailChange}
            />
            <button
              className="bg-[#00df9a] w-[200px] rounded-md ml-4 m-auto font-medium my-6 md:py-3 sm:py-2 text-black"
              type="submit"
            >
              Notify Me
            </button>
          </div>
          {error && (
            <p className="text-red-500">
              Please enter a correct email address.
            </p>
          )}
          <p>
            We care about the protection of your data. Read our{" "}
            <span className="text-[#00df9a]">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Search;
