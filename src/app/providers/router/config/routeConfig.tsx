import { AddNewAnalysisPage } from "src/pages/AddNewAnalysisPage";
import { MainPage } from "src/pages/MainPage";
import { NotFoundPage } from "src/pages/NotFoundPage";
import {
  AppRoutes,
  getRouteAddNewAnalysis,
  getRouteMain,
  getRouteNotFound,
} from "src/shared/const/router";
import { AppRoutesProps } from "src/shared/types/router";

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <MainPage />,
  },
  [AppRoutes.ADD_NEW_ANALYSIS]: {
    path: getRouteAddNewAnalysis(),
    element: <AddNewAnalysisPage />,
  },

  // last
  [AppRoutes.NOT_FOUND]: {
    path: getRouteNotFound(),
    element: <NotFoundPage />,
  },
};
