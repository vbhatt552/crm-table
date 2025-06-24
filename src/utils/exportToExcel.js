import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

/**
 * Exports an array of objects to an .xlsx file.
 * @param {Object[]} data  — your filteredData array
 * @param {string} filename — e.g. "crm_data.xlsx"
 */
export function exportToExcel(data, filename = 'crm_data.xlsx') {
  if (!data || data.length === 0) return;

  // 1. Convert JSON → Sheet
  const worksheet = XLSX.utils.json_to_sheet(data);

  // 2. Create a new Workbook and append the sheet
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'CRM Data');

  // 3. Write the workbook to binary array
  const wbout = XLSX.write(workbook, {
    bookType: 'xlsx',
    type: 'array',
  });

  // 4. Create Blob and trigger download
  const blob = new Blob([wbout], {
    type:
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8',
  });
  saveAs(blob, filename);
}
