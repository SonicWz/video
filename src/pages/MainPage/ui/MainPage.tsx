import { AnalysisDetails } from "src/entities/Analysis/ui/AnalysisDetails/AnalysisDetails";
import { AnalysisList } from "src/entities/Analysis/ui/AnalysisList/AnalysisList";

const MainPage = () => {
  const analyzes = [
    { id: "1", title: "Первый", date: "01.02.2024", playerName: "Игрок 1" },
    { id: "2", title: "Второй", date: "02.02.2024", playerName: "Игрок 2" },
    { id: "3", title: "Третий", date: "03.02.2024", playerName: "Игрок 3" },
    { id: "4", title: "Четвертый", date: "04.02.2024", playerName: "Игрок 4" },
  ];
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <AnalysisList analyzes={analyzes} />
      <AnalysisDetails />
    </div>
  );
};

export default MainPage;
