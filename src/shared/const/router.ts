export enum AppRoutes {
  MAIN = "main",
  ADD_NEW_ANALYSIS = "add_new_analysis",
  // last
  NOT_FOUND = "not_found",
}

export const getRouteMain = () => "/";
export const getRouteAddNewAnalysis = () => "/add_new_analysis";
export const getRouteNotFound = () => "*";
