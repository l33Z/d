'use client'

import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import AsyncSelect from 'react-select/async'
import '@/components/common/assets.css'
// import { Loader2 } from 'lucide-react'

import 'react-modern-calendar-datepicker/lib/DatePicker.css'
import { Calendar, utils } from 'react-modern-calendar-datepicker'
// import "../Notification/notification.css";
// import Modal from "@material-ui/core/Modal";
// import Button from "@material-ui/core/Button";
// import EventOutlinedIcon from "@material-ui/icons/EventOutlined";
// import { useTheme } from "@material-ui/core/styles";
// import { history } from "helpers/history";

export const MinimalButton = ({ text, baseClassName, loadingText, fitContent, loading, style, ...props }) => {
  return (
    <button {...props} className={`nf-buttons ${baseClassName ? baseClassName : 'px-5 py-2'}`} style={{ ...style }}>
      {loading ? loadingText : text}
      {loading && (
        <svg aria-hidden='true' role='status' className='inline w-4 h-4 mr-3 text-white animate-spin' viewBox='0 0 100 101' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
            fill='#E5E7EB'
          />
          <path
            d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
            fill='currentColor'
          />
        </svg>
      )}
    </button>
  )
}

export const WithIconButton = ({ text, baseClassName, loadingText, fitContent, loading, style, startIcon, endIcon, ...props }) => {
  return (
    <button {...props} className={`nf-buttons  ${baseClassName ? baseClassName : 'px-5 py-2'}`} style={{ ...style }}>
      {!loading && startIcon && startIcon}
      {loading ? loadingText : text}
      {!loading && endIcon && endIcon}
      {loading && (
        <svg aria-hidden='true' role='status' className='inline w-4 h-4 mx-3 text-white animate-spin' viewBox='0 0 100 101' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
            fill='#E5E7EB'
          />
          <path
            d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
            fill='currentColor'
          />
        </svg>
      )}
    </button>
  )
}

export const CustomChips = ({ text }) => <p className='h-4 px-4 mr-1.5 text-[#555555] w-max rounded-[30px] font-bold bg-[#e6e6e6] border border-placeholder_border text-[10px] flex justify-center items-center'>{text}</p>

export const StatusChip = ({ status, text }) => {
  const isActive = status === 'active'
  const color = isActive ? '#0085FF' : '#FF5F6E'
  const bgColor = isActive ? '#0085FF15)' : '#FF5F6E15'

  return <p className={`h-4 px-4 ${isActive ? 'text-[#0085FF]' : 'text-[#FF5F6E]'}  w-max rounded-[30px] font-bold ${isActive ? 'bg-[#0085FF15]' : 'bg-[#FF5F6E15]'} border  ${isActive ? 'border-[#0085FF]' : 'border-[#FF5F6E]'}   text-[10px] flex justify-center items-center`}>{text}</p>
}

export const AssetTab = ({ active, text, onClick }) => (
  <button className={`assets-buttons ${active && 'ass-acc'}`} onClick={onClick}>
    {text}
  </button>
)

export const DetailedDiv = ({ children, title, caption, addON }) => (
  <div className='asset-form-div'>
    <div className='tc_'>
      <h4>{title}</h4>
      <span>{caption}</span>
      {addON && (
        <div className='add-ons' onClick={addON.action}>
          {addON.text}
        </div>
      )}
    </div>
    <div className='p-3'>{children}</div>
  </div>
)

export const MinimalInput = ({ error, value, onChange = () => {}, label, w, baseStyles, labelStyles, InputStyles, isRequired, isExtraOnChange = false, ...props }) => (
  <div className='minimal-input' style={w ? { ...baseStyles, width: `${w}%` } : { ...baseStyles, width: 'auto' }}>
    <div className={`minimal-input-label ${error ? 'error-label' : ''} ${props.disabled ? 'disabled-label' : ''}`} style={labelStyles}>
      {label}
      {isRequired && <span style={{ color: 'red' }}>*</span>}
    </div>
    <input className={`minimal-input-base text-sm ${error ? 'error-input' : ''}`} style={InputStyles} {...props} value={value} onChange={isExtraOnChange ? e => onChange(e) : e => onChange(e.target.value)} />
    {error && error.error === true && <span className='error-msg'>{error.msg}</span>}
  </div>
)

