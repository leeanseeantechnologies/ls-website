import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#6ee7d2', light: '#b8fff2', dark: '#27b9a2' },
    secondary: { main: '#7c9cff' },
    background: { default: '#06142b', paper: '#0c1d3b' },
    text: { primary: '#f7fbff', secondary: '#afc0dc' },
  },
  typography: {
    fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: { fontWeight: 800, letterSpacing: '-0.065em' },
    h2: { fontWeight: 750, letterSpacing: '-0.045em' },
    h3: { fontWeight: 700, letterSpacing: '-0.025em' },
    button: { fontWeight: 700, textTransform: 'none' },
  },
  shape: { borderRadius: 18 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 999, padding: '12px 22px', boxShadow: 'none' },
      },
    },
  },
})
