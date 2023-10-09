import logo from './logo.svg';
import './App.css';
import './dist/output.css'
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './header/header';
import LargeWithNewsletter from './footer/footer';
import Home from './home/home';
import Cards from './card/card';
function App() {
  return (
    <ChakraProvider>
          <main className='block w-full h-full '>
           <div className='flex flex-col items-center'>
           <div className='relative'>
           <Navbar/>
           <div className=''>
            <div className='w-full h-screen'>
            <div className='flex flex-col items-center justify-center'>
             <Home/>
            <Cards/>
              
            <LargeWithNewsletter/>
             </div>
            </div>
         
           </div>
           </div>
           </div>
          </main>
    </ChakraProvider>
  );
}

export default App;
