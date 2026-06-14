export const storage = {
  set(key: string, value: any) {
    if (typeof window === "undefined") return;

    localStorage.setItem(key, JSON.stringify(value));
  },

  get(key: string) {
    if (typeof window === "undefined") return null;

    const item = localStorage.getItem(key);

    return item ? JSON.parse(item) : null;
  },

  remove(key: string) {
    if (typeof window === "undefined") return;

    localStorage.removeItem(key);
  },
};