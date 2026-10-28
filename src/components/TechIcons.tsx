import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = 'w-5 h-5' }) => {
  switch (name) {
    case 'TypeScript':
      return (
         <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
    >
      <rect width="24" height="24" rx="2" fill="#3178C6" />

      <path
        fill="#fff"
        d="M13.5 18.5v-2.2c.5.4 1.3.7 2.1.7
           1 0 1.5-.3 1.5-.9 0-.3-.1-.5-.4-.7
           -.2-.2-.7-.4-1.4-.6-1.3-.5-2-1.2-2-2.3
           0-1.5 1.2-2.4 3-2.4.8 0 1.5.1 2 .4v2
           c-.6-.4-1.3-.6-2-.6-.8 0-1.2.3-1.2.8
           0 .3.1.5.4.7.2.2.7.4 1.3.6
           1.4.5 2.1 1.2 2.1 2.4 0 1.5-1.2 2.5-3.2 2.5
           -1 0-1.8-.2-2.2-.4Z"
      />

      <path
        fill="#fff"
        d="M12.5 10.3h-2.6v8.4H7.6v-8.4H5V8.4h7.5v1.9Z"
      />
    </svg> 
      );

    case 'JavaScript (ES6+)':
      return (
           <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
    >
      <rect width="24" height="24" fill="#F7DF1E" />

      <path
        fill="#000"
        d="M13.4 18.5c.5.8 1.1 1.2 2.1 1.2
           .8 0 1.3-.4 1.3-1 0-.7-.5-1-1.5-1.4
           l-.5-.2c-1.5-.6-2.5-1.4-2.5-3.1
           0-1.5 1.1-2.7 2.9-2.7 1.3 0 2.2.5 2.9 1.6
           l-1.6 1c-.4-.7-.7-.9-1.3-.9
           -.6 0-.9.4-.9.9 0 .6.4.9 1.3 1.3
           l.5.2c1.8.8 2.8 1.6 2.8 3.4
           0 1.9-1.5 3-3.5 3-1.9 0-3.1-.9-3.7-2.1
           l1.7-1.2Z"
      />

      <path
        fill="#000"
        d="M5.2 18.6c.4.7.8 1.2 1.7 1.2
           .8 0 1.3-.3 1.3-1.5v-6.8h2.1v6.8
           c0 2.2-1.3 3.2-3.3 3.2-1.8 0-2.8-.9-3.3-2.1
           l1.5-.8Z"
      />
    </svg>

      );

    case 'Python':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M11.9 2C8.8 2 8.9 3.3 8.9 3.3L9 4.8H12V5.3H6.4C4.6 5.3 3.5 6.6 3.5 8.9C3.5 11.2 4.4 12.3 5.7 12.3H6.8V10.8C6.8 9.3 8.1 8.1 9.6 8.1H14.1C15.3 8.1 16.2 7.2 16.2 6V3.3C16.2 3.3 15.1 2 11.9 2ZM10.5 3.5C10.9 3.5 11.2 3.8 11.2 4.2C11.2 4.6 10.9 4.9 10.5 4.9C10.1 4.9 9.8 4.6 9.8 4.2C9.8 3.8 10.1 3.5 10.5 3.5Z" fill="#3776AB" />
          <path d="M12.1 22C15.2 22 15.1 20.7 15.1 20.7L15 19.2H12V18.7H17.6C19.4 18.7 20.5 17.4 20.5 15.1C20.5 12.8 19.6 11.7 18.3 11.7H17.2V13.2C17.2 14.7 15.9 15.9 14.4 15.9H9.9C8.7 15.9 7.8 16.8 7.8 18V20.7C7.8 20.7 8.9 22 12.1 22ZM13.5 20.5C13.1 20.5 12.8 20.2 12.8 19.8C12.8 19.4 13.1 19.1 13.5 19.1C13.9 19.1 14.2 19.4 14.2 19.8C14.2 20.2 13.9 20.5 13.5 20.5Z" fill="#FFD43B" />
        </svg>
      );

    case 'C Language':
    case 'C':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#00599C" />
          <path d="M15 8.5C14.2 7.6 13.1 7 11.8 7C9.1 7 7 9.2 7 12C7 14.8 9.1 17 11.8 17C13.1 17 14.2 16.4 15 15.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'Java':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M8.5 19.5C11.5 20.5 15.5 20.5 18 19.5" stroke="#EA2D2E" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M7 16.5C10.5 17.8 16 17.8 19 16.5" stroke="#5382A1" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M13 3C11 5 10 7 12 9C14 11 14 12 11 14" stroke="#EA2D2E" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M16 6C15 8 14 9 16 11C18 13 16 14 14 15" stroke="#5382A1" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case 'HTML5 / CSS3':
      return (
        <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
    >
      {/* Orange HTML5 shield */}
      <path
        fill="#E44D26"
        d="M3 2h18l-1.64 18.54L12 22l-7.36-1.46L3 2Z"
      />

      {/* Lighter orange right side */}
      <path
        fill="#F16529"
        d="M12 3.5v16.92l5.95-1.18L19.36 3.5H12Z"
      />

      {/* White number 5 */}
      <path
        fill="#EBEBEB"
        d="M6.8 5.5h10.7l-.3 2.3H9.4l.2 2.1h7.4l-.8 7.2-4.2 1.15-4.2-1.15-.3-3.4h2.3l.15 1.65 2.05.55 2.05-.55.3-3.2H7.6L6.8 5.5Z"
      />
    </svg>
      );

    case 'React 18 / 19':
    case 'React':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#61DAFB" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
        </svg>
      );

    case 'React Native':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#0F172A" stroke="#61DAFB" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="3" ry="7.5" stroke="#61DAFB" strokeWidth="1.2" />
          <ellipse cx="12" cy="12" rx="3" ry="7.5" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="3" ry="7.5" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.5" fill="#61DAFB" />
        </svg>
      );

    case 'Node.js / Express':
      return (
         <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
    >
      <rect width="24" height="24" fill="#8CC84B" />

      <path
        d="M12 2.5 20.6 7.5V16.2L12 21.2L8.7 19.3"
        stroke="white"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M12 2.5 3.4 7.5V16.2L7.2 18.4
           C8.1 18.9 9.1 18.3 9.1 17.3V8"
        stroke="white"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M16.4 9.1C15.8 8.7 15 8.5 14.1 8.5
           C12.1 8.5 10.9 9.5 10.9 11
           C10.9 12.5 12 13.1 14 13.6
           C15.1 13.9 15.5 14.2 15.5 14.8
           C15.5 15.4 14.9 15.8 13.9 15.8
           C12.9 15.8 12.1 15.5 11.3 14.9"
        stroke="white"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
      );

    case 'Spring Boot':
      return (
      <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
    >
      <rect width="24" height="24" fill="#8CC84B" />

      {/* White background circle */}
      <circle cx="12" cy="12" r="9" fill="white" />

      {/* Green Leaf & Stem Graphics */}
      <path
        d="M6.2 16.8C6.2 16.8 9.2 18.5 12.5 16.5C15.8 14.5 17.5 11 17.5 7.5C14 7.5 10.5 9.2 8.5 12.5C7.2 14.5 6.5 15.8 6.2 16.8Z"
        fill="#8CC84B"
      />
      <path
        d="M17.5 7.5C17.5 7.5 16.5 5.2 13.5 4C11.5 3.2 8.5 3.8 6.2 6C5 7.2 4.2 8.8 4 10.5C5.5 10 7.5 9.5 9.5 10.5C12.5 12 14.5 14.5 16.2 17.8C17 15.2 17.5 10.5 17.5 7.5Z"
        fill="#8CC84B"
      />
      <circle cx="6.5" cy="16.5" r="0.9" fill="#8CC84B" />

      {/* Internal leaf contour/vein lines */}
      <path
        d="M4.5 13.5C7.5 16 11.5 17.2 16.5 15"
        stroke="#8CC84B"
        strokeWidth="0.75"
        strokeLinecap="round"
      />
      <path
        d="M7.5 6.5C10 9 13.5 11 16.5 11.5"
        stroke="#8CC84B"
        strokeWidth="0.75"
        strokeLinecap="round"
      />
    </svg>
      );

    case 'Pygame':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#F87171" />
          <circle cx="9" cy="12" r="2.5" fill="white" />
          <circle cx="15" cy="12" r="2.5" fill="white" />
          <path d="M6 16C8 18 16 18 18 16" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'Tailwind CSS':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M6 10.5C7.2 8.5 9 7.5 11.5 7.5C15 7.5 16 10 17.5 10.5C18.5 10.8 19.5 10.2 20.5 9C19.3 11 17.5 12 15 12C11.5 12 10.5 9.5 9 9C8 8.7 7 9.3 6 10.5ZM2 16.5C3.2 14.5 5 13.5 7.5 13.5C11 13.5 12 16 13.5 16.5C14.5 16.8 15.5 16.2 16.5 15C15.3 17 13.5 18 11 18C7.5 18 6.5 15.5 5 15C4 14.7 3 15.3 2 16.5Z" fill="#38BDF8" />
        </svg>
      );

    case 'MySQL':
    case 'SQL':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#00758F" />
          <ellipse cx="12" cy="7" rx="6" ry="2" fill="white" />
          <path d="M6 7V17C6 18.1 8.7 19 12 19C15.3 19 18 18.1 18 17V7" stroke="white" strokeWidth="1.5" />
          <path d="M6 12C6 13.1 8.7 14 12 14C15.3 14 18 13.1 18 12" stroke="white" strokeWidth="1.5" />
        </svg>
      );

    case 'PostgreSQL':
      return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
    >
      {/* Orelha Esquerda */}
      <path
        d="M9 5.2C7.2 5.2 4.2 6 3.5 9C2.8 12 3.8 16.5 5.5 18.2C7.2 19.8 9.5 18.5 9.5 18.5"
        stroke="#336791"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Orelha Direita */}
      <path
        d="M15 5.2C16.8 5.2 19.8 6 20.5 9C21.2 12 20.2 16.5 18.5 18.2C16.8 19.8 14.5 18.5 14.5 18.5"
        stroke="#336791"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Cabeça e Tromba */}
      <path
        d="M9 5.2C10.5 4 12 4 15 5.2C15.8 7.5 15.8 11.5 15.8 14.2C15.8 17.5 16.2 19.5 15 20.8C13.8 22 10.2 22 9 20.8C7.8 19.5 8.2 17.5 8.2 14.2C8.2 11.5 8.2 7.5 9 5.2Z"
        stroke="#336791"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Divisão central da testa */}
      <path
        d="M12 4.2V16.5"
        stroke="#336791"
        strokeWidth="1.35"
        strokeLinecap="round"
      />

      {/* Olho esquerdo */}
      <path
        d="M8.2 9.2C8.5 8.5 9.2 8.5 9.8 9.2C10.5 9.8 9.8 11.5 9 12"
        stroke="#336791"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Olho direito */}
      <path
        d="M15.8 9.2C15.5 8.5 14.8 8.5 14.2 9.2C13.5 9.8 14.2 11.5 15 12"
        stroke="#336791"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Presa esquerda */}
      <path
        d="M8.5 16.5C7.2 17 5.5 17 4.8 16C4.8 15.5 5.8 15.2 6.8 15.8"
        stroke="#336791"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Presa direita */}
      <path
        d="M15.5 16.5C16.8 17 18.5 17 19.2 16C19.2 15.5 18.2 15.2 17.2 15.8"
        stroke="#336791"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
      );

    case 'Docker Database':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#2496ED" />
          <rect x="5" y="10" width="3" height="3" fill="white" />
          <rect x="9" y="10" width="3" height="3" fill="white" />
          <rect x="13" y="10" width="3" height="3" fill="white" />
          <rect x="9" y="6" width="3" height="3" fill="white" />
          <path d="M4 14C5 14 6 15 8 15C10 15 11 14 13 14C15 14 16 15 18 15C20 15 21 14 22 14" stroke="white" strokeWidth="1.5" />
        </svg>
      );

    case 'Pandas & NumPy':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#150458" />
          <rect x="6" y="5" width="4" height="14" fill="#FFD43B" />
          <rect x="14" y="9" width="4" height="10" fill="#3776AB" />
          <circle cx="16" cy="6" r="2" fill="#E70488" />
        </svg>
      );

    case 'Scikit-Learn':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#F89939" />
          <circle cx="8" cy="8" r="2.5" fill="#3499CD" />
          <circle cx="16" cy="8" r="2.5" fill="#3499CD" />
          <circle cx="12" cy="16" r="3" fill="white" />
          <line x1="8" y1="8" x2="12" y2="16" stroke="white" strokeWidth="1.5" />
          <line x1="16" y1="8" x2="12" y2="16" stroke="white" strokeWidth="1.5" />
        </svg>
      );

    case 'Selenium Automation':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#43B02A" />
          <path d="M6 7H18V17H6V7Z" stroke="white" strokeWidth="1.5" />
          <path d="M9 12L12 15L16 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'Jupyter Notebook':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#F37626" />
          <ellipse cx="12" cy="7" rx="7" ry="2.5" fill="white" />
          <ellipse cx="12" cy="17" rx="7" ry="2.5" fill="white" />
          <circle cx="12" cy="12" r="2" fill="#767676" />
        </svg>
      );

    case 'Git & GitHub':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#F05032" />
          <circle cx="8" cy="8" r="2" fill="white" />
          <circle cx="8" cy="16" r="2" fill="white" />
          <circle cx="16" cy="12" r="2" fill="white" />
          <path d="M8 10V14M8 10L14 12" stroke="white" strokeWidth="1.5" />
        </svg>
      );

    case 'REST & APIs':
    case 'REST & gRPC APIs':
    case 'Relational Modeling':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      );

    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
  }
};
