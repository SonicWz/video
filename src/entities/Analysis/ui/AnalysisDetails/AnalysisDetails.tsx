import { memo } from "react";
import { useSelector } from "react-redux";
import { getCurrentAnalysis } from "../../model/selectors/getCurrentAnalysis";
import { Analysis } from "../../model/types/analysis";
import cls from "./AnalysisDetails.module.scss";

interface ArticleDetailsProps {
  className?: string;
}

export const AnalysisDetails = memo((props: ArticleDetailsProps) => {
  const { className } = props;
  const analysis = useSelector(getCurrentAnalysis) || ({} as Analysis);

  return (
    <div className={cls.analysisDetailsCard}>
      <div className={cls.analysisTitle}>
        <div className="text-lg">{analysis.title}</div>
        <div className="text-lg">{analysis?.date}</div>
        <div className="text-lg">{analysis?.playerName}</div>
      </div>
      <div className={cls.analysisContent}>
        <div className="h-80 bg-slate-50 border border-dashed border-2 rounded-xl self-center flex items-center justify-center">
          Preview 1
        </div>
        <div className="h-80 bg-slate-50 border border-dashed border-2 rounded-xl self-center"></div>
        <div className="h-80 bg-slate-50 border border-dashed border-2 rounded-xl self-center flex items-center justify-center">
          Preview 2
        </div>
        <div className="h-80 bg-slate-50 border border-dashed border-2 rounded-xl self-center"></div>
        <div className="h-80 bg-slate-50 border border-dashed border-2 rounded-xl self-center flex items-center justify-center">
          Preview 3
        </div>
        <div className="h-80 bg-slate-50 border border-dashed border-2 rounded-xl self-center"></div>
      </div>
    </div>
  );
});
