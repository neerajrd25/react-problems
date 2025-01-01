import './App.css'
import { NavLink, Outlet, Route, Routes } from "react-router";
import { Test } from './components/Test';
import { Home } from './components/Home';
import { Transactions } from './components/Transactions';
import { Debounce } from './components/Debounce';

function App() {

  return (
    <>
      <h1>React Examples</h1>
      <AppLinks />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/debounce" element={<Debounce/>} />

      </Routes>
      {/* <AppLinks /> */}
      <Outlet />
      {/* <Transactions list={data} /> */}

    </>
  )
}
export default App

const AppLinks = () => {
  const navlinks = [
    { path: '/', name: 'Home' },
    { path: '/test', name: 'Static Component' },
    { path: '/transactions', name: 'API Example' },
    { path: '/debounce', name: 'Debounce' }

  ];

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