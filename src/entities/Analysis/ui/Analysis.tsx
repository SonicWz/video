import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Analysis.module.scss';

interface AnalysisProps {
    className?: string,
}

export const Analysis = (props: AnalysisProps) => {
    const { t } = useTranslation();
    const { className } = props;
    
    return (
        <div className={classNames(cls.Analysis, {}, [className])}>
            
        </div>
    );
};
