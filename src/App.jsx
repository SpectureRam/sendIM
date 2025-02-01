import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const SignIn = React.lazy(() => import("./components/SignIn/SignIn"));
const SignUp = React.lazy(() => import("./components/Signup/SignUp"));
const Home = React.lazy(() => import("./components/Home/Home"));
const Sample = React.lazy(() => import('./components/Sample/Sample'));
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

import ErrorBoundary from "./routes/errorBoundary";
import ProtectedRoute from "./routes/protectedRoute";
import authRoutes from './routes/AuthRoutes';
function App() {
  return (
    <ErrorBoundary>
    <Router>
      <Routes>
      {
      authRoutes.map((route) => (
        <Route key={route.id} path={route.path} element={route.element} />
      ))
      }
        <Route path='/' element={
          <React.Suspense fallback={<div>Loading...!</div>}>
            <Home/>
          </React.Suspense>
        }/>
        <Route path='/home' element={
          <React.Suspense fallback={<div>Loading...!</div>}>
            <Home/>
          </React.Suspense>
        }/>
        <Route path="/sample" element={
            <React.Suspense fallback={<div>Loading...!</div>}>
              <Sample />
            </React.Suspense>
          } />
          <Route path="/chat" element={
            <ProtectedRoute>
              <React.Suspense fallback={<div>Loading...!</div>}>
                <ChatApp />
              </React.Suspense>
            </ProtectedRoute>
          } />
          <Route path="/chat1" element={
            <React.Suspense fallback={<div>Loading...!</div>}>
              <ChatApp />
            </React.Suspense>
          } />
          <Route path='/terms-of-service' element={
            <React.Suspense fallback={<div>Loading...!</div>}>
              <TermsOfService />
            </React.Suspense>
          } />
          <Route path='/about-us' element={
            <React.Suspense fallback={<div>Loading...!</div>}>
              <Aboutus />
            </React.Suspense>
          } />
          <Route path='/privacy-policy' element={
            <React.Suspense fallback={<div>Loading...!</div>}>
              <PrivacyPolicy />
            </React.Suspense>
          } />
          <Route path='/cookie-policy' element={
            <React.Suspense fallback={<div>Loading...!</div>}>
              <Cookies/>
            </React.Suspense>
          } />
          <Route path='/contact-us' element={
            <React.Suspense fallback={<div>Loading...!</div>}>
              <Contactus />
            </React.Suspense>
          } />
          <Route path='/faq' element={
            <React.Suspense fallback={<div>Loading...!</div>}>
              <FAQ />
            </React.Suspense>
          } />
          <Route path='/help' element={
            <React.Suspense fallback={<div>Loading...!</div>}>
              <Help />
            </React.Suspense>
          } />
          <Route path='/report-abuse' element={
            <React.Suspense fallback={<div>Loading...!</div>}>
              <ReportAbuse />
            </React.Suspense>
          } />
          <Route path="/company" element={
            <React.Suspense fallback={<div>Loading...!</div>}>
              <CompanyPage />
            </React.Suspense>
          } />
          <Route path="*" element={
            <React.Suspense fallback={<div>Loading...!</div>}>
              <Error />
            </React.Suspense>
          } />
      </Routes>
    </Router>
    </ErrorBoundary>
  );
}

export default App;