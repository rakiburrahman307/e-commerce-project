import PropTypes from "prop-types";
import { useCallback, useEffect, useState } from "react";
import SuggestionList from "./SuggestionList";
import debounce from "lodash.debounce";
import useCache from "./useCache";
import SearchItemSpinner from "../../../BigSpinner/SearchItemSpinner";

const SearchBoxAdvance = ({
  placeholder,
  fetchSuggestions,
  staticData,
  dataKey,
  splitTextStyle,
  inputFieldCssClass,
  linkTo,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [isFocused, setIsFocused] = useState(false);
  const { get, set } = useCache();

  const getSuggestions = useCallback(
    async (query) => {
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
        if (staticData && staticData?.length) {
          result = staticData.filter((item) =>
            item.toLowerCase().includes(query.toLowerCase())
          );
        } else if (fetchSuggestions) {
          const cachedResult = get(query);
          if (cachedResult) {
            result = cachedResult;
          } else {
            result = await fetchSuggestions(query);
            set(query, result);
          }
        }
        if (result?.length === 0) {
          setIsError("No item Found");
        }

        setSuggestions(result);
      } catch (error) {
        setIsError("Failed to fetch suggestions");
        setSuggestions([]);
      } finally {
        setIsLoading(false);
      }
    },
    [fetchSuggestions, staticData, get, set]
  );

  const debouncedGetSuggestions = useCallback(
    debounce((value) => {
      getSuggestions(value);
    }, 300),
    [getSuggestions]
  );

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    debouncedGetSuggestions(value);
  };

  const handleSuggestionClick = (suggestion) => () => {
    onSelect(suggestion);
    setInputValue(suggestion[dataKey] || suggestion);
    setSuggestions([]);
  };

  useEffect(() => {
    if (inputValue?.length <= 1) {
      setSuggestions([]);
    }
  }, [inputValue]);

  return (
    <div className='w-full'>
      <input
        className={inputFieldCssClass}
        type='search'
        placeholder={placeholder}
        value={inputValue}
        onBlur={() => {
          setTimeout(() => {
            setIsFocused(false);
          }, 100);
        }}
        onFocus={() => {
          setIsFocused(true);
        }}
        onChange={handleInputChange}
      />
      {isFocused && (suggestions?.length > 0 || isLoading || isError) && (
        <ul className='absolute top-7 md:top-2 py-2 px-5 w-[268px] bg-white md:w-full mt-10 z-50 mx-auto text-left font-medium text-lg leading-none divide-y md:rounded-lg max-h-72 overflow-y-auto'>
          {isLoading && (
            <div className='text-black flex justify-center items-center my-3'>
              <SearchItemSpinner />
            </div>
          )}
          {isError && (
            <div className='text-red-500 font-semibold flex justify-center items-center my-3'>
              {isError}
            </div>
          )}
          <SuggestionList
            suggestions={suggestions}
            dataKey={dataKey}
            highlight={inputValue}
            splitTextStyle={splitTextStyle}
            onSuggestionClick={handleSuggestionClick}
            linkTo={linkTo}
          />
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
  linkTo: PropTypes.string,
  inputFieldCssClass: PropTypes.string,
  customLoading: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  onSelect: PropTypes.func,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
};

export default SearchBoxAdvance;
