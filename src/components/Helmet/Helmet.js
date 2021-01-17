export default function Helmet() {
  const icons = document.createElement('script');
  icons.src = 'https://kit.fontawesome.com/307e2eecdc.js';
  icons.crossOrigin = 'anonymous';

  document.title = 'Vtask';
  document.head.appendChild(icons);
}
