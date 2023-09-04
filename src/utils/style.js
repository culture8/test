export const windowWidth = window.innerWidth;
export const windowHeight = window.innerHeight;
export const imageWidth = (windowHeight * 1080) / 1920;
export const imageHeight = windowHeight;
export const containerStyle = {
  main: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  sub: {
    position: "relative",
    width: imageWidth,
    height: imageHeight,
    display: "flex",
    justifyContent: "center",
  },
};
export const buttonStyle = {
  main: {
    position: "absolute",
    width: imageWidth * `${300 / 1080}`,
    height: imageHeight * `${100 / 1920}`,
    borderRadius: 50,
    bottom: (imageHeight * 162) / 1920,
    justifyContent: "center",
  },
  first: {
    position: "absolute",
    width: imageWidth * `${720 / 1080}`,
    height: imageHeight * `${112 / 1920}`,
    borderRadius: 56,
    top: (imageHeight * 943) / 1920,
    justifyContent: "center",
    backgroundColor: "transparent",
    borderColor: "transparent",
  },
  second: {
    position: "absolute",
    width: imageWidth * `${720 / 1080}`,
    height: imageHeight * `${112 / 1920}`,
    borderRadius: 56,
    top: (imageHeight * 1167) / 1920,
    justifyContent: "center",
    backgroundColor: "transparent",
    borderColor: "transparent",
  },
  goBack: {
    position: "absolute",
    width: imageWidth * `${100 / 1080}`,
    height: imageHeight * `${100 / 1920}`,
    left: (imageWidth * 30) / 1080,
    top: (imageHeight * 40) / 1920,
    backgroundColor: "transparent",
    borderColor: "transparent",
  },
  goHome: {
    position: "absolute",
    width: imageWidth * `${300 / 1080}`,
    height: imageHeight * `${100 / 1920}`,
    bottom: (imageHeight * 66) / 1920,
    backgroundColor: "transparent",
    borderColor: "transparent",
  },
  test: {
    position: "absolute",
    width: imageWidth * `${200 / 1080}`,
    height: imageHeight * `${66 / 1920}`,
    bottom: (imageHeight * 66) / 1920,
    right: imageWidth / 1080,
    backgroundColor: "transparent",
    borderColor: "transparent",
  },
};
