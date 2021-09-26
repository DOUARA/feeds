import Header from './components/Header';
import Navigation from './components/Navigation';
import Timeline from './components/Timeline';
import PostInfo from './components/PostInfo';
import { QueryClient, QueryClientProvider } from 'react-query';
import styled from 'styled-components';
import NetworkStatus from "./components/NetworkStatus";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
        <Header/>
        <Main>
          <Navigation />
          <Timeline />
          <PostInfo />
      </Main>
      <ToastContainer autoClose={3000} hideProgressBar />
      <NetworkStatus/>
    </QueryClientProvider>
  );
}

export default App;


const Main = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;  
  margin: auto;
  margin-top: 70px;
`