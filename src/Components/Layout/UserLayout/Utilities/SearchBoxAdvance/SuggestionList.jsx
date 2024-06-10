import { PropTypes } from 'prop-types';

const SuggestionList = ({
  suggestions = [],
  highlight,
  dataKey,
  onSuggestionClick,
  splitTextStyle
}) => {
  const getHighlightText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));

    return (
      <span>
        {parts.map((part, idx) => {
          const isHighlighted = part.toLowerCase() === highlight.toLowerCase();
          return isHighlighted ? (
            <span key={idx} className={splitTextStyle}>{part}</span>
          ) : (
            <span key={idx}>{part}</span>
          );
        })}
      </span>
    );
  };

  return (
    <>
      {suggestions?.map((suggestion, idx) => {
        const currentSuggestion = dataKey ? suggestion[dataKey] : suggestion;

        return (
          <li
            key={idx}
            onClick={() => onSuggestionClick(suggestion)}
            className="py-3.5 px-2 w-full flex items-center text-blue-500 hover:text-blue-700 hover:bg-blue-50"
            style={{ transform: `translateY(${idx * 10}px)` }}
          >
            <span className="ml-5 mr-2.5 w-1 h-7 bg-blue-500 rounded-r-md"></span>
            {getHighlightText(currentSuggestion, highlight)}
          </li>
        );
      })}
    </>
  );
};

SuggestionList.propTypes = {
  suggestions: PropTypes.array,
  highlight: PropTypes.string,
  dataKey: PropTypes.string,
  splitTextStyle: PropTypes.string,
  onSuggestionClick: PropTypes.func
};

export default SuggestionList;
