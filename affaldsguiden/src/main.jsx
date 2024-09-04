import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { SupabaseProvider } from './providers/SupabaseProvider.jsx'
import { SectionsProvider } from './providers/ContextProvider.jsx'
import { ArticlesProvider } from './providers/ContextProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SupabaseProvider>
      <SectionsProvider>
        <ArticlesProvider>
          <App />
        </ArticlesProvider>
      </SectionsProvider>
    </SupabaseProvider>
  </StrictMode>,
)
