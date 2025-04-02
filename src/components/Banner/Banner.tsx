import React from 'react';
import useScreenSize from './useScreenSize';
import { GlowButton } from '../GlowButton/GlowButton';
import styles from './Banner.module.css';

const BigBanner = () => {
  return (
    <section className={styles.banner}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className={styles.banner_info}>
              <div className={styles.info_inner}>
                {/* <h1>Центр современной психотерапии и cоматической патологии доктора Евстафьевой</h1>
                <span>Запись на консультацию по номеру 533-717</span> */}
                <h1>Уважаемые родители!</h1>
                <span>
                Приглашаем вас принять участие в интерактивной встрече на тему: <br /> «Помогите! Я не могу найти общий язык со своим подростком!» <br />
                Встречу проведет клинический психолог Леонова Ирина Алексеевна. <br />
                Стоимость 1200 руб
                </span>
                <span>Подробности и запись у администратора по телефону  533-717</span>
                <GlowButton to="https://booking.medflex.ru/?user=e93566ccea0cd55bf69d931b8b8e8b94&filial=5565" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SmallBanner = () => {
  return (
    <section className={styles.banner_sm}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className={styles.banner_info_sm}>
              <div className={styles.info_inner_sm}>
              <h1>Уважаемые родители!</h1>
                <span>
                Приглашаем вас принять участие в интерактивной встрече на тему: <br /> «Помогите! Я не могу найти общий язык со своим подростком!» <br />
                Встречу проведет клинический психолог Леонова Ирина Алексеевна. <br />
                Стоимость 1200 руб
                </span>
                <span>Подробности и запись у администратора по телефону  533-717</span>
                {/* <h1>Центр современной психотерапии и cоматической патологии доктора Евстафьевой</h1>
                <span>Запись на консультацию по номеру 533-717</span> */}
                <GlowButton to="https://booking.medflex.ru/?user=e93566ccea0cd55bf69d931b8b8e8b94&filial=5565" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Banner = () => {
  const screenSize = useScreenSize();
  return <>{screenSize.width <= 576 ? <SmallBanner /> : <BigBanner />}</>;
};

export default Banner;
