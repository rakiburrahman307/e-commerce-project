
import { lazy } from "react";

export const LazyLoading = (path, nameExport) => {
  return lazy(() => import(path).then((module) => ({ default: module[nameExport] })));
};
