import useContextInfo from "../../UserLayout/Hooks/useContextInfo";

const BigSpinner = () => {
  const { selectedColor } = useContextInfo();
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-12 h-12 flex items-center justify-center">
        <div className="grid grid-cols-2 h-full w-full overflow-hidden shadow-lg rounded-full animate-spin">
          <span className="h-6 w-6 rounded-tl-full bg-transparent"></span>
          <span className={`h-6 w-6 rounded-tr-full ${selectedColor}`}></span>
          <span className={`h-6 w-6 rounded-bl-full ${selectedColor}`}></span>
          <span className="h-6 w-6 rounded-br-full"></span>
        </div>
      </div>
    </div>
  );
};

export default BigSpinner;
