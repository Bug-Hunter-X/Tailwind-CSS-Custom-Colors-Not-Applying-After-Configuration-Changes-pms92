```javascript
// ... your Tailwind CSS configuration ...
module.exports = {
  // ... other config options ...
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], // Adjust paths as needed
  theme: {
    extend: {
      colors: {
        'custom-color': '#abcdef', // Example custom color
      },
    },
  },
  plugins: [],
};
```