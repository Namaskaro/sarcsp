import React from 'react';
import './index.css';
const Steps = () => {
  return (
    <div className="steps steps-area">
      <ul className="timeline">
        <li className="timeline-box wow fadeInLeft">
          <p className="timeline-title">
            В наш центр приходят в основном по рекомендациям. Это один из показателей качественной и
            квалифицированной работы специалистов.
          </p>

          <span>1</span>
        </li>
        <li className="timeline-box wow fadeInRight">
          <p className="timeline-title">
            За время существования центра наша работа помогла многим людям решить различные
            проблемы, наладить отношения в семье и на работе, преодолеть психологические проблемы,
            открыть новые возможности.
          </p>

          <span>2</span>
        </li>
        <li className="timeline-box  wow fadeInLeft">
          <p className="timeline-title">
            Мы ценим индивидуальность и уникальность каждого пациента.
          </p>

          <span>3</span>
        </li>
        <li className="timeline-box wow fadeInRight">
          <p className="timeline-title">
            Обращаясь в "ЦСП" при записи наши пациенты могут быть уверены, что их направят к
            наиболее подходящему специалисту, который работает с конкретной ситуацией, потому как
            звонки обрабатывает специалист с психологическим образованием, который сможет
            профессионально оценить Ваш запрос и посоветовать специалиста нужного профиля.
          </p>

          <span>4</span>
        </li>
        <li className="timeline-box wow fadeInRight">
          <p className="timeline-title">
            Конфиденциальность гарантируем. Центр располагается на центральних улицах города, удобно
            добраться из любой точки города.
          </p>

          <span>5</span>
        </li>
      </ul>
    </div>
  );
};

export default Steps;
