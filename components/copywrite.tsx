import React from 'react'

export const CopyWrite = () => {
    const currentYear = new Date().getFullYear()
  return (
    <div className="mt-8 pt-6 border-t border-slate-200">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <p className="text-sm text-slate-500">&copy; {currentYear} Company Name. All rights reserved.</p>
      <p className="text-sm text-slate-500 mt-2 md:mt-0">Designed with care. Made with passion.</p>
    </div>
  </div>
  )
}
