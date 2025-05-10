module.exports = {
  // ...existing code...
  theme: {
    extend: {
      // ...existing code...
      keyframes: {
        'blob-bounce': {
          '0%': {
            transform: 'translate(-100%, -100%) translate3d(0, 0, 0)',
          },
          '25%': {
            transform: 'translate(-100%, -100%) translate3d(100%, 0, 0)',
          },
          '50%': {
            transform: 'translate(-100%, -100%) translate3d(100%, 100%, 0)',
          },
          '75%': {
            transform: 'translate(-100%, -100%) translate3d(0, 100%, 0)',
          },
          '100%': {
            transform: 'translate(-100%, -100%) translate3d(0, 0, 0)',
          },
        },
      },
      animation: {
        'blob-bounce': 'blob-bounce 5s infinite ease',
      },
    },
  },
  // ...existing code...
}