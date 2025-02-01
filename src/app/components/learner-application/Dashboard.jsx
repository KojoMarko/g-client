
import styles from './styles/Dashboard.module.css';
import { LayoutDashboard } from 'lucide-react'; // Import the icon
import { Lato, Inter } from 'next/font/google';

const lato = Lato({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-lato',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-inter',
});


const Dashboard = () => {
    return (
      <div className={styles['dashboard-container']}>
        <div className={styles['dashboard-top-bar']}>
          <div className={styles['dashboard-content']}>
            <LayoutDashboard className={styles['dashboard-icon']} />
            <span className={`${styles['dashboard-text']} ${lato.className}`}>Dashboard</span>
          </div>
        </div>
        
    </div>
    );
  };
  
  export default Dashboard;