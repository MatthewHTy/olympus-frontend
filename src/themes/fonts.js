import AmadeusWOFF from "../assets/fonts/Amadeus-webfont.woff";

const amadeus = {
  fontFamily: "amadeusregular",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: "normal",
  src: `
		local('amadeusregular'),
		url(${AmadeusWOFF}) format('woff')
	`,
};

const fonts = [amadeus];

export default fonts;
