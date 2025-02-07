import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import 'src/styles/global.css';
import './index.css';
export const DoctorsTab = () => {
  const [openTab, setOpenTab] = useState('Психология');
  return (
    <Tabs
      value={openTab}
      onValueChange={setOpenTab}
      defaultValue="account"
      className="w-[100%] flex justify-center flex-column">
      <TabsList className="tw-grid tw-w-full tw-grid-cols-2">
        <TabsTrigger value="Психология">Психология</TabsTrigger>
        <TabsTrigger value="Психиатрия">Психиатрия</TabsTrigger>
      </TabsList>
      <TabsContent value="Психология">
        <div className="tw-bg-white tw-p-2 tw-mb-3 tw-rounded-lg tabs_content">
          <p>Вы можете обратиться за помощью к психологам с вопросами:</p>
          <ul>
            <li>Воспитания детей,</li>
            <li>Семейными проблемами,</li>
            <li>Преодоления зависимостей,</li>
            <li>Различных жизненных кризисов и других психологических проблем</li>
            <li>Получить психологическую помощь во всех сферах жизни.</li>
          </ul>
        </div>
      </TabsContent>
      <TabsContent value="Психиатрия">
        <div className="tw-bg-white tw-p-2 tw-mb-3 tw-rounded-lg tabs_content">
          <p>А так же обратиться за помощью к психиатрам с жалобами на :</p>
          <ul>
            <li>Весь спектр фобий/страхов,</li>
            <li>Тревожность,</li>
            <li>Панические атаки,</li>
            <li>
              Психосоматические заболевания, ипохондрия, необычные и неприятные телесные ощущения,
            </li>
            <li>
              Хроническая боль. (синдром раздраженного кишечника, хронические боли различной
              локализации, спазмы, нарушения дыхания, тошнота, «ком» в горле и т.д.).
            </li>
            <li>Снижение энергетического потенциала, хроническая усталость.</li>
            <li>
              Длительно повышенное или пониженное настроение, а так же беспричинные перепады в
              настроении,настроения в течении дня.
            </li>
            <li>Навязчивые мысли, действия, ритуалы,другие навязчивости,</li>
            <li>
              Расстройство сна. (бессонница, повышенная сонливость, трудности при засыпании и
              пробуждении)
            </li>
            <li>Бредовые, галлюцинаторные расстройства,</li>
            <li>
              Нарушение поведения , снижение когнитивных функций в пожилом возрасте.(Колебания
              настроения, тревожность у пожилых, а также у пациентов с органическим поражением
              головного мозга)
            </li>
            <li>
              Нарушения аппетита (импульсивное переедание, отказ от приема пищи, снижение аппетита);
            </li>
          </ul>
        </div>
      </TabsContent>
    </Tabs>
  );
};
