import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Package, Truck, CheckCircle, User, LogOut, Settings, Clock } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export const UserProfileModal: React.FC = () => {
  const { isProfileOpen, setIsProfileOpen } = useAppContext();

  // Mock past orders with status
  const mockOrders = [
    {
      id: 'ORD-2023-101',
      date: 'Oct 15, 2023',
      total: '₹3,450',
      status: 'delivered', // processing, shipping, delivered
      items: ['Arduino Mega 2560', 'Breadboard & Jumper Wires Kit'],
    },
    {
      id: 'ORD-2023-142',
      date: 'Oct 28, 2023',
      total: '₹1,200',
      status: 'shipping',
      items: ['MG996R Servo Motor', 'SG90 Micro Servo'],
    },
    {
      id: 'ORD-2023-189',
      date: 'Nov 02, 2023',
      total: '₹4,500',
      status: 'processing',
      items: ['Advanced Robotics Kit'],
    }
  ];

  const getStatusStep = (status: string) => {
    switch (status) {
      case 'processing': return 1;
      case 'shipping': return 2;
      case 'delivered': return 3;
      default: return 0;
    }
  };

  const StepVisualizer = ({ status }: { status: string }) => {
    const step = getStatusStep(status);
    
    return (
      <div className="relative mt-4 mb-2">
        {/* Connecting Line */}
        <div className="absolute top-1/2 left-4 right-4 h-1 bg-slate-200 dark:bg-slate-700 -translate-y-1/2 rounded-full z-0">
          <motion.div 
            className="h-full bg-blue-500 rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: step === 1 ? '0%' : step === 2 ? '50%' : '100%' }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
        
        {/* Steps */}
        <div className="relative z-10 flex justify-between">
          {/* Processing Step */}
          <div className="flex flex-col items-center">
             <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${step >= 1 ? 'bg-blue-500 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-400'}`}>
                <Package size={14} />
             </div>
             <span className={`text-[10px] font-bold mt-2 ${step >= 1 ? 'text-slate-900 dark:text-white' : 'text-slate-400'}`}>Processing</span>
          </div>

          {/* Shipping Step */}
          <div className="flex flex-col items-center">
             <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${step >= 2 ? 'bg-blue-500 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-400'}`}>
                <Truck size={14} />
             </div>
             <span className={`text-[10px] font-bold mt-2 ${step >= 2 ? 'text-slate-900 dark:text-white' : 'text-slate-400'}`}>Shipping</span>
          </div>

          {/* Delivered Step */}
          <div className="flex flex-col items-center">
             <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${step >= 3 ? 'bg-green-500 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-400'}`}>
                <CheckCircle size={14} />
             </div>
             <span className={`text-[10px] font-bold mt-2 ${step >= 3 ? 'text-slate-900 dark:text-white' : 'text-slate-400'}`}>Delivered</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <AnimatePresence>
      {isProfileOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsProfileOpen(false)}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-slate-50 dark:bg-slate-950 w-full max-w-2xl max-h-[85vh] rounded-3xl shadow-2xl overflow-hidden relative z-10 border border-slate-200 dark:border-slate-800 flex flex-col"
          >
            {/* Header */}
            <div className="p-6 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center sticky top-0 z-20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                  <User size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">Alex Developer</h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400">alex@example.com</p>
                </div>
              </div>
              <button 
                onClick={() => setIsProfileOpen(false)} 
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 overflow-y-auto">
              {/* Profile Actions */}
              <div className="flex gap-4 mb-8">
                <button className="flex-1 py-2.5 px-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  <Settings size={16} /> Account Settings
                </button>
                <button className="flex-1 py-2.5 px-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center gap-2 text-sm font-semibold text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                  <LogOut size={16} /> Sign Out
                </button>
              </div>

              {/* My Orders Section */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                  <Clock size={20} className="text-blue-500" />
                  My Orders
                </h3>
                
                <div className="space-y-4">
                  {mockOrders.map((order, idx) => (
                    <motion.div 
                      key={order.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <p className="text-sm font-bold text-slate-900 dark:text-white">{order.id}</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{order.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-bold text-blue-600 dark:text-blue-400">{order.total}</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{order.items.length} Items</p>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <p className="text-xs font-medium text-slate-600 dark:text-slate-300 line-clamp-1 mb-2">
                          <span className="text-slate-400">Includes:</span> {order.items.join(', ')}
                        </p>
                      </div>

                      <StepVisualizer status={order.status} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
