import React, { useState } from 'react';
import { 
  Link, 
  LayoutDashboard, 
  Plus, 
  History, 
  User, 
  Package, 
  Zap, 
  Menu, 
  X, 
  ChevronDown,
  Bell,
  Moon,
  Settings,
  Wrench,
  BarChart3
} from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
  user: { name: string; email: string };
  onLogout: () => void;
  onNavigate?: (page: string) => void;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, user, onLogout, onNavigate }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('Dashboard');

  const navigation = [
    { name: 'Dashboard', href: '#', icon: LayoutDashboard, current: currentPage === 'Dashboard' },
    { name: 'Tools', href: '#', icon: Wrench, current: currentPage === 'Tools' },
    { name: 'Add Site', href: '#', icon: Plus, current: currentPage === 'Add Site' },
    { name: 'Link Analyzer', href: '#', icon: BarChart3, current: currentPage === 'Link Analyzer' },
    { name: 'Link History', href: '#', icon: History, current: currentPage === 'Link History' },
    { name: 'Account', href: '#', icon: User, current: currentPage === 'Account' },
    { name: 'Packages', href: '#', icon: Package, current: currentPage === 'Packages' },
    { name: 'Integration', href: '#', icon: Zap, current: currentPage === 'Integration' },
  ];

  const handleNavClick = (pageName: string) => {
    setCurrentPage(pageName);
    if (onNavigate) {
      if (pageName === 'Link Analyzer') {
        onNavigate('link-analyzer');
      } else {
        onNavigate(pageName.toLowerCase().replace(' ', '-'));
      }
    }
  };
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 flex z-40 md:hidden ${sidebarOpen ? '' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-slate-800">
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              type="button"
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-6 w-6 text-white" />
            </button>
          </div>
          <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div className="flex-shrink-0 flex items-center px-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Link className="w-5 h-5 text-white" />
              </div>
              <span className="ml-2 text-xl font-bold text-white">Linklister</span>
            </div>
            <nav className="mt-5 px-2 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.name)}
                  className={`${
                    item.current
                      ? 'bg-slate-700 text-white'
                      : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                  } group flex items-center px-2 py-2 text-base font-medium rounded-md w-full text-left`}
                >
                  <item.icon className="mr-4 h-6 w-6" />
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="flex-1 flex flex-col min-h-0 bg-slate-800">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Link className="w-5 h-5 text-white" />
              </div>
              <span className="ml-2 text-xl font-bold text-white">Linklister</span>
            </div>
            <nav className="mt-5 flex-1 px-2 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.name)}
                  className={`${
                    item.current
                      ? 'bg-slate-700 text-white'
                      : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                  } group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full text-left`}
                >
                  <item.icon className="mr-3 h-6 w-6" />
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="md:pl-64 flex flex-col flex-1">
        <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-slate-900">
          <button
            type="button"
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Top navigation */}
        <div className="bg-slate-800 shadow-sm border-b border-slate-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <select className="bg-slate-700 text-white border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option>Select a site...</option>
                  <option>dreamstime.com</option>
                </select>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-sm text-slate-300">Credits: 0 out of 0</span>
                <button className="text-slate-300 hover:text-white">
                  <Bell className="h-5 w-5" />
                </button>
                <button className="text-slate-300 hover:text-white">
                  <Moon className="h-5 w-5" />
                </button>
                
                <div className="relative">
                  <button
                    onClick={() => setAccountDropdownOpen(!accountDropdownOpen)}
                    className="flex items-center space-x-2 text-slate-300 hover:text-white"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-medium">
                        {user.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <ChevronDown className="h-4 w-4" />
                  </button>

                  {accountDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                      <div className="px-4 py-2 text-sm text-gray-700 border-b">
                        <div className="font-medium">{user.name}</div>
                        <div className="text-gray-500">{user.email}</div>
                      </div>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <Settings className="inline w-4 h-4 mr-2" />
                        Settings
                      </a>
                      <button
                        onClick={onLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Sign out
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;