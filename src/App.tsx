import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { ThemeProvider } from './components/theme/theme-provider'
import { router } from './router'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />
      <ThemeProvider storageKey="react-theme" defaultTheme="dark">
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  )
}