export const MinimalTextArea = ({ error, value, onChange = () => {}, label, w, baseStyles, labelStyles, InputStyles, isRequired, ...props }) => (
  <div className='minimal-input' style={w ? { ...baseStyles, width: `${w}%` } : { ...baseStyles, width: 'auto' }}>
    <div className={`minimal-input-label ${error ? 'error-label' : ''}  ${props.disabled ? 'disabled-label' : ''}`} style={labelStyles}>
      {label}
      {isRequired && <span style={{ color: 'red' }}>*</span>}
    </div>
    <textarea className={`minimal-input-base ${error ? 'error-input' : ''}`} style={{ ...InputStyles, resize: 'none' }} {...props} value={value} onChange={onChange} />
    {error && error.error && <span className='error-msg'>{error.msg}</span>}
  </div>
)

export const MinimalSelect = ({ error, value, onChange, label, w, options, valueKey, labelKey, mainKey, ...props }) => (
  <div className='minimal-input' style={w ? { width: `${w}%` } : { width: 'auto' }}>
    <div className={`minimal-input-label ${error ? 'error-label' : ''}`}>{label}</div>
    <select className={`minimal-input-base  ${error.error && 'error-input'}`} {...props} value={value} onChange={e => onChange(e.target.value)}>
      {options.map(op => (
        <option value={op[valueKey]} key={op[mainKey]}>
          {op[labelKey]}
        </option>
      ))}
    </select>
    {error.error && <span className='error-msg'>{error.msg}</span>}
  </div>
)

export const MinimalStatusSelector = ({ value, onChange, label, w, _default, options }) => {
  const theme = useTheme()
  const activeStyle = { color: '#fff', background: theme.palette.primary.main }
  const inActiveStyle = { color: '#606060', background: '#fff' }
  return _default ? (
    <div className='minimal-input' style={w ? { width: `${w}%` } : { width: 'auto' }}>
      <div className='minimal-input-label'>{label}</div>
      <div className='d-flex'>
        <button className='minimal-input-base' style={value === 'ACTIVE' ? activeStyle : inActiveStyle} onClick={() => onChange('ACTIVE')}>
          Active
        </button>
        <button className='minimal-input-base' style={value === 'INACTIVE' ? activeStyle : inActiveStyle} onClick={() => onChange('INACTIVE')}>
          Inactive
        </button>
      </div>
    </div>
  ) : (
    <div className='minimal-input' style={w ? { width: `${w}%` } : { width: 'auto' }}>
      <div className='minimal-input-label'>{label}</div>
      <div className='d-flex'>
        {options.map(opt => (
          <button key={opt} className='minimal-input-base' style={value === opt.toUpperCase() ? { color: '#fff', background: theme.palette.primary.main } : {}} onClick={() => onChange(opt.toUpperCase())}>
            {opt}
          </button>
        ))}
      </div>
    </div>
  )
}

