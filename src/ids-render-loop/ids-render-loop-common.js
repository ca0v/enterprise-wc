/**
 * Gets an accurate, current timestamp from the system.
 * @private
 * @returns {number} a current timestamp
 */
export function timestamp() {
  return window.performance.now();
}
