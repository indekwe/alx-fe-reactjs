import PostsComponent from './components/PostsComponent'
import { QueryClient, QueryClientProvider } from 'react-query';
import Nav from './components/Nav';

  const queryClient = new QueryClient();

  function App() {
    return (
      <div>
        <QueryClientProvider client={queryClient}>
        <Nav></Nav>
      </QueryClientProvider>
      </div>
      
    );
  }
  export default App