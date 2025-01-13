import { lazy } from "react";

export function getLazy(path: string, namedExport = ''){
  return lazy(() => {
    const promise = import(path)
    if (namedExport)
      return promise.then((module) => ({ default: module[namedExport] }))
    return promise;
  });
}

