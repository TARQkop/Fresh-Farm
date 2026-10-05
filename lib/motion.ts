// Mirrors the CSS motion tokens in app/globals.css (JS animations can't read CSS variables). Keep in sync.
export const EASE_LUX = [0.22, 1, 0.36, 1] as const; // --ease-lux
export const DUR_PAGE = 0.7; // --dur-page (700ms)
export const DUR_MENU = 0.35; // --dur-menu (350ms)
export const MENU_STAGGER = 0.06; // 60ms between mobile-menu links
// Scroll-reveal stagger: 70ms per item, capped at the 6th so long grids never feel slow.
export const stagger = (i: number) => Math.min(i, 5) * 0.07;
