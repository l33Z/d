import toast from 'react-hot-toast'

export const Toast = {
  success: msg =>
    toast.success(
      t => (
        <div className='toast-div success'>
          <div className='flex items-center justify-between'>
            <div className='toast-title'>Success !</div>
            <div onClick={() => toast.dismiss(t.id)}>
              <i className='p-2 rounded-full cursor-pointer ri-close-fill ri-1x hover:bg-slate-100 aspect-square'></i>
            </div>
          </div>
          <div className='toast-msg'>{msg}</div>
        </div>
      ),
      {
        duration: 4000,
        position: 'top-right',
      }
    ),
  error: msg =>
    toast.error(
      t => (
        <div className='toast-div success'>
          <div className='flex items-center justify-between'>
            <div className='toast-title'>Error !</div>
            <div onClick={() => toast.dismiss(t.id)}>
              <i className='p-2 rounded-full cursor-pointer ri-close-fill ri-1x hover:bg-slate-100 aspect-square'></i>
            </div>
          </div>
          <div className='toast-msg'>{msg}</div>
        </div>
      ),
      {
        duration: 4000,
        position: 'top-right',
      }
    ),
}
