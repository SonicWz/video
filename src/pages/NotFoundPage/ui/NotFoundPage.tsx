import cls from "./NotFoundPage.module.scss";

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  return (
    <div data-testid={"NotFoundPage"} className={cls.NotFoundPage}>
      Страница не найдена
    </div>
  );
};
