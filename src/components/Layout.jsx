import React from 'react';
import { Outlet } from 'react-router-dom';
import './LoginPage.css'

function Layout() {

  return (
    <div>
      <header>
        <div className="header w-full bg-red-600">
        <img src="/redroadicon.svg" alt="REDROAD logo" className="header-image h-8" />
        </div>
      </header>
      <aside>
        {/* Your sidebar content */}
      </aside>
      <main>
        <Outlet />
      </main>
      <footer>
        {/* Your footer content */}
      </footer>
    </div>
    
  )
}

export default Layout