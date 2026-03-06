/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, Heart, Star, Sparkles, Home, Utensils, Brain, Stethoscope, Calendar, GraduationCap, MapPin } from 'lucide-react';

type Page = 'HOME' | 'PROFILE' | 'FAVORITE';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('HOME');

  const containerVariants = {
    initial: { opacity: 0, scale: 0.8, rotate: -5 },
    animate: { opacity: 1, scale: 1, rotate: 0, transition: { type: 'spring', damping: 12 } },
    exit: { opacity: 0, scale: 1.2, rotate: 5, transition: { duration: 0.3 } }
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'HOME':
        return (
          <motion.div
            key="home"
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex flex-col items-center justify-center space-y-12 text-center w-full max-w-4xl"
          >
            {/* Top Marquee */}
            <div className="fixed top-0 left-0 w-full bg-blue-900 text-white py-2 overflow-hidden z-30 border-b-4 border-blue-950">
              <div className="animate-marquee whitespace-nowrap font-display text-xl uppercase tracking-widest">
                REIKA HAGINO • DENTAL HYGIENIST • 2002.05.26 • REIKA HAGINO • DENTAL HYGIENIST • 2002.05.26 • REIKA HAGINO • DENTAL HYGIENIST • 2002.05.26
              </div>
            </div>

            <div className="relative mt-12">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="bg-yellow-400 p-10 rounded-full comic-border relative z-10 shadow-[10px_10px_0px_#1e3a8a]"
              >
                <Star size={100} className="text-blue-900 fill-blue-900" />
              </motion.div>
              
              {/* Floating Stickers */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -top-12 -left-12 bg-pink-400 text-white p-4 comic-border-sm rounded-lg rotate-[-15deg] font-display text-xl z-20"
              >
                WOW!
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, delay: 0.5 }}
                className="absolute -bottom-8 -right-12 bg-emerald-400 text-white p-4 comic-border-sm rounded-full rotate-[15deg] font-display text-xl z-20"
              >
                BOOM!
              </motion.div>
            </div>
            
            <div className="space-y-4">
              <h1 className="font-display text-7xl md:text-9xl text-blue-900 drop-shadow-[8px_8px_0px_#ffffff] leading-tight">
                HELLO!<br />I'M REIKA
              </h1>
              
              <div className="speech-bubble inline-block transform -rotate-2 mx-auto">
                <p className="text-2xl font-black text-blue-900">
                  Welcome to Reika's world! 🌀
                </p>
              </div>
            </div>

            {/* Prominent Goal Section */}
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="w-full bg-yellow-300 p-8 comic-border relative overflow-hidden group"
            >
              <div className="absolute inset-0 halftone opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <Sparkles className="text-blue-900 animate-pulse" size={40} />
                  <h2 className="font-display text-3xl text-blue-900">2026 GOAL</h2>
                  <Sparkles className="text-blue-900 animate-pulse" size={40} />
                </div>
                <p className="text-4xl md:text-6xl font-black text-blue-900 tracking-tighter">
                  健康に生きる
                </p>
                <div className="mt-4 inline-block bg-blue-900 text-white px-6 py-2 rounded-full font-bold text-lg">
                  STAY HEALTHY & HAPPY!
                </div>
              </div>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-8 mt-4">
              <button 
                onClick={() => setCurrentPage('PROFILE')}
                className="comic-button bg-blue-500 hover:bg-blue-400 text-white flex items-center gap-3 transform hover:-translate-y-2 hover:rotate-2"
              >
                <User size={28} /> PROFILE
              </button>
              <button 
                onClick={() => setCurrentPage('FAVORITE')}
                className="comic-button bg-pink-500 hover:bg-pink-400 text-white flex items-center gap-3 transform hover:-translate-y-2 hover:-rotate-2"
              >
                <Heart size={28} /> FAVORITE
              </button>
            </div>
          </motion.div>
        );

      case 'PROFILE':
        return (
          <motion.div
            key="profile"
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full max-w-2xl bg-white p-10 comic-border relative overflow-hidden"
          >
            <div className="absolute inset-0 halftone opacity-10 pointer-events-none"></div>
            <div className="absolute -top-10 -left-10 bg-blue-600 text-white p-6 comic-border rotate-[-10deg] font-display text-3xl z-20 shadow-xl">
              PROFILE
            </div>
            
            <div className="relative z-10 space-y-6 mt-8">
              {[
                { icon: <User className="text-blue-500" />, label: "名前", value: "萩野 怜夏（はぎの れいか）", color: "bg-blue-50" },
                { icon: <Calendar className="text-green-500" />, label: "生年月日", value: "2002年5月26日", color: "bg-green-50" },
                { icon: <GraduationCap className="text-purple-500" />, label: "出身大学", value: "埼玉県立大学", color: "bg-purple-50" },
                { icon: <Stethoscope className="text-red-500" />, label: "職業", value: "歯科衛生士", color: "bg-red-50" },
                { icon: <Star className="text-yellow-500" />, label: "2026年の目標", value: "健康に生きる", color: "bg-yellow-50" },
              ].map((item, i) => (
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  key={item.label}
                  className={`${item.color} p-4 comic-border-sm transform hover:scale-[1.02] transition-transform cursor-default`}
                >
                  <ProfileItem icon={item.icon} label={item.label} value={item.value} />
                </motion.div>
              ))}
            </div>

            <button 
              onClick={() => setCurrentPage('HOME')}
              className="mt-10 comic-button bg-blue-900 text-white hover:bg-blue-800 flex items-center gap-3 text-xl py-3 px-10"
            >
              <Home size={24} /> BACK TO HOME
            </button>
          </motion.div>
        );

      case 'FAVORITE':
        return (
          <motion.div
            key="favorite"
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full max-w-3xl grid md:grid-cols-2 gap-8 relative"
          >
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-pink-600 text-white p-6 comic-border rotate-[-2deg] font-display text-4xl z-20 shadow-2xl whitespace-nowrap">
              MY FAVORITES!
            </div>

            <motion.div 
              whileHover={{ rotate: -2 }}
              className="bg-white p-8 comic-border relative overflow-hidden group mt-8"
            >
              <div className="absolute inset-0 halftone opacity-20"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-pink-100 p-3 rounded-xl comic-border-sm">
                    <Brain className="text-pink-500" size={40} />
                  </div>
                  <h3 className="font-display text-3xl">趣味</h3>
                </div>
                <div className="bg-pink-500 text-white p-6 comic-border-sm transform -rotate-2 mb-4">
                  <p className="text-5xl font-black tracking-tighter">MBTI</p>
                </div>
                <p className="text-lg font-bold text-blue-900 leading-relaxed">
                  性格診断大好き人間です！<br />
                  自分や周りの人のタイプを知るのが楽しくてハマってます ✨
                </p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ rotate: 2 }}
              className="bg-white p-8 comic-border relative overflow-hidden group mt-8"
            >
              <div className="absolute inset-0 halftone opacity-20"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-orange-100 p-3 rounded-xl comic-border-sm">
                    <Utensils className="text-orange-500" size={40} />
                  </div>
                  <h3 className="font-display text-3xl">好きな食べ物</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-blue-500 text-white p-4 comic-border-sm transform rotate-1 flex items-center justify-between">
                    <span className="text-3xl font-black">海鮮料理</span>
                    <span className="text-4xl">🐟</span>
                  </div>
                  <div className="bg-yellow-400 text-blue-900 p-4 comic-border-sm transform -rotate-1 flex items-center justify-between">
                    <span className="text-3xl font-black">白米</span>
                    <span className="text-4xl">🍚</span>
                  </div>
                </div>
                <p className="mt-6 text-lg font-bold text-blue-900">
                  美味しいご飯があれば幸せ！<br />
                  特に新鮮なネタとお米の組み合わせは最強です 😋
                </p>
              </div>
            </motion.div>

            <div className="md:col-span-2 flex justify-center mt-4">
              <button 
                onClick={() => setCurrentPage('HOME')}
                className="comic-button bg-blue-900 text-white hover:bg-blue-800 flex items-center gap-3 text-xl py-3 px-10"
              >
                <Home size={24} /> BACK TO HOME
              </button>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 animate-float"><Sparkles size={100} className="text-blue-300" /></div>
        <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '1s' }}><Star size={120} className="text-blue-300" /></div>
        <div className="absolute top-1/2 left-1/4 animate-float" style={{ animationDelay: '2s' }}><Heart size={80} className="text-blue-300" /></div>
        <div className="absolute bottom-1/4 right-1/3 animate-float" style={{ animationDelay: '1.5s' }}><Sparkles size={60} className="text-blue-300" /></div>
      </div>

      <main className="relative z-10 w-full flex justify-center">
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </main>

      {/* Footer Decoration */}
      <div className="fixed bottom-0 left-0 w-full h-4 bg-blue-900 z-20"></div>
    </div>
  );
}

function ProfileItem({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="flex items-start gap-4 p-3 hover:bg-blue-50 transition-colors rounded-lg">
      <div className="mt-1">{icon}</div>
      <div>
        <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{label}</div>
        <div className="text-xl font-bold text-blue-900">{value}</div>
      </div>
    </div>
  );
}
