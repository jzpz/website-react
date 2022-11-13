/*export const DarkTheme = ({
    name: "dark",
    colors: {
        background: "#050505",
        content: "#0d0d0d",
        text: "white",
        base: "black",
    }
})

export const LightTheme = ({
    name: "light",
    colors: {
        background: "#fbfbfb",
        content: "#fdfdfd",
        text: "black",
        base: "#ffffff",
    }
})*/

export const ColorPalette = (mode) => ({
    palette: {
      mode,
      primary: {
        ...(mode === 'dark' && {
          main: "red",
        }),
      },
      ...(mode === 'dark' && {
        background: {
          default: "#050505",
          paper: "#050505",
        },
      }),
      text: {
        ...(mode === 'light'
          ? {
              primary: "white",
              secondary: "gray",
            }
          : {
              primary: '#fff',
              secondary: "gray",
            }),
      },
    },
  });