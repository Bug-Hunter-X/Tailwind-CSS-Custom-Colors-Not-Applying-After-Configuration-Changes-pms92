```javascript
// ... your Tailwind CSS configuration ...
module.exports = {
  // ... other config options ...
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], // Ensure correct paths
  theme: {
    extend: {
      colors: {
        'custom-color': '#abcdef', // Ensure correct color definition
        'another-custom-color': '#fedcba' // add another custom color and make sure it is working
      },
    },
  },
  plugins: [],
};
```