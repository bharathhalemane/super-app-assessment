import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set) => ({
      user: {
        name: "",
        username: "",
        email: "",
        mobile: "",
      },

      categories: [],
      notes: "",

      setUser: (userData) => {
        console.log(userData);
        set({ user: userData });
      },

      setCategories: (categoryArray) =>
        set({ categories: categoryArray }),

      setNotes: (noteText) =>
        set({ notes: noteText }),

      resetStore: () => {
        set({
          user: {
            name: "",
            username: "",
            email: "",
            mobile: "",
          },
          categories: [],
          notes: "",
        });

        localStorage.removeItem("super-app-storage");
      },
    }),
    {
      name: "super-app-storage",
    }
  )
);