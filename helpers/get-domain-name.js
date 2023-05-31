'use client'

function getCompanyCode() {
  const hostname = window.location.hostname.split('.')[0]
  const companyCode = hostname === 'localhost' || hostname === 'pass-5' ? 'ssd' : hostname
  return companyCode
}

export default getCompanyCode
