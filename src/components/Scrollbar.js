export const Scrollbar = ({
  isNewYear,
  isSummer,
  isHalloween,
  isChristmas,
}) => {
  // Check if it is WebKit (Chrome, Safari, Edge)
  const isWebkit = "WebkitAppearance" in document.documentElement.style;

  // Check if it is Firefox
  const isFirefox = "scrollbarColor" in document.documentElement.style;

  const scrollbar = document.documentElement.style;


  if (isWebkit) {
    if (isNewYear) {
      scrollbar.setProperty("--scrollbar-thumb-color", "#FFD700");
      scrollbar.setProperty("--scrollbar-thumb-hover-color", "#C0C0C0");
      scrollbar.setProperty("--scrollbar-track-color", "#741C1C");
    } else if (isSummer) {
      scrollbar.setProperty("--scrollbar-thumb-color", "#D2B48C");
      scrollbar.setProperty("--scrollbar-thumb-hover-color", "#C7E6FA");
      scrollbar.setProperty("--scrollbar-track-color", "#424D6F");
    } else if (isHalloween) {
      scrollbar.setProperty("--scrollbar-thumb-color", "#D7A4F9");
      scrollbar.setProperty("--scrollbar-thumb-hover-color", "#D3D3D3");
      scrollbar.setProperty("--scrollbar-track-color", "#CD853F");
    } else if (isChristmas) {
      scrollbar.setProperty("--scrollbar-thumb-color", "#FFFF00");
      scrollbar.setProperty("--scrollbar-thumb-hover-color", "#FFDDD1");
      scrollbar.setProperty("--scrollbar-track-color", "#8FBC8F");
    } else {
      scrollbar.setProperty("--scrollbar-thumb-color", "#00BFFF");
      scrollbar.setProperty("--scrollbar-thumb-hover-color", "#FFFFFF");
      scrollbar.setProperty("--scrollbar-track-color", "#708090");
    }
  }

  if (isFirefox) {
    if (isNewYear) {
      scrollbar.setProperty("scrollbar-color", "#FFD700 #741C1C");
    } else if (isSummer) {
      scrollbar.setProperty("scrollbar-color", "#D2B48C #424D6F");
    } else if (isHalloween) {
      scrollbar.setProperty("scrollbar-color", "#D7A4F9 #CD853F");
    } else if (isChristmas) {
      scrollbar.setProperty("scrollbar-color", "#FFFF00 #8FBC8F");
    } else {
      scrollbar.setProperty("scrollbar-color", "#00BFFF #708090");
    }
  }
};
