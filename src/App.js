import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import styles from './App.module.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './context/AuthContext';

const queryClient = new QueryClient();
function App() {
  return (
    <div>
      <AuthProvider>
        <Header />
        <main className={styles.main}>
          <div className={styles.container}>
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
          </div>
        </main>
      </AuthProvider>
    </div>
  );
}

export default App;
