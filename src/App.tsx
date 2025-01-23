import './App.css'
import { NavLink, Outlet, Route, Routes } from "react-router";
// import { Test } from './components/Test';
import { Home } from './components/Home';
import { lazy, Suspense } from 'react';
import { getLazy } from './lazy-load';

const Test = lazy(() => import('./components/Test'));

const Transactions  = getLazy('./components/Transactions', 'Transactions')
const Debounce  = getLazy('./components/Debounce', 'Debounce')
const Timeout  = getLazy('./components/Timeout', 'Timeout')
const NewsFeed  = getLazy('./components/NewsFeed', 'NewsFeed')
const InfiniteScrolling  = getLazy('./components/InfiniteScrolling', 'InfiniteScrolling')
const SWR  = getLazy('./components/SWR', 'SWR')
const WindowSize  = getLazy('./components/WindowSize', 'WindowSize')
const HocDemo  = getLazy('./components/HocDemo', 'HocDemo')
const ShoppingCart  = getLazy('./components/ShoppingCart', 'ShoppingCart')
const ContextDemo  = getLazy('./components/ContextDemo', 'ContextDemo')

const Hover  = getLazy('./components/Hover', 'Hover')
const PhoneNumber = getLazy('./components/PhoneNumberInput');

const CssDemo = getLazy('./components/CssDemo', 'CssDemo');
const CallBackDemo = getLazy('./components/CallBackDemo', 'CallBackDemo');

const navlinks = [
  { path: '/', name: 'Home', component: <Home /> },
  { path: '/test', name: 'Static Component', component: <Test /> },
  { path: '/transactions', name: 'API Example', component: <Transactions /> },
  { path: '/debounce', name: 'Debounce', component: <Debounce /> },
  { path: '/timeout', name: 'Custom Timeout', component: <Timeout /> },
  { path: '/hover', name: 'Use Hover', component: <Hover /> },
  { path: '/phone-number', name: 'Phone Number', component: <PhoneNumber /> },
  { path: '/newsfeed', name: 'News Feed', component: <NewsFeed /> },
  { path: '/infinite-scrolling', name: 'Infinite Scrolling', component: <InfiniteScrolling /> },
  { path: '/swr', name: 'SWR', component: <SWR /> },
  { path: '/window-size', name: 'Window Size', component: <WindowSize /> },
  { path: '/hoc', name: 'Hoc Demo', component: <HocDemo /> },
  { path: '/context', name: 'Context API', component: <ContextDemo /> },
  { path: '/shopping', name: 'Shopping Cart', component: <ShoppingCart /> },
  { path: '/css-demo', name: 'CSS Demo', component: <CssDemo /> },
  { path: '/callback', name: 'Call back', component: <CallBackDemo /> }

];

function App() {

  return (
    <>
      <h1>React Examples</h1>
      <AppLinks />
      <Suspense fallback={<h1>Loading.....</h1>}>
        <Routes>
          {navlinks.map((nav) => (<Route key={nav.path} path={nav.path} element={nav.component} />))}
        </Routes>
      </Suspense>
      {/* <AppLinks /> */}
      <Outlet />
      {/* <Transactions list={data} /> */}

    </>
  )
}
export default App

const AppLinks = () => {


  return navlinks.map(({ path, name }) => (
    <p style={{ display: 'inline' }} key={path}>
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive ? "active" : ""
        }
      >
        {name}
      </NavLink> &nbsp;
    </p>
  ))

};