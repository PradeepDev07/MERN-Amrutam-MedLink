import React, { createContext, useCallback, useState } from 'react'

export const NotificationContext = createContext({
  notifications: [],
  showNotification: () => {},
  removeNotification: () => {},
})

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([])

  const removeNotification = useCallback((id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id))
  }, [])

  const showNotification = useCallback(({ message, type = 'info', timeout = 4000 }) => {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
    const note = { id, message, type }
    setNotifications((prev) => [note, ...prev])
    if (timeout > 0) setTimeout(() => removeNotification(id), timeout)
    return id
  }, [removeNotification])

  return (
    <NotificationContext.Provider value={{ notifications, showNotification, removeNotification }}>
      {children}
    </NotificationContext.Provider>
  )
}

export default NotificationProvider
