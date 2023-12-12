import { FunctionComponent } from "react";
import Header from "../components/Header";
import LosAngelesContainer from "../components/LosAngelesContainer";
import ResultsContainer from "../components/ResultsContainer";
import ResultsWrapper from "../components/ResultsWrapper";
import WeeklyUpdateForm from "../components/WeeklyUpdateForm";
import styles from "./HotelsPage.module.css";

const HotelsPage: FunctionComponent = () => {
  return (
    <div className={styles.hotelsPage}>
      <Header />
      <LosAngelesContainer />
      <div className={styles.hotelResults}>
        <div className={styles.resultsSumamry}>
          <div className={styles.results}>200+ results</div>
          <div className={styles.filters}>
            <img className={styles.filtersIcon} alt="" src="/undefined54.png" />
            <div className={styles.filters1}>Filters</div>
          </div>
        </div>
        <div className={styles.resultsSection}>
          <div className={styles.resultCardsCol}>
            <ResultsContainer
              roomImageUrl="/undefined55.png"
              roomType="1 king bed standard"
              hotelName="Holiday Inn Expre..."
              roomPrice="/undefined56.png"
              roomSize="/undefined57.png"
            />
            <ResultsWrapper
              hotelImageUrl="/undefined58.png"
              hotelName="Freehand Los Angeles"
              roomType="Bed in Quad"
              reviewCount="(1,941 reviews)"
              rating="4.2"
              price="/undefined59.png"
              discountPrice="$S 198"
            />
            <ResultsWrapper
              hotelImageUrl="/undefined60.png"
              hotelName="The Westin Bonavent..."
              roomType="1 King, City view"
              reviewCount="(1,002 reviews)"
              rating="4.1"
              price="/undefined61.png"
              discountPrice="$S 289"
            />
            <ResultsContainer
              roomImageUrl="/undefined62.png"
              roomType="Deluxe King"
              hotelName="The Ritz-Carlton, L..."
              roomPrice="/undefined63.png"
              roomSize="/undefined64.png"
            />
            <iframe
              className={styles.map}
              src={`https://www.openstreetmap.org/export/embed.html?bbox=-118.56033325195314%2C33.837912419023645%2C-117.98355102539064%2C34.25948651450623&amp;layer=mapnik`}
            />
          </div>
          <iframe
            className={styles.map1}
            src={`https://www.openstreetmap.org/export/embed.html?bbox=-118.56033325195314%2C33.837912419023645%2C-117.98355102539064%2C34.25948651450623&amp;layer=mapnik`}
          />
        </div>
      </div>
      <WeeklyUpdateForm
        imageDimensions="/undefined65.png"
        smallImageDimensions="/undefined66.png"
        mediumImageDimensions="/undefined67.png"
      />
    </div>
  );
};

export default HotelsPage;
