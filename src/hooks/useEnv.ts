export function useEnv() {
  const { VITE_API_URL } = import.meta.env;
  return {
    VITE_API_URL,
  };
}
