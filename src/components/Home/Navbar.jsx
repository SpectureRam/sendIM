import { useState, useEffect } from 'react';
import logo from "./../../assets/logo.png";
import {auth} from "../../../firebase";
import { signOut } from 'firebase/auth';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsAuthenticated(!!user); // If a user object exists, the user is authenticated
    });
    return () => unsubscribe(); // Cleanup on component unmount
  }, []);

  const toggleDropDown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  }

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="sticky top-0 z-20 bg-white pl-6 pr-6">
      <div className="container mx-auto">
        <nav aria-label="Main" data-orientation="horizontal" dir="ltr"
          className="relative z-10 flex max-w-max flex-1 items-center justify-center min-w-full">
          <div className="flex w-full items-center justify-between gap-12 py-4">
            {/*Logo Area*/}
            <div>
              <a href="/"><img src={logo} alt="Logo" className="h-8 w-auto" /></a>
            </div>
            {/*DT Area*/}
            <div className="hidden lg:flex space-x-4 relative">
              <ul data-orientation="horizontal"
                className="group flex-1 list-none items-center gap-4 justify-center space-x-1 hidden lg:flex" dir="ltr">
                <li><a href='/chat'>
              <button id="radix-:R0:-trigger-radix-:Rkb:" data-state="closed" aria-expanded="false"
                aria-controls="radix-:R0:-content-radix-:Rkb:"
                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 group"
                data-radix-collection-item="">
                Chat Room
              </button></a>
            </li>
            <li>
              <button id="radix-:R0:-trigger-radix-:R14b:" data-state="closed" aria-expanded="false"
                aria-controls="radix-:R0:-content-radix-:R14b:"
                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 group"
                data-radix-collection-item="">
                Use cases
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="lucide lucide-chevron-down relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                  aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
            </li>
            <li>
              <button id="radix-:R0:-trigger-radix-:R1kb:" data-state="closed" aria-expanded="false"
                aria-controls="radix-:R0:-content-radix-:R1kb:"
                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 group"
                data-radix-collection-item="">
                Developers
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="lucide lucide-chevron-down relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                  aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
            </li>
            <li>
              <button id="radix-:R0:-trigger-radix-:R24b:" data-state="closed" aria-expanded="false"
                aria-controls="radix-:R0:-content-radix-:R24b:"
                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 group"
                data-radix-collection-item="">
                Resources
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="lucide lucide-chevron-down relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                  aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
            </li>
          </ul>
        </div>
        {/* Mobile View Area */}
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-md lg:hidden">
              <ul className="space-y-4 p-4">
                <li>
                  <a href="/chat" className="block">Chat Room</a>
                </li>
                <li>
                  <a href="/use-cases" className="block">Use Cases</a>
                </li>
                <li>
                  <a href="/developers" className="block">Developers</a>
                </li>
                <li>
                  <a href="/resources" className="block">Resources</a>
                </li>
              </ul>
            </div>
          )}
        <div className="hidden items-center gap-4 lg:flex">
        {isAuthenticated ? (
                <button
                  onClick={handleLogout}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                >
                  Logout
                </button>
              ) : (
                <>
          <a href="/login"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
            Log in</a>
            <a href="/signup"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
            Start now<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="lucide lucide-chevron-right ml-2 size-4">
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </a>
          </>
        )}
        </div>
        <div className="flex items-center gap-4 lg:hidden">
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Main Menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="lucide lucide-menu size-4">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
      {/*<div className="absolute left-0 top-full flex justify-center"></div>*/}
    </nav>
  </div>
</div>
  )
}

export default Navbar;