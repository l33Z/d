import { Drawer, FormSection } from '@/components/common/custom-components'

const BidDetails = ({ title, setClose }) => {
  const onClose = () => {
    setClose(false)
  }

  return (
    <Drawer onClose={onClose}>
      <div className='sticky top-0 right-0 flex items-center justify-between p-4 py-3 text-white bg-blue_base'>
        <h2 className='font-medium'>{title}</h2>
        <i className='cursor-pointer ri-close-fill ri-xl' onClick={onClose}></i>
      </div>

      <div className='p-2'>
        <FormSection title='Vehicle Detail' notExpandable>
          <div>
            <div className='flex items-center mb-2'>
              <p className='text-sm font-bold'>
                VIN: <span className='font-normal'> 1HGCM82633A4352</span>
              </p>
            </div>
            <div className='flex items-center mb-2'>
              <p className='w-1/2 text-sm font-bold'>
                Make: <span className='font-normal'> Ford</span>
              </p>
              <p className='w-1/2 text-sm font-bold'>
                Model: <span className='font-normal'> Thunder</span>
              </p>
            </div>
            <div className='flex items-center mb-2'>
              <p className='w-1/2 text-sm font-bold'>
                Year: <span className='font-normal'> 2001</span>
              </p>
              <p className='w-1/2 text-sm font-bold'>
                Trim: <span className='font-normal'> LX</span>
              </p>
            </div>
          </div>
        </FormSection>

        <FormSection title='Scrap' value='350' keepOpen>
          <div>
            <div className='flex items-center mb-2'>
              <p className='text-sm font-bold'>
                Weight: <span className='font-normal'> 3700Lbs</span>
              </p>
            </div>
          </div>
        </FormSection>

        <FormSection title='Catalic Converter' value='300' keepOpen>
          <div>
            <div className='flex items-center mb-2'>
              <p className='w-1/2 text-sm font-bold'>
                Pre: <span className='font-normal'> 2</span>
              </p>
              <p className='w-1/2 text-sm font-bold'>
                Post: <span className='font-normal'> 2</span>
              </p>
            </div>
          </div>
        </FormSection>
      </div>
    </Drawer>
  )
}

export default BidDetails
