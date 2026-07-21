import clsx from 'clsx';
export function cn(...args){return clsx(args)}

export function smoothScrollTo(targetPosition, duration = 1200) {
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutQuad(progress);
    window.scrollTo(0, startPosition + distance * ease);
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}
