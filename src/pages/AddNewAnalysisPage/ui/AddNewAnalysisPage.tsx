import cls from "./AddNewAnalysisPage.module.scss";

interface AddNewAnalysisPageProps {
  className?: string;
}

const AddNewAnalysisPage = (props: AddNewAnalysisPageProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-col items-center justify-center w-3/4 p-5 border border-solid">
        <div className="flex flex-col items-start justify-center w-1/2">
          <p className="text-lg mt-1 mb-2">Заголовок</p>
          <input type="text" placeholder="Заголовок" className={cls.field} />
          <p className="text-lg mt-1 mb-2">Дата</p>
          <input type="date" placeholder="Дата" className={cls.field} />
          <p className="text-lg mt-1 mb-2">Имя игрока</p>
          <input type="text" placeholder="Имя игрока" className={cls.field} />
        </div>
        <div className="flex flex-col items-start justify-center w-full">
          <p className="text-lg mt-1 mb-2">Загрузить видео:</p>
          <div className="w-1/2 h-40 bg-slate-50 border border-dashed border-2 rounded-xl self-center"></div>
          <p className="text-lg mt-1 mb-2">Загрузить видео пользователя:</p>
          <div className="grid grid-cols-3 gap-5 w-full">
            <div className="h-40 bg-slate-50 border border-dashed border-2 rounded-xl self-center"></div>
            <div className="h-40 bg-slate-50 border border-dashed border-2 rounded-xl self-center"></div>
            <div className="h-40 bg-slate-50 border border-dashed border-2 rounded-xl self-center"></div>
            <div className="h-40 bg-slate-50 border border-dashed border-2 rounded-xl self-center"></div>
            <div className="h-40 bg-slate-50 border border-dashed border-2 rounded-xl self-center"></div>
            <div className="h-40 bg-slate-50 border border-dashed border-2 rounded-xl self-center"></div>
            <div className="h-40 bg-slate-50 border border-dashed border-2 rounded-xl self-center"></div>
          </div>
        </div>
        <button className="">Анализировать</button>
      </div>
    </div>
  );
};

export default AddNewAnalysisPage;
