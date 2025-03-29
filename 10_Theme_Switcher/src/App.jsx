
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/Theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState()

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  

  return (
    
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <label class="flex items-center cursor-pointer">
  {/* <!-- Hidden Checkbox (peer) --> */}
  <input type="checkbox" class="sr-only peer" />

  {/* <!-- Toggle Track --> */}
  <div class="w-10 h-5 bg-gray-300 rounded-full relative peer-checked:bg-blue-500 transition-colors">
    {/* <!-- Toggle Circle --> */}
    <div class="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
  </div>

  {/* <!-- Label Text --> */}
  <span class="ml-3 text-gray-800">Toggle Theme</span>
</label>

      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className=" w-full max-w-sm mx-auto flex justify-end mb-4">
                
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card /> 
              </div>
          </div>
      </div>
     </ThemeProvider>
  )
}

export default App