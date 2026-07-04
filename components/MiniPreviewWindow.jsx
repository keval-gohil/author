'use client'

import React, { useRef, useState, useEffect } from 'react';
import MainHeader from '@/components/mainHeader';
import MainSection from '@/components/mainSection';

const MiniPreviewWindow = ({ interactive, onRestore, showRestoreIcon, showLabel }) => {
    const boxRef = useRef(null);
    const viewportRef = useRef(null);
    const contentRef = useRef(null);
    const [scale, setScale] = useState(1);
    const [dragPos, setDragPos] = useState(null);

    const drag = useRef({ active: false, moved: false, startX: 0, startY: 0, startLeft: 0, startTop: 0 });

    // measure real content size and fit it into the box — works at any breakpoint
    useEffect(() => {
        const viewport = viewportRef.current;
        const content = contentRef.current;
        if (!viewport || !content) return;

        const update = () => {
            const vw = viewport.clientWidth;
            const vh = viewport.clientHeight;
            const cw = content.scrollWidth;
            const ch = content.scrollHeight;

            // skip if anything measured 0 — don't let scale collapse to 0 permanently
            if (vw === 0 || vh === 0 || cw === 0 || ch === 0) return;

            setScale(Math.min(vw / cw, vh / ch));
        };

        update();
        const settle = setTimeout(update, 300); // re-measure once layout/images settle

        const ro = new ResizeObserver(update);
        ro.observe(viewport);
        ro.observe(content);
        window.addEventListener('resize', update);

        return () => {
            clearTimeout(settle);
            ro.disconnect();
            window.removeEventListener('resize', update);
        };
    }, []);

    const handlePointerDown = (e) => {
        const rect = boxRef.current.getBoundingClientRect();
        drag.current = {
            active: true,
            moved: false,
            startX: e.clientX,
            startY: e.clientY,
            startLeft: rect.left,
            startTop: rect.top,
        };
        window.addEventListener('pointermove', handlePointerMove);
        window.addEventListener('pointerup', handlePointerUp);
    };

    const handlePointerMove = (e) => {
        if (!drag.current.active) return;
        const dx = e.clientX - drag.current.startX;
        const dy = e.clientY - drag.current.startY;
        if (Math.abs(dx) > 4 || Math.abs(dy) > 4) drag.current.moved = true;

        const rect = boxRef.current.getBoundingClientRect();
        const newLeft = Math.max(0, Math.min(drag.current.startLeft + dx, window.innerWidth - rect.width));
        const newTop = Math.max(0, Math.min(drag.current.startTop + dy, window.innerHeight - rect.height));
        setDragPos({ left: newLeft, top: newTop });
    };

    const handlePointerUp = () => {
        drag.current.active = false;
        window.removeEventListener('pointermove', handlePointerMove);
        window.removeEventListener('pointerup', handlePointerUp);
    };

    const handleBoxClick = () => {
        if (drag.current.moved) {
            drag.current.moved = false;
            return;
        }
        if (!interactive) onRestore?.();
    };

    return (
        <div
            ref={boxRef}
            className={`mini-window ${interactive ? 'mini-window-interactive' : 'mini-window-static'}`}
            style={dragPos ? { left: dragPos.left, top: dragPos.top, right: 'auto', bottom: 'auto' } : undefined}
            onClick={handleBoxClick}
        >
            <div className="mini-window-draghandle" onPointerDown={handlePointerDown}>
                <span className="mini-drag-grip">⋮⋮</span>
                {showRestoreIcon && (
                    <button
                        className="mini-restore-icon"
                        aria-label="Restore window"
                        onClick={(e) => { e.stopPropagation(); onRestore?.(); }}
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                            <path d="M9 3H3v6M15 21h6v-6M21 3l-7 7M3 21l7-7"
                                stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                )}
            </div>

            <div className="mini-window-viewport" ref={viewportRef}>
                <div
                    className={`mini-window-inner ${interactive ? '' : 'mini-window-noninteractive'}`}
                    ref={contentRef}
                    style={{ transform: `scale(${scale})` }}
                >
                    <MainHeader onClose={() => { }} onMinimize={() => { }} onZoom={() => { }} />
                    <MainSection />
                </div>
            </div>

            {showLabel && <p className="mini-window-restore-label">Click to restore window</p>}
        </div>
    );
};

export default MiniPreviewWindow;