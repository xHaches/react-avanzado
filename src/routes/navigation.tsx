import { Suspense } from "react";
import { BrowserRouter, NavLink, Routes, Route, Navigate } from "react-router-dom"
import { routes } from './routes';
import logo from '../assets/react.svg'

export const Navigation = () => {
  return (
    <BrowserRouter>
        <Suspense fallback={<span>Loading...</span>}>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo" className="img-demo" />
                    <ul>
                        {/* TODO: crear navlinkdinamicos */}
                        {
                            routes.map(({to, name}) => {
                                return (
                                    <li key={to}>
                                        <NavLink to={to} className={ ({isActive}) => isActive ? 'nav-active' : '' }>{name}</NavLink>
                                    </li>        
                                )
                            })
                        }
                    </ul>
                </nav>

                <Routes>
                    {
                        routes.map(({Component, path}) => (
                            <Route path={path} element={ <Component /> } key={path} />
                        ))
                    }
                    
                    <Route path="/*" element={ <Navigate to={routes[0].to} replace /> } />
                </Routes>
            </div>
        </Suspense>
    </BrowserRouter>
  )
}
