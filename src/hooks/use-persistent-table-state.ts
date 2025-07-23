import { useCallback, useEffect, useMemo } from 'react'
import { useRouter } from 'next/router'
import { useTableStore } from '@/store/table-store'

export const usePersistentTableState = <T>(tableId: string, rawInitialState: T) => {
  const initialState = useMemo(() => rawInitialState, [rawInitialState])

  const { tableStates, setTableState, resetTableState } = useTableStore()

  const persistentState = useMemo(() => {
    const stored = tableStates[tableId]
    return stored ? { ...initialState, ...stored } : initialState
  }, [tableStates, tableId, initialState])

  const setPersistentState = (newState: T | ((prevState: T) => T)) => {
    const currentState = (tableStates[tableId] ?? initialState) as T
    const finalState = typeof newState === 'function' ? (newState as (prevState: T) => T)(currentState) : newState
    setTableState(tableId, finalState)
  }

  const resetPersistentState = useCallback(() => {
    resetTableState(tableId)
    setTableState(tableId, initialState)
  }, [resetTableState, setTableState, tableId, initialState])

  const router = useRouter()
  const baseUrl = useMemo(() => router.asPath.split('?')[0], [router.asPath])

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      const newBase = url.split('?')[0]
      if (!newBase?.startsWith(String(baseUrl))) {
        resetPersistentState()
      }
    }
    router.events.on('routeChangeStart', handleRouteChange)
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [router.events, baseUrl, resetPersistentState])

  return [persistentState, setPersistentState, resetPersistentState] as const
}