export const MinimalAutoComplete = ({ error, label, w, value, options, onChange = () => {}, placeholder, scrollToBottom, baseStyles = {}, labelStyles, inputStyles, errorStyles, isRequired, ...props }) => {
  const basic = {
    border: 0,
    display: 'flex',
    fontWeight: 800,
    padding: 0,
    borderRadius: '4px',
    background: '#eee',
    fontSize: '14px !important',
  }
  const getErrorStyle = () => {
    if (!error) return
    else
      return (errorStyles = {
        background: '#ff000021',
        border: '1px solid red',
        color: 'red',
      })
  }
  const styles = {
    menu: (provided, state) => ({
      ...provided,
      padding: '0 0 0 4px ',
      borderRadius: '4px',
      border: 0,
      outline: 0,
      overflowY: 'hidden',
    }),
    option: (provided, state) => ({
      ...provided,
      borderRadius: '4px',
      fontSize: '14px',
      background: state.isSelected ? '#efefef' : state.isFocused ? '#f7f7f7' : 'none',
      color: '#000',
    }),
    control: () => ({
      ...basic,
      ..._inputStyles,
      ...getErrorStyle(),
      '&:hover': { cursor: props.isDisabled ? 'not-allowed' : 'pointer' },
    }),
    menuList: base => ({
      ...base,
      maxHeight: '200px',
      overflowY: 'scroll',
      '::-webkit-scrollbar': {
        width: '4px',
      },
      '::-webkit-scrollbar-track': {
        background: '#f1f1f1',
      },
      '::-webkit-scrollbar-thumb': {
        background: '#888',
      },
      '::-webkit-scrollbar-thumb:hover': {
        background: '#555',
      },
    }),
    multiValueRemove: (base, state) => {
      return state.data.isFixed || props.isDisabled ? { ...base, display: 'none' } : base
    },
    multiValue: (base, state) => ({
      ...base,
      padding: '2px 7px',
      borderRadius: '30px',
      fontWeight: 400,
      border: '1px solid #D1D1D1',
      marginRight: '5px',
      // padding: '1px 4px',
      // paddingRight: 0,
    }),
  }
  const _labelStyles = labelStyles ? labelStyles : props.isDisabled ? { fontWeight: 800, color: '#a1a1a1' } : { fontWeight: 800 }
  const _inputStyles = inputStyles || {
    background: 'none',
    padding: '2px 6px',
    border: '1px solid #a1a1a1',
    fontSize: '14px',
  }
  return (
    <div className='minimal-input' style={w ? { width: `${w}%`, ...baseStyles } : { width: 'auto', ...baseStyles }}>
      <div className={`minimal-input-label ${error ? 'error-label' : ''}`} style={_labelStyles}>
        {label} {isRequired && <span style={{ color: 'red' }}>*</span>}
      </div>
      {props.async ? (
        <AsyncSelect cacheOptions {...props} options={options} styles={styles} onMenuScrollToBottom={scrollToBottom} placeholder={placeholder} value={value} onChange={v => onChange(v)} className={props.isDisabled ? 'react-select-disabled' : ''} />
      ) : (
        <Select {...props} options={options} styles={styles} onMenuScrollToBottom={scrollToBottom} placeholder={placeholder} value={value} onChange={v => onChange(v)} className={props.isDisabled ? 'react-select-disabled' : ''} />
      )}
      {error && error.error && <span className='error-msg'>{error.msg}</span>}
    </div>
  )
}

export const MinimalFilterSelector = ({ error, label, w, value, options, onChange, placeholder, scrollToBottom, labelStyles, inputStyles, errorStyles, ...props }) => {
  const styles = {
    indicatorSeparator: styles => ({ ...styles, display: 'none' }),
    menu: (provided, state) => ({
      ...provided,
      padding: '0 0 0 4px ',
      fontSize: '12px',
      borderRadius: '4px',
      border: 0,
      outline: 0,
      overflowY: 'hidden',
    }),
    option: (provided, state) => ({
      ...provided,
      padding: '4px 8px',
      borderRadius: '4px',
      fontSize: '12px',
      background: state.isSelected ? '#efefef' : state.isFocused ? '#f7f7f7' : 'none',
      color: '#000',
    }),
    control: () => ({
      border: 0,
      display: 'flex',
      fontWeight: 800,
      padding: 0,
      borderRadius: '4px',
      background: 'none',
      fontSize: '12px',
      border: '1px solid #a1a1a1',
    }),
    menuList: base => ({
      ...base,
      background: 'red',
      maxHeight: '200px',
      overflowY: 'scroll',
      fontSize: '12px',
      '::-webkit-scrollbar': {
        width: '4px',
      },
      '::-webkit-scrollbar-track': {
        background: '#f1f1f1',
      },
      '::-webkit-scrollbar-thumb': {
        background: '#888',
      },
      '::-webkit-scrollbar-thumb:hover': {
        background: '#555',
      },
    }),
    multiValueRemove: (base, state) => (state.data.isFixed || props.isDisabled ? { ...base, display: 'none' } : base),
    multiValue: (base, state) => ({ ...base, padding: '1px 4px' }),
  }
  return (
    <div className='minimal-input' style={{ width: '100%' }}>
      {props.async ? (
        <AsyncSelect cacheOptions {...props} options={options} styles={styles} onMenuScrollToBottom={scrollToBottom} placeholder={placeholder} value={value} onChange={v => onChange(v)} className={props.isDisabled ? 'react-select-disabled' : ''} />
      ) : (
        <Select {...props} options={options} styles={styles} onMenuScrollToBottom={scrollToBottom} placeholder={placeholder} value={value} onChange={v => onChange(v)} className={props.isDisabled ? 'react-select-disabled' : ''} />
      )}
    </div>
  )
}

