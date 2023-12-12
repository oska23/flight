import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HotelCardContainer from "./HotelCardContainer";
import HotelCard2Container from "./HotelCard2Container";
import styles from "./PopularStaysForm.module.css";

const PopularStaysForm: FunctionComponent = () => {
  const navigate = useNavigate();

  const onViewAllStaysButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <form className={styles.popularStays}>
      <div className={styles.popularStaysHeader}>
        <div className={styles.popularStaysTitle}>
          <b className={styles.popularStays1}>Popular Stays</b>
        </div>
        <button
          className={styles.viewAllStaysButton}
          onClick={onViewAllStaysButtonClick}
        >
          <div className={styles.viewAllStays}>View all stays</div>
          <img
            className={styles.arrowRightIcon}
            alt=""
            src="/undefined15.png"
          />
        </button>
      </div>
      <div className={styles.hotelCards}>
        <HotelCardContainer
          roomDescription="/undefined21.png"
          roomType="Entire bungalow"
          hotelName="Matterhorn Suites"
          roomPrice="$575/night"
          roomReviews="/undefined22.png"
          hotelReviews="(60 reviews)"
          roomRating="4.9"
          roomImageUrl="/undefined23.png"
        />
        <HotelCard2Container
          discoveryShoresImage="/undefined24.png"
          storyBeachfrontSuite="2-Story beachfront suite"
          discoveryShores="Discovery Shores"
          night="$360/night"
          reviews="(116 reviews)"
          prop="4.8"
          vector="/undefined25.png"
        />
        <HotelCard2Container
          discoveryShoresImage="/undefined26.png"
          storyBeachfrontSuite="Single deluxe hut"
          discoveryShores="Arctic Hut "
          night="$420/night"
          reviews="(78 reviews)"
          prop="4.7"
          vector="/undefined27.png"
          propWidth="37.58%"
          propRight="62.42%"
        />
        <HotelCardContainer
          roomDescription="/undefined28.png"
          roomType="Deluxe King Room"
          hotelName="Lake Louise Inn"
          roomPrice="$244/night"
          roomReviews="/undefined29.png"
          hotelReviews="(63 reviews)"
          roomRating="4.6"
          roomImageUrl="/undefined30.png"
        />
      </div>
      <div className={styles.mobileViewAllStays}>
        <div className={styles.viewAllStays1}>View all stays</div>
        <img className={styles.arrowRightIcon} alt="" src="/undefined31.png" />
      </div>
    </form>
  );
};

export default PopularStaysForm;
