import { useState } from "react";
import { Menu, X, Home, FileText, Layers, User, Settings, LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

// NavItem component for sidebar links
const NavItem = ({ to, icon, label, badge, onClick }) => {
    const location = useLocation();
    const isActive = location.pathname === to;
    
    return (
      <Link 
        to={to}
        className={`flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all 
          hover:bg-blue-50 hover:bg-opacity-80 hover:text-blue-900
          ${isActive ? 'bg-blue-50 bg-opacity-80 text-blue-900' : ''}`}
        onClick={() => onClick && onClick()}
      >
        <div className="grid place-items-center mr-4">
          {icon}
        </div>
        {label}
        {badge && (
          <div className="grid place-items-center ml-auto justify-self-end">
            <div className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-blue-500/20 text-blue-900 py-1 px-2 text-xs rounded-full">
              <span>{badge}</span>
            </div>
          </div>
        )}
      </Link>
    );
  };

function SidebarLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Mobile menu button */}
      <div className="md:hidden flex items-center p-4">
        <button 
          onClick={toggleSidebar}
          className="text-gray-700 hover:text-blue-900 focus:outline-none"
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <span className="ml-4 text-xl font-semibold">Priyanka Driving School - Learning</span>
      </div>

      {/* Sidebar - hidden on mobile by default, shown when toggled or on larger screens */}
      <div 
        className={`
bg-clip-border rounded-xl bg-white text-gray-700 shadow-xl shadow-blue-gray-900/5
          ${sidebarOpen ? 'block' : 'hidden'} md:block
          fixed md:relative z-10 h-screen
          w-3/4 md:w-full md:max-w-[20rem] p-4
          transition-all duration-300 ease-in-out
        `}
      >
        <div className="flex justify-between items-center mb-2 p-4">
          <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900">Priyanka Driving School - Learning</h5>
          <button 
            onClick={toggleSidebar}
            className="md:hidden text-gray-700 hover:text-blue-900 focus:outline-none"
          >
            <X size={20} />
          </button>
        </div>
        <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
          <NavItem to="/dashboard" icon={<Home size={20} />} label="Dashboard" onClick={toggleSidebar} />
          <NavItem to="/dashboard/road-signs" icon={<FileText size={20} />} label="Road Signs" onClick={toggleSidebar} />
          <NavItem to="/dashboard/papers" icon={<FileText size={20} />} label="Papers" onClick={toggleSidebar} />
          <NavItem to="/dashboard/profile" icon={<User size={20} />} label="Profile" onClick={toggleSidebar} />
          <NavItem to="/dashboard/settings" icon={<Settings size={20} />} label="Settings" onClick={toggleSidebar} />
          <NavItem to="/dashboard/logout" icon={<LogOut size={20} />} label="Log Out" onClick={toggleSidebar} />
        </nav>
      </div>

      {/* Overlay to close sidebar when clicked outside (mobile only) */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-0 md:hidden" 
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content */}
      <div className="w-full">
        {/* <div className="text-sm text-gray-700 py-1"> */}
          <main className="flex-1">
            {children}
          </main>
        {/* </div> */}
      </div>
    </div>
  );
}

export default SidebarLayout;