// Utility function to generate unique API keys
export const generateApiKey = (): string => {
  const prefix = 'lister_';
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  
  for (let i = 0; i < 24; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  
  return prefix + result;
};

// Function to validate API key format
export const validateApiKey = (key: string): boolean => {
  const apiKeyRegex = /^lister_[a-z0-9]{24}$/;
  return apiKeyRegex.test(key);
};

// Function to mask API key for display
export const maskApiKey = (key: string): string => {
  if (key.length <= 8) return key;
  return key.substring(0, 8) + '•'.repeat(key.length - 8);
};