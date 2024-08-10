import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const MAX_KEYWORDS = 4;

function PromptStyle({ keywords, setKeywords }) {
  const [inputValue, setInputValue] = useState("");
  //console.log(inputValue);
  function deleteWord(index) {
    const newKeywords = [...keywords];
    newKeywords.splice(index, 1);
    setKeywords(newKeywords);
  }

  function addWord(word) {
    if (word === undefined || word === "") {
      return;
    }

    setKeywords([...keywords, word]);
  }

  function addWordFromTextBox(event) {
    const val = event.target.value.trim();
    if (val !== undefined && val !== "") {
      if (keywords?.length >= MAX_KEYWORDS) {
        setInputValue("");
        return;
      }
      addWord(val);
      setInputValue("");
    }
  }
  function checkLetter(event) {
    const val = event.target.value;
    if (keywords.length > 0 && val.length == 0) {
      //console.log(typeof event.key);
      if (event.key == "Backspace") {
        const deletedArray = [...keywords];
        deletedArray.pop();
        //console.log(deletedArray);
        setKeywords(deletedArray);
        return;
      }
    }
    if (val.length > 0) {
      const letter = val.slice(-1);
      if (letter === "," || letter === ";") {
        const word = val.slice(0, -1).trim();
        if (word.length > 0) {
          if (keywords.length >= MAX_KEYWORDS) {
            setInputValue("");
            return;
          }
          addWord(word);
          setInputValue("");
        }
      }
    }
  }

  return (
    <div className="bg-white rounded-md border px-4 py-2  cursor-text  ring-0 ring-slate-800 ">
      <div className="flex flex-wrap">
        {keywords?.map((keyword, index) => (
          <div className="flex items-center" key={index}>
            <div className="keyword bg-slate-200  my-1 mx-1 px-2 py-1 rounded-md text-slate-800">
              {keyword}
              <button
                type="button"
                className="ml-2 outline-none text-slate-800"
                onClick={() => deleteWord(index)}
              >
                <FaTimes size={10} />
              </button>
            </div>
          </div>
        ))}
        <input
          title=", untuk menambahkan"
          type="text"
          className="rounded-lg focus:outline-none focus:border-none bg-transparent  h-8 flex-grow w-28 placeholder:text-medium"
          placeholder="Masukan Tech Stack"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={addWordFromTextBox}
          onKeyUp={checkLetter}
          maxLength="50"
        />
      </div>
      <p className="text-xs text-gray-400">
        {keywords?.length}/{MAX_KEYWORDS} item
      </p>
    </div>
  );
}

export default PromptStyle;
