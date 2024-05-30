import { memo, useCallback } from "react";
import { Analysis } from "../../model/types/analysis";
import cls from "./AnalysisListItem.module.scss";
import MoveIcon from "src/shared/assets/icons/list-24-24.svg";
import DeleteIcon from "src/shared/assets/icons/done-20-20.svg";
import { useAppDispatch } from "src/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { AnalysisActions } from "../../model/slice/AnalysisSlice";

interface ArticleListItemProps {
  className?: string;
  analysis: Analysis;
}

export const AnalysisListItem = memo((props: ArticleListItemProps) => {
  const { className, analysis } = props;

  const dispatch = useAppDispatch();

  const onClickHandler = useCallback(
    (value: Analysis) => {
      dispatch(AnalysisActions.setAnalysisToStore(value));
    },
    [dispatch]
  );

  return (
    <div className={cls.analysisCard}>
      <div
        className={cls.analysisContent}
        onClick={() => onClickHandler(analysis)}
      >
        <div className="text-lg">{analysis.title}</div>
        <div className="text-lg">{analysis.date}</div>
        <div className="text-lg">{analysis.playerName}</div>
      </div>
      <div className={cls.analysisControls}>
        <img className="h-7 cursor-pointer" src={MoveIcon} alt="Переместить" />
        <img className="h-7 cursor-pointer" src={DeleteIcon} alt="Удалить" />
      </div>
    </div>
  );
});
