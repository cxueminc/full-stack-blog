import Navbar from "./components/Navbar"

const App = () => {
  return (
    /* On mobile → px-4 (small padding), On tablets → px-8 (more padding), On laptops → px-16
    On large screens → px-32, On extra-large screens → px-64*/
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
      {/* NAVBAR */}
      <Navbar />
      {/* BREADCRUMB */}
      {/* INTRODUCTION */}
      {/* FEATURED POSTS */}
      {/* POST LIST */}
    </div> 
  )
}

export default App