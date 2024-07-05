import { useState } from 'react'
import { Route , Routes } from 'react-router-dom'
import '../src/styles/mainStyle.css'
import { MainDataDisplayComponent } from './components/MainDataDisplayComponent'
import { SingleProductComponent } from './components/SingleProduct/SingleProductComponent'
import { LoginComponent } from './components/login/LoginComponent'
import { EnlargeProductImageComponent } from './components/SingleProduct/EnlargeProductImageComponent'
import { ForgetPswdComponent } from './components/login/ForgetPswdComponent'
import { CartComponent } from './components/cart/CartComponent'
import { Beautiful_Curls } from './components/category/Beautiful_Curls'
import { ProtectedRoute } from './ProtectedRoute'
import { MoveComponentMultipleData } from './components/bodyComponents/MoveComponentMultipleData'

function App() {
  
  return (
    <div>
       <Routes>
               <Route path='/' element={<MainDataDisplayComponent/>}/>
               <Route path='/product' element={<ProtectedRoute><SingleProductComponent/></ProtectedRoute>} />
               <Route path='/login' element={<LoginComponent/>} />
               <Route path='/enlargeImage' element={<EnlargeProductImageComponent/>} />
               <Route path='/forgetPswdComponent' element={<ForgetPswdComponent/>} />
               <Route path='/cart' element={<ProtectedRoute><CartComponent/></ProtectedRoute>} />
               <Route path='/category/:name' element={<MoveComponentMultipleData/>} />
       </Routes>
        
    </div>
  )
}

export default App
