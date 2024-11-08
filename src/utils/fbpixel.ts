declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

export const pageview = () => {
  window.fbq("track", "PageView");
};

export const event = (name: string, options: any = {}) => {
  window.fbq("track", name, options);
};
