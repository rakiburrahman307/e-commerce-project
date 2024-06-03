import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import PropTypes from "prop-types";
const CardLoadingSkeleton = ({ index }) => {
  return (
    <div
      key={`skeleton-${index}`}
      className="mx-auto max-w-[290px] space-y-4 rounded-lg bg-white shadow-lg dark:bg-[#18181B] p-2"
    >
      <Skeleton count={1} height={160} width={280} />
      <div className="grid gap-2">
        <Skeleton height={24} />
        <Skeleton height={15} count={1} width={250} />
        <Skeleton height={15} width={150} />
        <Skeleton height={20} width={100} />
      </div>
    </div>
  );
};
CardLoadingSkeleton.propTypes = {
  index: PropTypes.number,
};
export default CardLoadingSkeleton;
