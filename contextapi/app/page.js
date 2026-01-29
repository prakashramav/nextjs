'use client'

import Header from "@/components/Header";
import ThemeWrapper from "@/components/ThemeWrapper";
const Home = () => {

  return (
      <ThemeWrapper>
          <Header />
          <h1 className="p-6 text-3xl font-bold">Home Page</h1>  
      </ThemeWrapper> 
  )
}

export default Home;