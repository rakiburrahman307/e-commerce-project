import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import SuggestionList from "./SuggestionList";

const SearchBoxAdvance = ({
  placeholder,
  fetchSuggestions,
  staticData,
  dataKey,
  customLoading,
  onSelect,
  onChange,
  onBlur,
  onFocus,
  splitTextStyle,
  inputFieldCssClass,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    onChange(value);
    getSuggestions(value);
  };
  const handleSuggestionClick = (suggestion) => {
    onSelect(suggestion);
    setInputValue(suggestion[dataKey] || suggestion);
    setSuggestions([]);
  };
  const getSuggestions = async (query) => {
    if (query?.length === 0) {
      setSuggestions([]);
      setIsLoading(false);
      setIsError(null);
      return;
    }
    setIsError(null);
    setIsLoading(true);

    try {
      let result = [];
      if (staticData && staticData.length) {
        result = staticData.filter((item) =>
          item.toLowerCase().includes(query.toLowerCase())
        );
      } else if (fetchSuggestions) {
        result = await fetchSuggestions(query);
      }
      setSuggestions(result);
    } catch (error) {
      setIsError("Failed to fetch suggestions");
      setSuggestions([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (inputValue?.length > 1) {
      getSuggestions(inputValue);
    } else {
      setSuggestions([]);
    }
  }, [inputValue]);

  return (
    <div className='w-full'>
      <input
        className={inputFieldCssClass}
        type='text'
        placeholder={placeholder}
        value={inputValue}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={handleInputChange}
      />
      {(suggestions.length > 0 || isLoading || isError) && (
        <ul className='absolute top-2 py-2 px-5 bg-white w-full mt-10 z-50 mx-auto text-left font-medium text-lg leading-none divide-y rounded-lg max-h-72 overflow-y-auto'>
          {isLoading && (
            <div className='text-black mt-5'>
              {customLoading || "Loading..."}
            </div>
          )}
          {isError && <div>{isError}</div>}
          {
            <SuggestionList
              suggestions={suggestions}
              dataKey={dataKey}
              highlight={inputValue}
              splitTextStyle={splitTextStyle}
              onSuggestionClick={handleSuggestionClick}
            />
          }
        </ul>
      )}
    </div>
  );
};

SearchBoxAdvance.propTypes = {
  placeholder: PropTypes.string,
  fetchSuggestions: PropTypes.func,
  staticData: PropTypes.array,
  dataKey: PropTypes.string,
  splitTextStyle: PropTypes.string,
  inputFieldCssClass: PropTypes.string,
  customLoading: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  onSelect: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
};

export default SearchBoxAdvance;
