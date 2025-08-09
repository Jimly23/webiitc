import React from "react";
import Text from "./Text";

function InputRadio({ gender, setGender }) {
  const handleChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <div>
      <Text additionals={"mb-2"}>Jenis Kelamin *</Text>
      <fieldset className="grid md:grid-cols-2 gap-4">
        <div>
          <input
            type="radio"
            name="genderOption"
            value="male"
            id="GenderMale"
            className="peer hidden [&:checked_+_label_svg]:block"
            checked={gender === "male"}
            onChange={handleChange}
          />

          <label
            htmlFor="GenderMale"
            className="block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-oren peer-checked:ring-1 peer-checked:ring-oren"
          >
            <div className="flex items-center justify-between">
              <p className="text-gray-700">Laki Laki</p>

              <svg
                className="hidden h-5 w-5 text-oren"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </label>
        </div>

        <div>
          <input
            type="radio"
            name="genderOption"
            value="female"
            id="GenderFemale"
            className="peer hidden [&:checked_+_label_svg]:block"
            checked={gender === "female"}
            onChange={handleChange}
          />

          <label
            htmlFor="GenderFemale"
            className="block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-oren peer-checked:ring-1 peer-checked:ring-oren"
          >
            <div className="flex items-center justify-between">
              <p className="text-gray-700">Perempuan</p>

              <svg
                className="hidden h-5 w-5 text-oren"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </label>
        </div>
      </fieldset>
    </div>
  );
}

export default InputRadio;
