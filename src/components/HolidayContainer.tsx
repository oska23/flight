import { FunctionComponent } from "react";
import RecommendedHolidayCardContaine from "./RecommendedHolidayCardContaine";
import styles from "./HolidayContainer.module.css";

const HolidayContainer: FunctionComponent = () => {
  return (
    <div className={styles.recommendedHolidaysContainer}>
      <div className={styles.recTitle}>
        <b className={styles.recommendedHolidays}>Recommended Holidays</b>
        <button className={styles.viewAllHolidaysParent}>
          <div className={styles.viewAllHolidays}>View all holidays</div>
          <img
            className={styles.arrowRightIcon}
            alt=""
            src="/undefined15.png"
          />
        </button>
      </div>
      <div className={styles.recCardsContainer}>
        <RecommendedHolidayCardContaine
          unsplash5MV818tzxeo="/undefined16.png"
          bali="Bali"
          d3N="4D3N"
          prop="$899"
        />
        <RecommendedHolidayCardContaine
          unsplash5MV818tzxeo="/undefined17.png"
          bali="Swiss"
          d3N="6D5N"
          prop="$900"
        />
        <RecommendedHolidayCardContaine
          unsplash5MV818tzxeo="/undefined18.png"
          bali="Boracay"
          d3N="5D4N"
          prop="$699"
        />
        <RecommendedHolidayCardContaine
          unsplash5MV818tzxeo="/undefined19.png"
          bali="Palawan"
          d3N="4D3N"
          prop="$789"
        />
      </div>
      <div className={styles.viewAllBottom}>
        <div className={styles.viewAllHolidays1}>View all holidays</div>
        <img className={styles.arrowRightIcon} alt="" src="/undefined20.png" />
      </div>
    </div>
  );
};

export default HolidayContainer;
