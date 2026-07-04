'use client';

import React, { useState, useRef, useEffect } from "react";
import MainHeader from '@/components/mainHeader';
import MainSection from '@/components/mainSection';
import Load from './load';
import '@/components/style.css';
import '@/components/responsive.css?var=5.0';

const Author = () => {
  // 1. Core Hooks (State, Refs, and Custom Hooks)
  const { isLoading, loadingComponent } = Load(3000);
  const [windowMode, setWindowMode] = useState('normal'); // 'normal' | 'closed' | 'minimized' | 'focus'

  // Controls how small the mini-window is (0.25 = 25% of real viewport)
  const PREVIEW_RATIO = 0.25;

  // Track dynamic dimensions cloned directly from the user's viewport screen sizes
  const [screenDims, setScreenDims] = useState({ width: 1400, height: 900 });

  // Dynamic positioning state
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const hasInitializedPosition = useRef(false);

  // Core Pointers for Clamping & Layout Scale Operations
  const previewWrapperRef = useRef(null);
  const innerRef = useRef(null);
  const dragInfo = useRef({ dragging: false, startX: 0, startY: 0 });

  const isClosed = windowMode === 'closed';
  const isMinimized = windowMode === 'minimized';
  const isFocus = windowMode === 'focus';
  const overlayActive = isClosed || isMinimized || isFocus;
  const isNonInteractiveOverlay = isClosed || isFocus;

  // 2. Side Effects (Dynamic Dynamic Viewport Clones)
  useEffect(() => {
    if (!overlayActive) {
      hasInitializedPosition.current = false;
      return;
    }

    function handleResizeAndLayout() {
      const currentWidth = window.innerWidth;
      const currentHeight = window.innerHeight;

      // Update baseline state matching current user viewport profile perfectly
      setScreenDims({ width: currentWidth, height: currentHeight });

      // Calculate miniature window dimensions
      // Calculate miniature window dimensions
      const computedWidth = currentWidth * PREVIEW_RATIO;
      const computedHeight = currentHeight * PREVIEW_RATIO;

      // Spacing buffers
      const edgePadding = currentWidth <= 480 ? 16 : 24;
      // Dynamic offset compensation to account for the toolbar height sitting above the preview box
      const toolbarOffset = 42;

      let defaultX = currentWidth - computedWidth - edgePadding;
      // Subtract both the default padding AND the toolbar height offset to lift it up nicely
      let defaultY = currentHeight - computedHeight - edgePadding - toolbarOffset;

      // Update position smoothly
      if (!hasInitializedPosition.current && !dragInfo.current.dragging) {
        setPosition({ x: defaultX, y: defaultY });
        hasInitializedPosition.current = true;
      }
    }

    handleResizeAndLayout();
    window.addEventListener("resize", handleResizeAndLayout);
    return () => window.removeEventListener("resize", handleResizeAndLayout);
  }, [overlayActive]);

  // 3. Window State Handlers
  const handleClose = () => setWindowMode(prev => (prev === 'closed' ? 'normal' : 'closed'));
  const handleMinimize = () => setWindowMode(prev => (prev === 'minimized' ? 'normal' : 'minimized'));
  const handleZoom = () => setWindowMode(prev => (prev === 'focus' ? 'normal' : 'focus'));
  const handleRestore = () => setWindowMode('normal');

  // 4. Drag & Drop Pointer Events (Fires cleanly from the Toolbar UI)
  const onPointerDown = (e) => {
    if (!overlayActive) return;

    dragInfo.current.dragging = true;
    dragInfo.current.startX = e.clientX - position.x;
    dragInfo.current.startY = e.clientY - position.y;

    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!dragInfo.current.dragging || !previewWrapperRef.current) return;

    let targetX = e.clientX - dragInfo.current.startX;
    let targetY = e.clientY - dragInfo.current.startY;

    // Measures dynamic bounds against the entire wrapper element
    const rect = previewWrapperRef.current.getBoundingClientRect();

    const minX = 0;
    const maxX = window.innerWidth - rect.width;
    const minY = 0;
    const maxY = window.innerHeight - rect.height;

    targetX = Math.max(minX, Math.min(targetX, maxX));
    targetY = Math.max(minY, Math.min(targetY, maxY));

    setPosition({ x: targetX, y: targetY });
  };

  const onPointerUp = (e) => {
    if (dragInfo.current.dragging) {
      dragInfo.current.dragging = false;
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  if (isLoading) return loadingComponent;

  return (
    <div className={`author window-${windowMode}`}>
      {/* Primary Layout Underneath */}
      <div className={`author-window ${overlayActive ? 'window-hidden' : ''}`}>
        <MainHeader
          onClose={handleClose}
          onMinimize={handleMinimize}
          onZoom={handleZoom}
        />
        <MainSection />
      </div>

      {/* Backdrop System Overlay */}
      {overlayActive && (
        <div
          className="window-backdrop"
          onClick={isNonInteractiveOverlay ? handleRestore : undefined}
        >
          {/* Closed State Message */}
          {isClosed && (
            <p className="backdrop-text">You closed the window. Click to reopen.</p>
          )}

          {/* Focused State CTA */}
          {isFocus && (
            <button className="talk-btn" onClick={handleRestore}>
              💬 Talk to Keval
            </button>
          )}

          {/* Minimized State Form */}
          {isMinimized && (
            <form
              className="mini-contact-form"
              onClick={(e) => e.stopPropagation()}
              onSubmit={(e) => e.preventDefault()}
            >
              <h3>Get in touch</h3>
              <input type="email" placeholder="Enter Your Email*" required />
              <textarea placeholder="Leave Your Message*" rows={3} required />
              <button type="submit">Send Message</button>
            </form>
          )}

          {/* MINI WINDOW PREVIEW WRAPPER */}
          <div
            ref={previewWrapperRef}
            className="mini-window-wrapper"
            style={{
              position: 'absolute',
              left: `${position.x}px`,
              top: `${position.y}px`,
            }}
          >
            {/* OUTSIDE FLOATING UTILITY HEADER */}
            <div className="mini-window-toolbar">
              {/* DEDICATED DRAG HANDLE ICON */}
              <div
                className="mini-drag-handle"
                title="Drag Window"
                style={{ touchAction: 'none' }}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onClick={(e) => e.stopPropagation()}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <circle cx="5" cy="5" r="2" fill="currentColor" />
                  <circle cx="12" cy="5" r="2" fill="currentColor" />
                  <circle cx="19" cy="5" r="2" fill="currentColor" />
                  <circle cx="5" cy="12" r="2" fill="currentColor" />
                  <circle cx="12" cy="12" r="2" fill="currentColor" />
                  <circle cx="19" cy="12" r="2" fill="currentColor" />
                  <circle cx="5" cy="19" r="2" fill="currentColor" />
                  <circle cx="12" cy="19" r="2" fill="currentColor" />
                  <circle cx="19" cy="19" r="2" fill="currentColor" />
                </svg>
              </div>

              {/* Window Restore Action Icon */}
              {isMinimized && (
                <button
                  className="mini-restore-icon"
                  aria-label="Restore window"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRestore();
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M9 3H3v6M15 21h6v-6M21 3l-7 7M3 21l7-7"
                      stroke="currentColor" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              )}
            </div>

            {/* THE ACTUAL PREVIEW WINDOW BOX */}
            <div
              className="mini-window"
              style={{
                width: `${screenDims.width * PREVIEW_RATIO}px`,
                height: `${screenDims.height * PREVIEW_RATIO}px`,
              }}
              onClick={isNonInteractiveOverlay ? handleRestore : undefined}
            >
              <div
                ref={innerRef}
                className={`mini-window-inner ${isMinimized ? '' : 'mini-window-noninteractive'}`}
                style={{
                  width: `${screenDims.width}px`,
                  height: `${screenDims.height}px`,
                  transform: `scale(${PREVIEW_RATIO})`,
                  transformOrigin: 'top left'
                }}
              >
                <MainHeader onClose={() => { }} onMinimize={() => { }} onZoom={() => { }} />
                <MainSection />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Author;