import './App.css'
import { NavLink, Outlet, Route, Routes } from "react-router";
import { Test } from './components/Test';
import { Home } from './components/Home';
import { Transactions } from './components/Transactions';
import { Debounce } from './components/Debounce';
import { Timeout } from './components/Timeout';
import { Hover } from './components/Hover';
import PhoneNumber from './components/PhoneNumberInput';
import { NewsFeed } from './components/NewsFeed';
import { InfiniteScrolling } from './components/InfiniteScrolling';
import { SWR } from './components/SWR';
import { WindowSize } from './components/WindowSize';
import { HocDemo } from './components/HocDemo';
import { ShoppingCart } from './components/ShoppingCart';
import { ContextDemo } from './components/ContextDemo';

const navlinks = [
  { path: '/', name: 'Home', component: <Home /> },
  { path: '/test', name: 'Static Component',  component: <Test /> },
  { path: '/transactions', name: 'API Example',  component: <Transactions /> },
  { path: '/debounce', name: 'Debounce',  component: <Debounce /> },
  { path: '/timeout', name: 'Custom Timeout',  component: <Timeout /> },
  { path: '/hover', name: 'Use Hover',  component: <Hover /> },
  { path: '/phone-number', name: 'Phone Number',  component: <PhoneNumber /> },
  { path: '/newsfeed', name: 'News Feed',  component: <NewsFeed /> },
  { path: '/infinite-scrolling', name: 'Infinite Scrolling',  component: <InfiniteScrolling /> },
  { path: '/swr', name: 'SWR',  component: <SWR /> },
  { path: '/window-size', name: 'Window Size',  component: <WindowSize/> },
  { path: '/hoc', name: 'Hoc Demo',  component: <HocDemo/> },
  { path: '/context', name: 'Context API',  component: <ContextDemo/> },
  { path: '/shopping', name: 'Shopping Cart',  component: <ShoppingCart/> }
];

function App() {

  return (
    <>
      <h1>React Examples</h1>
      <AppLinks />
      <Routes>
        {navlinks.map((nav)=>(<Route key={nav.path} path={nav.path} element={nav.component} />))}
        
        
        {/* <Route path="/test" element={<Test />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/debounce" element={<Debounce/>} />
        <Route path="/timeout" element={<Timeout/>} /> */}

      </Routes>
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