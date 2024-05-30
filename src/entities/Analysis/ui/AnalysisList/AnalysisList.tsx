import cls from "./AnalysisList.module.scss";
import { memo } from "react";
import { Analysis } from "../../model/types/analysis";
import { AnalysisListItem } from "../AnalysisListItem/AnalysisListItem";

interface AnalysisListProps {
  className?: string;
  analyzes: Analysis[];
}

export const AnalysisList = memo((props: AnalysisListProps) => {
  const { className, analyzes } = props;

  return (
    <div className="w-1/2">
      <div className="">
        {analyzes.map((item) => (
          <AnalysisListItem analysis={item} className={cls.analysisList} />
        ))}
      </div>
    </div>
  );
});
