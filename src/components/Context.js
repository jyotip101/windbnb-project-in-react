import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
  const [isSubMenuLinkCityOpen, setIsSubMenuLinkCityOpen] = useState(true)
  const [isSubMenuLinkGuestOpen, setIsSubMenuLinkGuestOpen] = useState(false)

  const openSubMenu = () => {
    setIsSubMenuOpen(true)
  }
  const closeSubMenu = () => {
    setIsSubMenuOpen(false)
    setIsSubMenuLinkGuestOpen(false)
    setIsSubMenuLinkCityOpen(true)
  }

  const openSubMenuCityLinks = () => {
    if (isSubMenuLinkGuestOpen) {
      setIsSubMenuLinkGuestOpen(false)
    }
    setIsSubMenuLinkCityOpen(true)
  }

  const openSubMenuGuestLinks = () => {
    if (isSubMenuLinkCityOpen) {
      setIsSubMenuLinkCityOpen(false)
    }
    setIsSubMenuLinkGuestOpen(true)
  }

  return (
    <AppContext.Provider
      value={{
        isSubMenuOpen,
        openSubMenu,
        closeSubMenu,
        isSubMenuLinkCityOpen,
        openSubMenuCityLinks,
        isSubMenuLinkGuestOpen,
        openSubMenuGuestLinks,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
export { AppContext, AppProvider }
