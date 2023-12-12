import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./HotelCard2Container.module.css";

type HotelCard2ContainerType = {
  discoveryShoresImage?: string;
  storyBeachfrontSuite?: string;
  discoveryShores?: string;
  night?: string;
  reviews?: string;
  prop?: string;
  vector?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propRight?: CSSProperties["right"];
};

const HotelCard2Container: FunctionComponent<HotelCard2ContainerType> = ({
  discoveryShoresImage,
  storyBeachfrontSuite,
  discoveryShores,
  night,
  reviews,
  prop,
  vector,
  propWidth,
  propRight,
}) => {
  const vectorIconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      right: propRight,
    };
  }, [propWidth, propRight]);

  return (
    <div className={styles.hotelCard2}>
      <div className={styles.hotelCard}>
        <img
          className={styles.discoveryShoresImage}
          alt=""
          src={discoveryShoresImage}
        />
        <div className={styles.stayDetails}>
          <div className={styles.stayDetailsRows}>
            <div className={styles.storyBeachfrontSuite}>
              {storyBeachfrontSuite}
            </div>
            <b className={styles.discoveryShores}>{discoveryShores}</b>
            <div className={styles.night}>{night}</div>
          </div>
        </div>
        <div className={styles.rating}>
          <div className={styles.reviews}>{reviews}</div>
          <div className={styles.parent}>
            <div className={styles.div}>{prop}</div>
            <img
              className={styles.vectorIcon}
              alt=""
              src={vector}
              style={vectorIconStyle}
            />
          </div>
        </div>
        <div className={styles.moreDetailsButton}>
          <div className={styles.button}>More details</div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard2Container;
