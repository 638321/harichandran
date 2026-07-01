import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Lock, User, Phone, ArrowLeft } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { RobotAnimation } from './RobotAnimation';

export const AuthModals: React.FC = () => {
  const { authModalType, setAuthModalType } = useAppContext();
  const [forgotStep, setForgotStep] = useState<'phone' | 'otp' | 'reset' | null>(null);

  useEffect(() => {
    if (!authModalType) {
      setForgotStep(null);
    }
  }, [authModalType]);

  const close = () => setAuthModalType(null);

  const getTitle = () => {
    if (forgotStep === 'phone') return 'Reset Password';
    if (forgotStep === 'otp') return 'Enter OTP';
    if (forgotStep === 'reset') return 'Set New Password';
    return authModalType === 'signin' ? 'Welcome Back' : 'Create Account';
  };

  const getSubtitle = () => {
    if (forgotStep === 'phone') return 'Enter your phone number to receive an OTP.';
    if (forgotStep === 'otp') return 'Enter the OTP sent to your phone.';
    if (forgotStep === 'reset') return 'Enter your new password.';
    return authModalType === 'signin' ? 'Sign in to access your orders and wishlists.' : 'Join HariChandra for exclusive deals and faster checkout.';
  };

  const handleForgotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (forgotStep === 'phone') setForgotStep('otp');
    else if (forgotStep === 'otp') setForgotStep('reset');
    else if (forgotStep === 'reset') {
      setForgotStep(null);
      setAuthModalType('signin'); // back to sign in
    }
  };

  return (
    <AnimatePresence>
      {authModalType && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center px-4 py-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white dark:bg-slate-900 w-full max-w-5xl max-h-full rounded-3xl shadow-2xl overflow-hidden relative z-10 border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row"
          >
            {/* Left side: Robot Animation (Hidden on mobile) */}
            <div className="hidden md:flex md:w-1/2 bg-slate-50 dark:bg-slate-950 relative overflow-hidden border-r border-slate-200 dark:border-slate-800 flex-col items-center justify-between p-8">
              <div className="absolute inset-0 z-0 flex items-center justify-center scale-90">
                <RobotAnimation />
              </div>
              <div className="relative z-10 text-center w-full">
                <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-bold mb-2">
                  IoT & Robotics
                </div>
              </div>
              <div className="relative z-10 text-center bg-white/60 dark:bg-slate-900/60 backdrop-blur-md p-6 rounded-2xl border border-white/20 dark:border-slate-700/50 w-full">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Build The Future</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Access premium components, manage your orders, and track your shipments all in one place.
                </p>
              </div>
            </div>

            {/* Right side: Form */}
            <div className="w-full md:w-1/2 relative overflow-y-auto max-h-[85vh] no-scrollbar">
              <div className="absolute top-4 right-4 z-20">
                <button onClick={close} className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 transition-colors">
                  <X size={20} />
                </button>
              </div>

              <div className="p-8 lg:p-12 h-full flex flex-col justify-center min-h-[500px]">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  {getTitle()}
                </h2>
                <p className="text-slate-500 dark:text-slate-400 mb-8 text-sm">
                  {getSubtitle()}
                </p>

                {forgotStep ? (
                  <form className="space-y-4" onSubmit={handleForgotSubmit}>
                    {forgotStep === 'phone' && (
                      <div className="relative">
                        <Phone size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
                        <input type="tel" placeholder="Phone Number" className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 pl-12 pr-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                      </div>
                    )}
                    {forgotStep === 'otp' && (
                      <div className="relative">
                        <Lock size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
                        <input type="text" placeholder="Enter 6-digit OTP" className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 pl-12 pr-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                      </div>
                    )}
                    {forgotStep === 'reset' && (
                      <>
                        <div className="relative">
                          <Lock size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
                          <input type="password" placeholder="New Password" className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 pl-12 pr-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        </div>
                        <div className="relative">
                          <Lock size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
                          <input type="password" placeholder="Confirm New Password" className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 pl-12 pr-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        </div>
                      </>
                    )}
                    <button type="submit" className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-0.5 mt-6 text-lg">
                      {forgotStep === 'phone' ? 'Send OTP' : forgotStep === 'otp' ? 'Verify OTP' : 'Reset Password'}
                    </button>
                    <div className="mt-4 text-center">
                      <button type="button" onClick={() => setForgotStep(null)} className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 flex items-center justify-center w-full gap-2">
                        <ArrowLeft size={16} /> Back to Sign In
                      </button>
                    </div>
                  </form>
                ) : (
                  <>
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                      {authModalType === 'signup' && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="relative">
                            <User size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
                            <input type="text" placeholder="Full Name" className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 pl-12 pr-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                          </div>
                          <div className="relative">
                            <Phone size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
                            <input type="tel" placeholder="Phone Number" className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 pl-12 pr-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                          </div>
                        </div>
                      )}
                      
                      <div className="relative">
                        <Mail size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
                        <input type="email" placeholder="Email Address" className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 pl-12 pr-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                      </div>
                      
                      <div className="relative">
                        <Lock size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
                        <input type="password" placeholder="Password" className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 pl-12 pr-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                      </div>

                      {authModalType === 'signup' && (
                        <div className="relative">
                          <Lock size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
                          <input type="password" placeholder="Confirm Password" className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 pl-12 pr-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        </div>
                      )}

                      {authModalType === 'signin' && (
                        <div className="flex items-center justify-between text-sm mt-4">
                          <label className="flex items-center text-slate-600 dark:text-slate-400 cursor-pointer">
                            <input type="checkbox" className="mr-2 rounded text-blue-600 focus:ring-blue-500 bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-600" /> Remember me
                          </label>
                          <button type="button" onClick={() => setForgotStep('phone')} className="text-blue-600 dark:text-cyan-400 font-semibold hover:underline focus:outline-none">Forgot password?</button>
                        </div>
                      )}

                      <button type="submit" className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-0.5 mt-8 text-lg">
                        {authModalType === 'signin' ? 'Sign In' : 'Create Account'}
                      </button>
                    </form>

                    <div className="mt-8 text-center text-sm text-slate-600 dark:text-slate-400">
                      {authModalType === 'signin' ? "Don't have an account? " : "Already have an account? "}
                      <button 
                        type="button"
                        onClick={() => setAuthModalType(authModalType === 'signin' ? 'signup' : 'signin')}
                        className="text-blue-600 dark:text-cyan-400 font-bold hover:underline focus:outline-none ml-1"
                      >
                        {authModalType === 'signin' ? 'Sign Up' : 'Sign In'}
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
