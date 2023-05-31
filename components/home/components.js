export const TotalBids = ({ title, baseClassName, count, onClick = () => {} }) => {
  return (
    <div className={`bg-[#F5F5F5]  px-2 w-max rounded-sm flex flex-col items-center shadow-md ${baseClassName}`}>
      <h2 className='mt-3 text-sm font-medium'>{title}</h2>
      <h5 className='mt-3 text-lg font-bold'>{count}</h5>
      <button className='p-1.5 my-3 rounded-full w-36 bg-blue_base' onClick={onClick}>
        <i className='text-white ri-arrow-right-line ri-xl'></i>
      </button>
    </div>
  )
}
