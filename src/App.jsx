import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const SignIn = React.lazy(() => import("./components/SignIn/Login"));
const SignUp = React.lazy(() => import("./components/Signup/SignUp"));
const Home = React.lazy(() => import("./components/Home/Home"));
const Error = React.lazy(() => import('./components/ErrorPage/Error'));
const ChatApp = React.lazy(() => import("./components/Application/ChatApp"));
const TermsOfService = React.lazy(() => import('./pages/Legal/TermsofService'));
const PrivacyPolicy = React.lazy(()=>import('./pages/Legal/PrivacyPolicy'))
const Cookies = React.lazy(()=>import('./pages/Legal/Cookies'))
const Aboutus = React.lazy(()=>import('./pages/Legal/Aboutus'))
const Contactus = React.lazy(() => import('./pages/Support/Contactus'));
const FAQ = React.lazy(()=>import('./pages/Support/FAQ'))
const Help = React.lazy(()=>import('./pages/Support/Help'))
const ReportAbuse = React.lazy(()=>import('./pages/Support/ReportAbuse'))
const CompanyPage = React.lazy(()=>import("./pages/About/Company"))
const BuildingPage = React.lazy(()=> import("./components/Home/components/BuildingPage"))
import Loader from "./components/Loader/Loader";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <React.Suspense fallback={<Loader/>}>
            <Home/>
          </React.Suspense>
        }/>
        <Route path='/login' element={
          <React.Suspense fallback={<Loader/>}>
            <SignIn/>
          </React.Suspense>
        }/>
        <Route path='/signup' element={
          <React.Suspense fallback={<Loader/>}>
            <SignUp/>
          </React.Suspense>
        }/>
        <Route path='/home' element={
          <React.Suspense fallback={<Loader/>}>
            <Home/>
          </React.Suspense>
        }/>
          <Route path="/chat" element={
              <React.Suspense fallback={<Loader/>}>
                <ChatApp />
              </React.Suspense>
          } />
          <Route path='/terms-of-service' element={
            <React.Suspense fallback={<Loader/>}>
              <TermsOfService />
            </React.Suspense>
          } />
          <Route path='/about-us' element={
            <React.Suspense fallback={<Loader/>}>
              <Aboutus />
            </React.Suspense>
          } />
          <Route path='/privacy-policy' element={
            <React.Suspense fallback={<Loader/>}>
              <PrivacyPolicy />
            </React.Suspense>
          } />
          <Route path='/cookie-policy' element={
            <React.Suspense fallback={<Loader/>}>
              <Cookies/>
            </React.Suspense>
          } />
          <Route path='/contact-us' element={
            <React.Suspense fallback={<Loader/>}>
              <Contactus />
            </React.Suspense>
          } />
          <Route path='/faq' element={
            <React.Suspense fallback={<Loader/>}>
              <FAQ />
            </React.Suspense>
          } />
          <Route path='/help' element={
            <React.Suspense fallback={<Loader/>}>
              <Help />
            </React.Suspense>
          } />
          <Route path='/report-abuse' element={
            <React.Suspense fallback={<Loader/>}>
              <ReportAbuse />
            </React.Suspense>
          } />
          <Route path="/company" element={
            <React.Suspense fallback={<Loader/>}>
              <CompanyPage />
            </React.Suspense>
          } />
          <Route path="/upcoming" element={
            <React.Suspense fallback={<Loader/>}>
              <BuildingPage />
            </React.Suspense>
          } />
          <Route path="*" element={
            <React.Suspense fallback={<Loader/>}>
              <Error />
            </React.Suspense>
          } />
      </Routes>
    </Router>
  );
}

export default App;