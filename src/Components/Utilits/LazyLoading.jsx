import lazy from "react";
const LazyLoading = (path, nameExport) => {
  return lazy(() => {
    const promise = import(path);
    if (promise === null) {
      return promise;
    } else {
      return promise.then((module) => ({ default: module[nameExport] }));
    }
  });
};
export default LazyLoading;
