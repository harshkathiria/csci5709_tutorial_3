import React, { useState } from "react";

export default function Example() {

  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [errorMessage2, setErrorMessage2] = useState("");
  const [EmailValue, setEmailValue] = useState("");
  const [errorMessage3, setErrorMessage3] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    const lettersOnly = /^[A-Za-z]+$/;

    setInputValue(value);

    if (!lettersOnly.test(value)) {
      setErrorMessage("Only letters are allowed");
    } else {
      setErrorMessage("");
    }
  };

  const handleInputChange2 = (e) => {
    const value = e.target.value;
    const lettersOnly = /^[A-Za-z]+$/;

    setInputValue2(value);

    if (!lettersOnly.test(value)) {
      setErrorMessage2("Only letters are allowed");
    } else {
      setErrorMessage2("");
    }
  };

  const handleEmailChange3 = (e) => {
    const value = e.target.value;
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    setEmailValue(value);

    if (!emailRegex.test(value)) {
      setErrorMessage3("Please enter a valid email address");
    } else {
      setErrorMessage3("");
    }
  };

  const validateEmail = (email) => {
    // Simple email validation using a regular expression
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };

  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [errorMessage4, setErrorMessage4] = useState("");
  const [errorMessage5, setErrorMessage5] = useState("");
  const [errorMessage6, setErrorMessage6] = useState("");

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    const passwordRegex = /^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"|,.<>/?]+$/;
    setPasswordValue(value);

    if (!passwordRegex.test(value)) {
      setErrorMessage5("Password should only contain alphanumeric and special characters");
    } else {
      setErrorMessage5("");
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPasswordValue(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (passwordValue !== confirmPasswordValue) {
      setErrorMessage4("Passwords do not match");
    } else if (!validateEmail(EmailValue)) {
      setErrorMessage3("Please enter a valid email address");
    }
    else {
      setErrorMessage3("");
      window.location.href = "/Profile";
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Registration
          </h2>
        </div>     

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="/Profile" method="GET" onSubmit={handleFormSubmit}>
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  pattern="[A-Za-z]+"
                  value={inputValue}
                  onChange={handleInputChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
              <input
                  type="text"
                  pattern="[A-Za-z]+"
                  value={inputValue2}
                  onChange={handleInputChange2}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errorMessage2 && <p style={{ color: "red" }}>{errorMessage2}</p>}
              </div>
            </div>
          </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={EmailValue}
                  onChange={handleEmailChange3}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errorMessage3 && <p style={{ color: "red" }}>{errorMessage3}</p>}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="passwordInput"
                  minlength="8"
                  value={passwordValue}
                  onChange={handlePasswordChange}
                  type="password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              {errorMessage5 && <p style={{ color: "red" }}>{errorMessage5}</p>}
              </div>
              <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="confirmPasswordInput"
                  minlength="8"
                  value={confirmPasswordValue}
                  onChange={handleConfirmPasswordChange}
                  type="password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errorMessage4 && <p style={{ color: "red" }}>{errorMessage4}</p>}
              </div>
            </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit/Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}