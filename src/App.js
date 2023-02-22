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
        <QueryClientProvider client={queryClient}>
          <Header />
          <main className={styles.main}>
            <div className={styles.container}>
              <Outlet />
            </div>
          </main>
        </QueryClientProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
