import { type Table } from '@tanstack/react-table'
import { download, generateCsv, mkConfig } from 'export-to-csv'
import { toast } from 'sonner'

type CsvCompatibleType = string | number | boolean
export type CsvExportableData = Record<string, CsvCompatibleType>

type UseExportCsvOptions<TData> = {
  table: Table<TData>
  fileName: string
  customizeCsvOutput?: (data: TData) => CsvExportableData
}

export const useExportCsv = <TData>({ table, fileName, customizeCsvOutput }: UseExportCsvOptions<TData>) => {
  const csvConfig = mkConfig({
    fieldSeparator: ',',
    filename: fileName,
    decimalSeparator: '.',
    useKeysAsHeaders: true,
  })

  const mapDataForCsv = (data: TData): CsvExportableData =>
    customizeCsvOutput ? customizeCsvOutput(data) : (data as unknown as CsvExportableData)

  // eslint-disable-next-line @typescript-eslint/require-await
  const exportData = async (data: TData[]): Promise<void> => {
    try {
      const csvData = data.map(mapDataForCsv)
      const csv = generateCsv(csvConfig)(csvData)
      download(csvConfig)(csv)
    } catch (error) {
      console.error('Failed to export data:', error)
      toast.error(`Failed to export data.`)
      throw new Error('Export failed')
    }
  }

  const exportAll = async () => {
    try {
      const allData = table.getCoreRowModel().rows.map((row) => row.original)
      await exportData(allData)
      toast.success(`All rows exported successfully!`)
    } catch (error) {
      // Error is handled in exportData, so no need to log or toast again here
    }
  }

  const exportSelected = async () => {
    try {
      const selectedRowIds = table.getState().rowSelection
      const selectedRows = table
        .getCoreRowModel()
        .rows.filter((row) => selectedRowIds[row.id])
        .map((row) => row.original)
      await exportData(selectedRows)
      toast.success(`Selected rows exported successfully!`)
    } catch (error) {
      // Error is handled in exportData, so no need to log or toast again here
    }
  }

  return { exportAll, exportSelected }
}
