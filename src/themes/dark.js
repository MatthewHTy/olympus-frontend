import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";
import fonts from "./fonts";
import commonSettings, { handleBackdropFilter } from "./global.js";

// TODO: Break repeated use color values out into list of consts declared here
// then set the values in darkTheme using the global color variables

const darkTheme = {
  color: "#FFFFFF",
  gold: "#70D0DD",
  gray: "#A3A3A3",
  textHighlightColor: "#70D0DD",
  backgroundColor: "rgba(8, 15, 53, 1)",
  background: `
  linear-gradient(180deg, #04343A 0%, rgba(3, 225, 255, 0.5) 100%)
    `,
  paperBg: "rgba(54, 56, 64, 0.6)",
  modalBg: "#24242699",
  popoverBg: "rgba(54, 56, 64, 0.99)",
  menuBg: handleBackdropFilter("rgba(54, 56, 64, 0.5)"),
  backdropBg: "rgba(54, 56, 64, 0.5)",
  largeTextColor: "#F4D092",
  activeLinkColor: "rgba(3, 225, 255, 0.5)",
  activeLinkSvgColor:
    "brightness(0) saturate(100%) invert(84%) sepia(49%) saturate(307%) hue-rotate(326deg) brightness(106%) contrast(92%)",
  primaryButtonColor: "#333333",
  primaryButtonBG: "#70D0DD",
  primaryButtonHoverBG: "rgba(3, 225, 255, 0.5)",
  secondaryButtonHoverBG: "#70D0DD",
  outlinedPrimaryButtonHoverBG: "#70D0DD",
  outlinedPrimaryButtonHoverColor: "#333333",
  outlinedSecondaryButtonHoverBG: "transparent",
  outlinedSecondaryButtonHoverColor: "#70D0DD", //gold
  containedSecondaryButtonHoverBG: "rgba(3, 225, 255, 0.5)",
  graphStrokeColor: "rgba(255, 255, 255, .1)",
  gridButtonHoverBackground: "rgba(255, 255, 255, 0.6)",
  gridButtonActiveBackground: "#00000038",
  switchBg: "#333333",
};