// export const DetailPageHeaderSection = ({ title, subTitle, id }) => (
//   <div className="inspection-title" style={{ paddingTop: "0" }}>
//     <div style={{ fontSize: "16px", fontWeight: 800 }}>{title}</div>
//     <div className="inspection-breadcrum">
//       <div className="d-flex bread-crum">
//         <button
//           onClick={() => history.goBack()}
//           style={{
//             border: "none",
//             padding: 0,
//             fontWeight: 800,
//             outline: "none",
//             background: "transparent",
//             marginRight: "12px",
//           }}
//         >
//           {subTitle}
//         </button>
//         <span className="mr-2"> {">"} </span>
//         <span style={{ fontWeight: 800 }}>{id}</span>
//       </div>
//     </div>
//   </div>
// );

export const MinimalDatePicker = ({ error, label, date, setDate, w, labelStyles, InputStyles, onInputFocus, ...props }) => {
  const [selectedDay, setSelectedDay] = useState(date || utils().getToday())
  const [show, setShow] = useState(false)

  useEffect(() => {
    console.log(date)
    setSelectedDay(utils().getToday())
  }, [date])

  //
  const getDateString = date => {
    if (!date) return 'MM-DD-YYYY'
    return `${('0' + date.month).slice(-2)}-${('0' + date.day).slice(-2)}-${date.year}`
  }
  const handleOnDateChange = date => setSelectedDay(date)
  const onFocusInput = () => {
    setShow(true)
    onInputFocus && onInputFocus()
  }
  const handleClick = init => {
    setDate(selectedDay)
    !init && setShow(false)
  }
  const modalStyle = {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
    position: 'absolute',
  }
  const body = (
    <div style={modalStyle} className='add-task-modal'>
      <Calendar
        colorPrimary='#0055a3'
        value={selectedDay}
        onChange={handleOnDateChange}
        renderFooter={() => (
          <div style={{ padding: '0 16px 16px 16px' }} className='flex items-center justify-between'>
            <button className='nf-buttons' onClick={() => setShow(false)} style={{ width: '48%', padding: '8px', background: '#D5D5D5', color: 'black' }}>
              Cancel
            </button>
            <button className='nf-buttons' onClick={() => handleClick()} style={{ width: '48%', padding: '8px' }}>
              OK
            </button>
          </div>
        )}
        shouldHighlightWeekends
      />
    </div>
  )

  return (
    <>
      <div className='minimal-input' style={w ? { width: `${w}%` } : { width: 'auto' }}>
        <div className={`minimal-input-label ${error ? 'error-label' : ''}`} style={labelStyles}>
          {label}
        </div>
        <div className={`flex justify-between items-center minimal-input-base p-10 ${error ? 'error-input' : ''}`} onClick={onFocusInput} style={InputStyles} {...props}>
          {getDateString(date)}
          {/* <i className='ri-calendar-2-line ri-xl'></i> */}
        </div>
        {error && error.error && <span className='error-msg'>{error.msg}</span>}
      </div>
      {show && body}
      {/* <Calendar colorPrimary='#146481' value={selectedDay} /> */}
      {/* <Modal
        open={show}
        onClose={() => setShow(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal> */}
    </>
  )
}
