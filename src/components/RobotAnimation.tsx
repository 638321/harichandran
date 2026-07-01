import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

export const RobotAnimation: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the motion
  const smoothX = useSpring(mouseX, { stiffness: 75, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 75, damping: 20 });

  // Map normalized mouse coordinates (-1 to 1) to rotation and translation
  const rotateX = useTransform(smoothY, [-1, 1], [25, -25]);
  const rotateY = useTransform(smoothX, [-1, 1], [-25, 25]);
  const translateX = useTransform(smoothX, [-1, 1], [-15, 15]);
  const translateY = useTransform(smoothY, [-1, 1], [-15, 15]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized coordinates (-1 to 1) relative to window
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);
  return (
    <div className="relative w-full h-full min-h-[420px] flex items-center justify-center select-none overflow-visible">

      {/* ── Deep background glow circles ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          className="w-80 h-80 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(34,211,238,0.25) 0%, rgba(59,130,246,0.12) 50%, transparent 75%)',
          }}
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 1 }}
          className="w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* ── 3D Orbiting rings ── */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ perspective: '800px' }}
      >
        {/* Ring 1 – cyan, tilted */}
        <motion.div
          animate={{ rotateZ: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
          className="absolute w-[320px] h-[320px] rounded-full border-2 border-cyan-400/30"
          style={{ rotateX: '72deg' }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_16px_6px_rgba(34,211,238,0.8)]" />
        </motion.div>

        {/* Ring 2 – blue, opposite tilt */}
        <motion.div
          animate={{ rotateZ: -360 }}
          transition={{ repeat: Infinity, duration: 14, ease: 'linear' }}
          className="absolute w-[380px] h-[380px] rounded-full border border-blue-500/20"
          style={{ rotateX: '65deg', rotateZ: '25deg' }}
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_14px_5px_rgba(96,165,250,0.8)]" />
        </motion.div>

        {/* Ring 3 – purple outer */}
        <motion.div
          animate={{ rotateZ: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
          className="absolute w-[440px] h-[440px] rounded-full border border-purple-500/15"
          style={{ rotateX: '70deg', rotateZ: '-15deg' }}
        >
          <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-purple-400 shadow-[0_0_10px_4px_rgba(168,85,247,0.7)]" />
        </motion.div>
      </div>

      {/* ── Floating IoT data nodes ── */}
      {[
        { label: 'WiFi', icon: '📡', tx: -155, ty: -65 },
        { label: 'AI', icon: '🤖', tx: 145, ty: -85 },
        { label: 'Cloud', icon: '☁️', tx: -120, ty: 105 },
        { label: 'IoT', icon: '⚡', tx: 135, ty: 95 },
      ].map((node, i) => (
        <motion.div
          key={node.label}
          animate={{ y: [0, -12, 0], opacity: [0.75, 1, 0.75] }}
          transition={{ repeat: Infinity, duration: 3 + i * 0.4, delay: i * 0.5, ease: 'easeInOut' }}
          className="absolute z-30 flex flex-col items-center pointer-events-none"
          style={{
            left: `calc(50% + ${node.tx}px)`,
            top: `calc(50% + ${node.ty}px)`,
          }}
        >
          <div className="bg-slate-900/80 backdrop-blur-md border border-cyan-400/40 rounded-xl px-3 py-1.5 shadow-[0_0_20px_rgba(34,211,238,0.15)] flex items-center gap-1.5">
            <span className="text-base leading-none">{node.icon}</span>
            <span className="text-[11px] font-bold text-cyan-300 tracking-wide">{node.label}</span>
          </div>
          <div className="w-px h-4 bg-gradient-to-b from-cyan-400/60 to-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/60" />
        </motion.div>
      ))}

      {/* ── Main robot (cursor tracking) ── */}
      <motion.div
        style={{ rotateX, rotateY, x: translateX, y: translateY, perspective: 1000, transformStyle: 'preserve-3d' }}
        className="relative z-20 w-[320px] lg:w-[400px] flex-shrink-0"
      >
        {/* Animated ground shadow */}
        <motion.div
          animate={{ scaleX: [1, 0.65, 1], opacity: [0.35, 0.1, 0.35] }}
          transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-40 h-5 rounded-full blur-xl"
          style={{ background: 'rgba(0,0,0,0.5)' }}
        />

        {/* Robot image — clean transparent PNG from rembg AI */}
        <img
          src="/images/robot.png"
          alt="IoT Robot"
          className="w-full h-auto object-contain relative z-10"
          style={{
            filter:
              'drop-shadow(0 0 24px rgba(34,211,238,0.5)) drop-shadow(0 0 60px rgba(59,130,246,0.25)) drop-shadow(0 30px 50px rgba(0,0,0,0.4))',
          }}
          draggable={false}
        />

        {/* Cyan eye glow pulse overlay */}
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 44px 22px at 41% 29%, rgba(34,211,238,0.5) 0%, transparent 65%), radial-gradient(ellipse 44px 22px at 58% 29%, rgba(34,211,238,0.5) 0%, transparent 65%)',
          }}
        />
      </motion.div>

      {/* ── Particle sparks rising ── */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -(70 + i * 18)],
            x: [(i % 2 === 0 ? 1 : -1) * i * 8, (i % 2 === 0 ? -1 : 1) * i * 4],
            opacity: [0, 0.9, 0],
            scale: [0, 1.2, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.5 + i * 0.25,
            delay: i * 0.35,
            ease: 'easeOut',
          }}
          className="absolute z-10 bottom-24 left-1/2 w-1.5 h-1.5 rounded-full"
          style={{
            marginLeft: `${(i - 5) * 16}px`,
            background: i % 3 === 0 ? 'rgba(34,211,238,1)' : i % 3 === 1 ? 'rgba(99,102,241,1)' : 'rgba(96,165,250,1)',
            boxShadow: `0 0 8px 3px ${i % 3 === 0 ? 'rgba(34,211,238,0.7)' : i % 3 === 1 ? 'rgba(99,102,241,0.7)' : 'rgba(96,165,250,0.7)'}`,
          }}
        />
      ))}
    </div>
  );
};