export const dark = responsiveFontSizes(
  createTheme(
    {
      primary: {
        main: darkTheme.color,
      },
      palette: {
        type: "dark",
        background: {
          default: darkTheme.backgroundColor,
          paper: darkTheme.paperBg,
        },
        contrastText: darkTheme.color,
        primary: {
          main: darkTheme.color,
        },
        neutral: {
          main: darkTheme.color,
          secondary: darkTheme.gray,
        },
        text: {
          primary: darkTheme.color,
          secondary: darkTheme.gray,
        },
        graphStrokeColor: darkTheme.graphStrokeColor,
        highlight: darkTheme.textHighlightColor,
      },
      typography: {
        fontFamily: "amadeusregular",
      },
      overrides: {
        MuiSwitch: {
          colorPrimary: {
            color: darkTheme.color,
            "&$checked": {
              color: darkTheme.switchBg,
              "& + $track": {
                backgroundColor: darkTheme.color,
                borderColor: darkTheme.color,
              },
            },
          },
          track: {
            border: `1px solid ${darkTheme.color}`,
            backgroundColor: darkTheme.switchBg,
          },
        },
        MuiCssBaseline: {
          "@global": {
            "@font-face": fonts,
            body: {
              background: darkTheme.background,
            },
          },
        },
        MuiDrawer: {
          paper: {
            backgroundColor: darkTheme.paperBg,
            zIndex: 7,
            "@supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none))": {
              backgroundColor: "rgba(54, 56, 64, 0.98)",
            },
          },
        },
        MuiSelect: {
          select: {
            color: "#F8CC82",
          },
        },
        MuiPaper: {
          root: {
            backgroundColor: darkTheme.paperBg,
            "&.ohm-card": {
              backgroundColor: darkTheme.paperBg,
            },
            "&.ohm-modal": {
              backgroundColor: darkTheme.modalBg,
            },
            "&.ohm-menu": {
              backgroundColor: darkTheme.menuBg,
              backdropFilter: "blur(33px)",
            },
            "&.ohm-popover": {
              backgroundColor: darkTheme.popoverBg,
              color: darkTheme.color,
              // backdropFilter: "blur(15px)",
            },
          },
        },
        MuiBackdrop: {
          root: {
            backgroundColor: darkTheme.backdropBg,
          },
        },
        MuiLink: {
          root: {
            color: darkTheme.color,
            "&:hover": {
              color: darkTheme.textHighlightColor,
              textDecoration: "none",
              "&.active": {
                color: darkTheme.color,
              },
            },
            "&.active": {
              color: darkTheme.color,
              textDecoration: "underline",
            },
          },
        },
        MuiTableCell: {
          root: {
            color: darkTheme.color,
          },
        },
        MuiInputBase: {
          root: {
            // color: darkTheme.gold,
          },
        },
        MuiOutlinedInput: {
          notchedOutline: {
            // borderColor: `${darkTheme.gold} !important`,
            "&:hover": {
              // borderColor: `${darkTheme.gold} !important`,
            },
          },
        },
        MuiTab: {
          textColorPrimary: {
            color: darkTheme.gray,
            "&$selected": {
              color: darkTheme.gold,
            },
          },
        },
        PrivateTabIndicator: {
          colorPrimary: {
            backgroundColor: darkTheme.gold,
          },
        },
        MuiToggleButton: {
          root: {
            backgroundColor: darkTheme.paperBg,
            "&:hover": {
              color: darkTheme.color,
              backgroundColor: `${darkTheme.containedSecondaryButtonHoverBG} !important`,
            },
            selected: {
              backgroundColor: darkTheme.containedSecondaryButtonHoverBG,
            },
            "@media (hover:none)": {
              "&:hover": {
                color: darkTheme.color,
                backgroundColor: darkTheme.paperBg,
              },
              "&:focus": {
                color: darkTheme.color,
                backgroundColor: darkTheme.paperBg,
                borderColor: "transparent",
                outline: "#00000000",
              },
            },
          },
        },
        MuiButton: {
          containedPrimary: {
            color: darkTheme.primaryButtonColor,
            backgroundColor: darkTheme.gold,
            "&:hover": {
              backgroundColor: darkTheme.primaryButtonHoverBG,
              color: darkTheme.primaryButtonHoverColor,
            },
            "&:active": {
              backgroundColor: darkTheme.primaryButtonHoverBG,
              color: darkTheme.primaryButtonHoverColor,
            },
            "@media (hover:none)": {
              color: darkTheme.primaryButtonColor,
              backgroundColor: darkTheme.gold,
              "&:hover": {
                backgroundColor: darkTheme.primaryButtonHoverBG,
              },
            },
          },
          containedSecondary: {
            backgroundColor: darkTheme.paperBg,
            color: darkTheme.color,
            "&:hover": {
              backgroundColor: `${darkTheme.containedSecondaryButtonHoverBG} !important`,
            },
            "&:active": {
              backgroundColor: darkTheme.containedSecondaryButtonHoverBG,
            },
            "&:focus": {
              backgroundColor: darkTheme.paperBg,
            },
            "@media (hover:none)": {
              color: darkTheme.color,
              backgroundColor: darkTheme.paperBg,
              "&:hover": {
                backgroundColor: `${darkTheme.containedSecondaryButtonHoverBG} !important`,
              },
            },
          },
          outlinedPrimary: {
            color: darkTheme.gold,
            borderColor: darkTheme.gold,
            "&:hover": {
              color: darkTheme.outlinedPrimaryButtonHoverColor,
              backgroundColor: darkTheme.primaryButtonHoverBG,
            },
            "@media (hover:none)": {
              color: darkTheme.gold,
              borderColor: darkTheme.gold,
              "&:hover": {
                color: darkTheme.outlinedPrimaryButtonHoverColor,
                backgroundColor: `${darkTheme.primaryButtonHoverBG} !important`,
                textDecoration: "none !important",
              },
            },
          },
          outlinedSecondary: {
            color: darkTheme.color,
            borderColor: darkTheme.color,
            "&:hover": {
              color: darkTheme.outlinedSecondaryButtonHoverColor,
              backgroundColor: darkTheme.outlinedSecondaryButtonHoverBG,
              borderColor: darkTheme.gold,
            },
          },
          textPrimary: {
            color: "#A3A3A3",
            "&:hover": {
              color: darkTheme.gold,
              backgroundColor: "#00000000",
            },
            "&:active": {
              color: darkTheme.gold,
              borderBottom: "#F8CC82",
            },
          },
          textSecondary: {
            color: darkTheme.color,
            "&:hover": {
              color: darkTheme.textHighlightColor,
            },
          },
          "&.grid-button-text": {
            color: "#FFFFFF",
          },
        },
        MuiTypography: {
          root: {
            "&.grid-message-typography": {
              color: "#A3A3A3",
            },
            "&.chain-highlight": {
              color: "#DADADA",
            },
            "&.current": {
              color: darkTheme.gold,
            },
          },
        },
        MuiGrid: {
          root: {
            "&.grid-button": {
              borderColor: `#FFFFFF !important`,
              "&:hover": {
                backgroundColor: darkTheme.gridButtonHoverBackground,
              },
              "&.current": {
                borderColor: `${darkTheme.gold} !important`,
                backgroundColor: darkTheme.gridButtonActiveBackground,
                "&:hover": {
                  backgroundColor: darkTheme.gridButtonHoverBackground,
                },
              },
            },
          },
        },
      },
    },
    commonSettings,
  ),
);
