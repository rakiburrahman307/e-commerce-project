import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const SuggestionList = ({
  suggestions = [],
  highlight,
  dataKey,
  onSuggestionClick,
  splitTextStyle,
  linkTo,
}) => {
  const getHighlightText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));

    return (
      <span>
        {parts.map((part, idx) => {
          const isHighlighted = part.toLowerCase() === highlight.toLowerCase();
          return isHighlighted ? (
            <span key={idx} className={splitTextStyle}>
              {part}
            </span>
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
          <Link key={suggestion?._id} to={`/product/${suggestion?._id}`}>
            <li
              onClick={() => onSuggestionClick(suggestion)}
              className='py-3.5 px-2 w-full flex items-center gap-3 text-black/80 hover:text-black hover:bg-blue-50'
              style={{ transform: `translateY(${idx * 10}px)` }}
            >
              <img
                src={suggestion?.thumbnail}
                alt={suggestion?.title}
                className=' mr-2.5 w-12 h-10 bg-blue-500 rounded-md'
              />
              {getHighlightText(currentSuggestion, highlight)}
            </li>
          </Link>
        );
      })}
    </>
  );
};

SuggestionList.propTypes = {
  suggestions: PropTypes.array,
  highlight: PropTypes.string,
  dataKey: PropTypes.string,
  linkTo: PropTypes.string,
  splitTextStyle: PropTypes.string,
  onSuggestionClick: PropTypes.func,
};

export default SuggestionList;
