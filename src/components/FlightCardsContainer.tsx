import { FunctionComponent } from "react";
import FlightInfoContainer from "./FlightInfoContainer";
import FlightContainer from "./FlightContainer";
import styles from "./FlightCardsContainer.module.css";

const FlightCardsContainer: FunctionComponent = () => {
  return (
    <div className={styles.flightCards}>
      <FlightInfoContainer
        flightDetails="/undefined39.png"
        airlineName="Turkish Airlines"
        departureTime="11:35 PM"
        flightNumber="/undefined40.png"
        flightDuration="33H 10M, 1-stop"
        arrivalTime="4:45 PM"
        flightPrice="S$ 723"
      />
      <FlightContainer
        flightDetails="/undefined42.png"
        airlineName="Singapore Airlines"
        departureTime="8:45 PM"
        flightDuration="15H 10M, 2-stops"
        arrivalTime="7:55 PM"
        flightPrice="S$ 900"
      />
      <FlightInfoContainer
        flightDetails="/undefined44.png"
        airlineName="Japan Airlines"
        departureTime="8:20 PM"
        flightNumber="/undefined43.png"
        flightDuration="17H 30M, 1-stop"
        arrivalTime="9:50 PM"
        flightPrice="S$ 859"
        propTransform="scale(0.8)"
        propTextAlign="left"
        propRight="6.33%"
        propLeft="5.15%"
      />
      <FlightInfoContainer
        flightDetails="/undefined45.png"
        airlineName="ANA"
        departureTime="6:35 PM"
        flightNumber="/undefined43.png"
        flightDuration="19H 15M, 1-stop"
        arrivalTime="9:50 PM"
        flightPrice="S$ 936"
        propTransform="scale(0.8)"
        propTextAlign="left"
        propRight="5.5%"
        propLeft="5.98%"
      />
      <FlightInfoContainer
        flightDetails="/undefined46.png"
        airlineName="American Airlines"
        departureTime="8:20 PM"
        flightNumber="/undefined43.png"
        flightDuration="17H 30M, 1-stop"
        arrivalTime="9:50 AM"
        flightPrice="S$ 939"
        propTransform="unset"
        propTextAlign="center"
        propRight="5.5%"
        propLeft="5.98%"
      />
      <FlightContainer
        flightDetails="/undefined39.png"
        airlineName="Turkish Airlines"
        departureTime="11:35 PM"
        flightDuration="33H 10M, 2-stops"
        arrivalTime="4:45 PM"
        flightPrice="S$ 673"
        propTextAlign="left"
        propWidth="unset"
        propFlexShrink="unset"
      />
      <FlightInfoContainer
        flightDetails="/undefined47.png"
        airlineName="Japan Airlines"
        departureTime="10:25 PM"
        flightNumber="/undefined43.png"
        flightDuration="26H 45M, 1-stop"
        arrivalTime="9:10 AM"
        flightPrice="S$ 859"
        propTransform="scale(0.8)"
        propTextAlign="left"
        propRight="5.5%"
        propLeft="5.98%"
      />
      <FlightInfoContainer
        flightDetails="/undefined48.png"
        airlineName="American Airlines"
        departureTime="10:25 PM"
        flightNumber="/undefined43.png"
        flightDuration="26H 45M, 1-stop"
        arrivalTime="9:10 AM"
        flightPrice="S$ 859"
        propTransform="unset"
        propTextAlign="center"
        propRight="5.5%"
        propLeft="5.98%"
      />
      <button className={styles.primaryButton}>
        <div className={styles.primaryButtonChild} />
        <div className={styles.searchFlights}>Show more results</div>
      </button>
    </div>
  );
};

export default FlightCardsContainer;
