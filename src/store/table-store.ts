import { create } from 'zustand'

export interface TableStore {
  tableStates: Record<string, unknown>
  setTableState: <T>(tableId: string, data: T) => void
  resetTableState: (tableId: string) => void
}

export const useTableStore = create<TableStore>((set) => ({
  tableStates: {},
  setTableState: (tableId, data) =>
    set((state) => ({
      tableStates: { ...state.tableStates, [tableId]: data },
    })),
  resetTableState: (tableId) =>
    set((state) => {
      const newStates = { ...state.tableStates }
      delete newStates[tableId]
      return { tableStates: newStates }
    }),
}))
