import React from 'react'
import EarthmapSwitcher from './earthMapSwitcher' // Adjust path
import ResponsiveGlobe from './responsiveGlobe' // Adjust path

const WM = () => {
  // This component is now much simpler. It just sets up the layout.
  // The dynamic parts are handled by the client components.
  return (
    <section className="relative w-full flex justify-center items-center py-12 sm:py-16 md:py-24 lg:py-32 overflow-visible">
      {/* Container for the background map */}
      <div className="relative z-10 w-full  flex justify-center"> {/* Optional: Constrain max width */}
        <EarthmapSwitcher />
      </div>

      {/* The Globe sits on top, positioned absolutely by its own client component */}
      <ResponsiveGlobe />
    </section>
  )
}

export default WM
