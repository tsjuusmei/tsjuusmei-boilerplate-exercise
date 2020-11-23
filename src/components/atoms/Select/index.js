// import React, {
//   useState, useRef
// } from 'react'
// import PropTypes from 'prop-types'

// // Helpers
// import useOutsideClick from '@/hooks/useOutsideClick'

// // Styles
// import styles from './Select.module.scss'

// function Select({
//   id,
//   label,
//   variation = 'default',
//   placeholder,
//   options,
//   isCustom,
//   isDisabled,
//   isSuccess,
//   isError,
//   type = 'text',
//   onChange,
//   onFocus,
//   children,
//   ...props
// }) {
//   const [isFilled, setIsFilled] = useState(false)
//   const [isOpen, setIsOpen] = useState(false)

//   const selectNativeRef = useRef(null)
//   const selectCustomRef = useRef(null)

//   // Selected option
//   const [selectedLabel, setSelectedLabel] = useState(null)
//   const [selectedValue, setSelectedValue] = useState('placeholder')

//   useOutsideClick(selectCustomRef, closeSelectCustom)

//   function handleChange(e) {
//     setIsFilled(true)

//     const { value } = e.target
//     const label = e.target.options[e.target.selectedIndex].text

//     setSelectedValue(value)
//     setSelectedLabel(label)

//     if (onChange) {
//       onChange(e)
//     }
//   }

//   function toggleSelectCustom() {
//     if (isOpen) {
//       setIsOpen(false)
//     } else {
//       setIsOpen(true)
//     }
//   }

//   function closeSelectCustom() {
//     setIsOpen(false)
//   }

//   return (
//     <div className={styles.select}>
//       {label && (
//         <div id={id} className={styles.label}>
//           {label}
//           {isError && (
//             <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <circle cx="8" cy="8" r="7.5" fill="black" stroke="black" />
//               <path d="M7 3H9L8.8 10H7.2L7 3Z" fill="white" />
//               <circle cx="8" cy="12" r="1" fill="white" />
//             </svg>

//           )}
//         </div>
//       )}

//       <div className={`
//           ${styles['select-wrapper']}
//           ${styles[variation]}
//           ${isSuccess ? styles.success : null}
//           ${isError ? styles.error : null}
//         `}
//       >
//         <select
//           className={`
//             ${styles['select-native']}
//             ${isFilled ? styles.filled : null}
//           `}
//           value={selectedValue}
//           onChange={(e) => handleChange(e)}
//           placeholder={placeholder}
//           type={type}
//           disabled={isDisabled}
//           onFocus={onFocus}
//           ref={selectNativeRef}
//           aria-labelledby={id}
//           {...props}
//         >
//           <option value="placeholder" disabled>{placeholder}</option>
//           {options
//             ? options.map(({ label, value }, idx) => <option key={idx} value={value}>{label}</option>)
//             : children}
//         </select>

//         {/* Custom Select */}

//         {isCustom && (
//         <div
//           className={`
//             select-custom
//             ${isOpen ? 'is-active' : ''}
//           `}
//           ref={selectCustomRef}
//           aria-hidden={isOpen ? 'false' : 'true'}
//         >
//           <div
//             className="select-custom-trigger"
//             onClick={() => toggleSelectCustom()}
//           >
//             <span>{selectedLabel || placeholder}</span>
//           </div>

//           <div className="select-custom-options">
//             {options?.map(({ label, value }, idx) => (
//               <div
//                 key={idx}
//                 className={`
//                   select-custom-options-item
//                   ${selectedValue === value ? 'is-active' : ''}
//                 `}
//                 data-value={value}
//                 onClick={(e) => {
//                   const value = e.target.getAttribute('data-value')
//                   const label = e.target.innerText

//                   // Sync native select to have the same value
//                   selectNativeRef.current.value = value

//                   setSelectedLabel(label)
//                   setSelectedValue(value)

//                   setIsOpen(false)
//                 }}
//               >
//                 <span>{label}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//         )}
//       </div>
//     </div>
//   )
// }

// Select.propTypes = {
//   id: PropTypes.string,
//   label: PropTypes.string,
//   isSuccess: PropTypes.bool,
//   isError: PropTypes.bool,
//   variation: PropTypes.string,
//   type: PropTypes.string,
//   placeholder: PropTypes.string,
//   isDisabled: PropTypes.bool,
//   name: PropTypes.string.isRequired,
//   onChange: PropTypes.func,
//   onFocus: PropTypes.func,
//   children: PropTypes.any,
//   options: PropTypes.array,
//   isCustom: PropTypes.bool
// }

// export default Select
