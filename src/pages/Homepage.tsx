import { FunctionComponent } from "react";
import HeroContainer from "../components/HeroContainer";
import UpcomingFlightContainer from "../components/UpcomingFlightContainer";
import PopularDestinationsContainer from "../components/PopularDestinationsContainer";
import HolidayContainer from "../components/HolidayContainer";
import PopularStaysForm from "../components/PopularStaysForm";
import WeeklyUpdateForm from "../components/WeeklyUpdateForm";
import styles from "./Homepage.module.css";

const Homepage: FunctionComponent = () => {
  return (
    <div className={styles.homepage}>
      <HeroContainer />
      <div className={styles.homeContents}>
        <UpcomingFlightContainer />
        <PopularDestinationsContainer />
        <HolidayContainer />
        <PopularStaysForm />
      </div>
      <WeeklyUpdateForm
        imageDimensions="/undefined32.png"
        smallImageDimensions="/undefined33.png"
        mediumImageDimensions="/undefined34.png"
      />
    </div>
  );
};

export default Homepage;
