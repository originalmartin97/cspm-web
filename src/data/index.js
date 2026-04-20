/**
 * Data Module Index
 * =================
 * Central export point for all data.
 * 
 * Note: colleaguesData is in _private folder and imported separately
 * to keep sensitive personal data out of the repository.
 */

export { default as actualitiesData } from './actualities';
export { default as servicesData } from './services';
export { default as achievementsData } from './achievements';

// For colleagues data, import directly from:
// import colleaguesData from '../data/_private/_private.colleagues';
