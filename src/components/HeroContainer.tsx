import { FunctionComponent, useState, useCallback } from "react";
import {
  Radio,
  FormControlLabel,
  Autocomplete,
  TextField,
  Icon,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useNavigate } from "react-router-dom";
import styles from "./HeroContainer.module.css";

const HeroContainer: FunctionComponent = () => {
  const [
    selectOutlinedDateTimePickerValue,
    setSelectOutlinedDateTimePickerValue,
  ] = useState<string | null>(null);
  const navigate = useNavigate();

  const onSearchTextClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  const onHotelsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSearchFlightsButtonClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.heroSection}>
        <header className={styles.topHeader}>
          <div className={styles.topContainer}>
            <button className={styles.fickleflightLogo}>
              <img className={styles.symbolsIcon} alt="" src="/undefined.png" />
            </button>
            <div className={styles.navigationRight}>
              <div className={styles.navigationMenu}>
                <button className={styles.explore}>Explore</button>
                <div className={styles.search} onClick={onSearchTextClick}>
                  Search
                </div>
                <div className={styles.search} onClick={onHotelsTextClick}>
                  Hotels
                </div>
                <button className={styles.offers}>Offers</button>
              </div>
              <div className={styles.accountSection}>
                <img
                  className={styles.hamburgerMenuIcon}
                  alt=""
                  src="/notification.svg"
                />
                <img
                  className={styles.notificationBellIcon}
                  alt=""
                  src="/notification1.svg"
                />
                <img
                  className={styles.profilePictureIcon}
                  alt=""
                  src="/top_avatar@2x.png"
                />
              </div>
            </div>
          </div>
        </header>
        <div className={styles.searchSection}>
          <div className={styles.bannerGradient} />
          <img
            className={styles.bannerBackground}
            alt=""
            src="/undefined1.png"
          />
          <div className={styles.searchContainer}>
            <div className={styles.title}>
              <div
                className={styles.letsExplore}
              >{`Let’s explore & travel the world`}</div>
              <div className={styles.findTheBest}>
                Find the best destinations and the most popular stays!
              </div>
            </div>
            <div className={styles.searchForm}>
              <div className={styles.formTitleGroup}>
                <b className={styles.searchFlights}>Search flights</b>
                <div className={styles.flightOptions}>
                  <div className={styles.flightType}>
                    <FormControlLabel
                      className={styles.radio}
                      label="Return"
                      labelPlacement="end"
                      control={<Radio size="medium" />}
                    />
                    <FormControlLabel
                      className={styles.radio1}
                      label="One-way"
                      labelPlacement="end"
                      control={<Radio color="primary" checked size="medium" />}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.formInputsRow}>
                <div className={styles.inputsRow}>
                  <div className={styles.inputGroup}>
                    <Autocomplete
                      className={styles.selectoutlined}
                      size="medium"
                      disablePortal
                      options={[
                        "Singapore (SIN)",
                        "Sydney (SYD)",
                        "Siem Reap (REP)",
                        "Shanghai (PVG)",
                        "Sanya (SYX)",
                      ]}
                      renderInput={(params: any) => (
                        <TextField
                          {...params}
                          color="primary"
                          label="Departure"
                          variant="outlined"
                          placeholder=""
                          helperText=""
                        />
                      )}
                      defaultValue="Singapore -  Changi (SIN)"
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <Autocomplete
                      className={styles.selectoutlined}
                      size="medium"
                      sx={{ width: "100%" }}
                      disablePortal
                      options={[
                        "Clark (CRK)",
                        "Launceston (LST)",
                        "Kalibo (KLO)",
                        "Colombo CMB",
                        "Melbourne (AVV)",
                        "Los Angeles (LA)",
                      ]}
                      renderInput={(params: any) => (
                        <TextField
                          {...params}
                          color="primary"
                          label="Arrival"
                          variant="outlined"
                          placeholder=""
                          helperText=""
                        />
                      )}
                      defaultValue="Los Angeles (LA)"
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <div className={styles.selectoutlined}>
                      <DatePicker
                        label="Date"
                        value={selectOutlinedDateTimePickerValue}
                        onChange={(newValue: any) => {
                          setSelectOutlinedDateTimePickerValue(newValue);
                        }}
                        slotProps={{
                          textField: {
                            variant: "outlined",
                            size: "medium",
                            fullWidth: true,
                            color: "primary",
                          },
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.buttonGroup}>
                  <button
                    className={styles.searchFlightsButton}
                    onClick={onSearchFlightsButtonClick}
                  >
                    <div className={styles.button}>Search flights</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default HeroContainer;
