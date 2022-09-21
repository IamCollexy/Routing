import {Routes, Route, Navigate} from 'react-router-dom';
import React, {Suspense} from 'react'
import Layout from './components/layout/Layout';
import Comments from './components/comments/Comments';
import LoadingSpinner from './components/UI/LoadingSpinner';

// Lazy loading...
const NewQuotes = React.lazy(() => import('./pages/NewQuotes'));
const QuotesDetails = React.lazy(() => import('./pages/QuotesDetails'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const AllQuotes = React.lazy(() => import('./pages/AllQuotes'));
// .....

const App = () => {

  return (
  
  <Layout>
    <Suspense fallback={<div className='centered'>
      <LoadingSpinner/>
    </div>}>
  <Routes>
  <Route path='/' element={<Navigate to="/quotes"/>}/>
    <Route path="/quotes" element={<AllQuotes/>}/>
    <Route path="/quotes/:quotesId/*" element={<QuotesDetails/>}>
    <Route path='comments' element={<Comments/>}/>
    </Route>
    <Route path="/add-new-quotes" element={<NewQuotes/>}/>
    <Route path='*' element={<NotFound/>}/>
  </Routes>
  </Suspense>
  </Layout>

  )
}

export default App






















// import React from 'react'
// import { Navigate, Route, Routes } from 'react-router-dom';
// import Welcome from './pages/Welcome';
// import Products from './pages/Products';
// import MainHeader from './components/MainHeader';
// import ProductDetail from './pages/ProductDetail';

// const App = () => {
  
//   return (
//     <div>
      
//     <header>
//     <MainHeader/>
//     </header>
      
//     <main>
    
//     <Routes>
//      <Route path='/' element={<Navigate to='/welcome'/>}/>
//     <Route path="/welcome/*" element={<Welcome/>}>
//     <Route path="new-user" element={<p>Welcome, new user!</p>}/>
//     </Route>
//     <Route path="/products" element={<Products/>}/>
//     <Route path="/products/:productId" element={<ProductDetail/>}/>
//     </Routes>
  
//    </main>

//     </div>
 
//   );
// }

// export default App