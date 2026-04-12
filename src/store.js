import { writable } from 'svelte/store';

// 'landing', 'register', 'dashboard', 'jobs', 'applications', 'profile'
export const currentPage = writable('landing');
