// useStore.js
import create from 'zustand';

const useStore = create((set) => ({
  data: null, // Initial state
  setData: (data) => set({ data }), // Setter function to update 'data'
}));

export default useStore;
