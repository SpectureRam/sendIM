import React, { useState, useEffect, useRef } from 'react';
import logo from "./../../assets/logo.png";
import supabase from "../../../supabaseClient";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownTimerRef = useRef(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user: currentUser }, error } = await supabase.auth.getUser();
      
      if (error) {
        console.error("Error fetching user:", error);
        setUser(null);
        setIsAuthenticated(false);
      } else {
        setUser(currentUser);
        setIsAuthenticated(!!currentUser);
      }
    };

    fetchUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
      setIsAuthenticated(!!session?.user);
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  const handleMouseEnter = (menu) => {
    clearTimeout(dropdownTimerRef.current);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const handleDropdownMouseEnter = () => {
    clearTimeout(dropdownTimerRef.current);
  };

  const handleDropdownMouseLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        toast.error('Error signing out. Please try again.');
        console.error('Error logging out:', error);
        return;
      }
      
      navigate('/');
      
      toast.success('Logged out successfully');
    } catch (error) {
      toast.error('An unexpected error occurred');
      console.error('Unexpected error during logout:', error);
    }
  }; 

  const UseCasesDropdown = () => (
    <div 
      onMouseEnter={handleDropdownMouseEnter}
      onMouseLeave={handleDropdownMouseLeave}
      className="absolute top-full left-0 mt-3 w-64 bg-white shadow-lg rounded-lg border border-gray-200 p-2"
    >
      <div className="grid grid-cols-1 gap-1">
        <a 
          href="/upcoming" 
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
        >
          Business Solutions
          <p className="text-xs text-gray-500 mt-1">Optimize your business processes</p>
        </a>
        <a 
          href="/upcoming" 
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
        >
          Productivity Tools
          <p className="text-xs text-gray-500 mt-1">Enhance workflow efficiency</p>
        </a>
        <a 
          href="/upcoming" 
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
        >
          Industry Applications
          <p className="text-xs text-gray-500 mt-1">Tailored solutions for specific sectors</p>
        </a>
      </div>
    </div>
  );

  const DevelopersDropdown = () => (
    <div 
      onMouseEnter={handleDropdownMouseEnter}
      onMouseLeave={handleDropdownMouseLeave}
      className="absolute top-full left-0 mt-3 w-64 bg-white shadow-lg rounded-lg border border-gray-200 p-2"
    >
      <div className="grid grid-cols-1 gap-1">
        <a 
          href="/upcoming" 
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
        >
          API Documentation
          <p className="text-xs text-gray-500 mt-1">Comprehensive guide for integration</p>
        </a>
        <a 
          href="/upcoming" 
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
        >
          SDK Resources
          <p className="text-xs text-gray-500 mt-1">Tools and libraries</p>
        </a>
        <a 
          href="/upcoming" 
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
        >
          Developer Tutorials
          <p className="text-xs text-gray-500 mt-1">Step-by-step learning</p>
        </a>
      </div>
    </div>
  );

  const ResourcesDropdown = () => (
    <div 
      onMouseEnter={handleDropdownMouseEnter}
      onMouseLeave={handleDropdownMouseLeave}
      className="absolute top-full left-0 mt-3 w-64 bg-white shadow-lg rounded-lg border border-gray-200 p-2"
    >
      <div className="grid grid-cols-1 gap-1">
        <a 
          href="/upcoming" 
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
        >
          Blog & Insights
          <p className="text-xs text-gray-500 mt-1">Latest articles and thoughts</p>
        </a>
        <a 
          href="/upcoming" 
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
        >
          Community Forums
          <p className="text-xs text-gray-500 mt-1">Connect with other users</p>
        </a>
        <a 
          href="/upcoming" 
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
        >
          Support Center
          <p className="text-xs text-gray-500 mt-1">Get help and guidance</p>
        </a>
      </div>
    </div>
  );

  return (
    <div className="sticky top-0 z-20 bg-white pl-6 pr-6">
      <div className="container mx-auto">
        <nav aria-label="Main" className="relative z-10 flex max-w-max flex-1 items-center justify-center min-w-full">
          <div className="flex w-full items-center justify-between gap-12 py-4">
            <div>
              <a href="/"><img src={logo} alt="Logo" className="h-8 w-auto" /></a>
            </div>
            
            <div className="hidden lg:flex space-x-4 relative">
              <ul className="group flex-1 list-none items-center gap-4 justify-center space-x-1 hidden lg:flex">
                <li><a href='/chat' className="inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-100">Chat Room</a></li>
                
                <li 
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('useCases')}
                  onMouseLeave={handleMouseLeave}
                >
                  <button 
                    className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium
                      ${activeDropdown === 'useCases' ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
                  >
                    Use Cases
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className={`ml-1 h-3 w-3 transition duration-200 ${activeDropdown === 'useCases' ? 'rotate-180' : ''}`}>
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                  {activeDropdown === 'useCases' && <UseCasesDropdown />}
                </li>
                
                <li 
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('developers')}
                  onMouseLeave={handleMouseLeave}
                >
                  <button 
                    className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium 
                      ${activeDropdown === 'developers' ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
                  >
                    Developers
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className={`ml-1 h-3 w-3 transition duration-200 ${activeDropdown === 'developers' ? 'rotate-180' : ''}`}>
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                  {activeDropdown === 'developers' && <DevelopersDropdown />}
                </li>
                
                <li 
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('resources')}
                  onMouseLeave={handleMouseLeave}
                >
                  <button 
                    className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium 
                      ${activeDropdown === 'resources' ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
                  >
                    Resources
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className={`ml-1 h-3 w-3 transition duration-200 ${activeDropdown === 'resources' ? 'rotate-180' : ''}`}>
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                  {activeDropdown === 'resources' && <ResourcesDropdown />}
                </li>
              </ul>
            </div>

            {isMobileMenuOpen && (
              <div className="absolute top-full left-0 w-full bg-white  shadow-md lg:hidden border-gray-600">
                <div className="flex justify-between items-center p-4 border-b border-gray-300">
                  <span className="text-lg font-semibold">Menu</span>
                  <button 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
                <ul className="space-y-2 p-4">
                  <li><a href="/chat" className="block py-2 border-b hover:bg-gray-100">Chat Room</a></li>
                  <li><a href="/use-cases" className="block py-2 border-b hover:bg-gray-100">Use Cases</a></li>
                  <li><a href="/developers" className="block py-2 border-b hover:bg-gray-100">Developers</a></li>
                  <li><a href="/resources" className="block py-2 hover:bg-gray-100">Resources</a></li>
                  
                  {!isAuthenticated && (
                    <>
                      <div className="border-t pt-4 mt-4">
                        <a 
                          href="/login" 
                          className="block w-full text-center py-2 border rounded-md mb-2 hover:bg-gray-50"
                        >
                          Log in
                        </a>
                        <a 
                          href="/signup" 
                          className="block w-full text-center py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        >
                          Sign up
                        </a>
                      </div>
                    </>
                  )}
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
                  <a href="/login" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 cursor-pointer hover:text-accent-foreground hover:text-blue-500 hover:decoration-accent">
                    Log in
                  </a>
                  <a href="/signup" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent-dark hover:text-accent-foreground-dark hover:ring-1 hover:shadow-md hover:scale-105 duration-200 active:bg-accent-dark active:text-accent-foreground h-10 px-4 py-2">
                    Sign up
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
        </nav>
      </div>
    </div>
  )
}

export default Navbar;