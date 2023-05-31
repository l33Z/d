import { isEmpty } from 'lodash'

const TableComponent = ({ columns, loading, data, rowStyle = {}, onRowClick = () => { }, selectedRowKey = '', isForViewAction = false }) => {
  return (
    <table className='w-full text-center bg-white'>
      <thead className='bg-[#eeeeee] sticky top-0 left-0'>
        <tr>
          {columns.map(column => {
            return (
              <th key={column.name} className='px-6 py-3 text-sm'>
                {column.name}
              </th>
            )
          })}
        </tr>
      </thead>
      <tbody className='overflow-hidden '>
        {data.map((row, index) => {
          return (
            <tr className={`border-b ${isForViewAction ? 'cursor-pointer hover:bg-slate-200' : ''}`} key={index} onClick={() => onRowClick()}>
              {columns.map((col) => {
                return (
                  <td className='px-6 py-2.5 text-xs' key={col.name}>
                    {!isEmpty(col) && col.hasOwnProperty('render') ? col.render(row, index) : !isEmpty(row[col.accessor]) ? row[col.accessor] : 'NA'}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default TableComponent
