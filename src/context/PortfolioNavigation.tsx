import { createContext, useContext, ReactNode } from 'react'

type PortfolioNavigation = {
  openFile: (fileName: string) => void
  goHome: () => void
}

const PortfolioNavigationContext = createContext<PortfolioNavigation | null>(null)

type PortfolioNavigationProviderProps = {
  children: ReactNode
  value: PortfolioNavigation
}

export function PortfolioNavigationProvider({ children, value }: PortfolioNavigationProviderProps) {
  return (
    <PortfolioNavigationContext.Provider value={value}>
      {children}
    </PortfolioNavigationContext.Provider>
  )
}

export function usePortfolioNavigation() {
  const ctx = useContext(PortfolioNavigationContext)
  if (!ctx) {
    throw new Error('usePortfolioNavigation must be used within PortfolioNavigationProvider')
  }
  return ctx
}
