import useContextInfo from "../UserLayout/Hooks/useContextInfo";

const LazyLoading = () => {
  const { selectedColor } = useContextInfo();
  return (
    <div className='flex justify-center'>
      <div className='flex flex-row gap-2'>
        <div
          className={`w-3 h-3 rounded-full ${selectedColor} animate-bounce`}
        ></div>
        <div
          className={`w-3 h-3 rounded-full ${selectedColor} animate-bounce [animation-delay:-.3s]`}
        ></div>
        <div
          className={`w-3 h-3 rounded-full ${selectedColor} animate-bounce [animation-delay:-.5s]`}
        ></div>
      </div>
    </div>
  );
};

export default LazyLoading;
