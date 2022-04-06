import React from 'react'
import 'antd/dist/antd.css'
import './App.css'
import { PagesRouter } from './pages/PagesRouter';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from 'antd';
import FilterContextProvider from './context/FilterContex';
import DrawerSider from './shared/components/DrawerSider';

const { Content } = Layout;

function App() {
  return (
    <FilterContextProvider>
      <div className="app">
        <BrowserRouter>
          <Layout>
            <DrawerSider />

            <Layout>
              <Content>
                <PagesRouter />
              </Content>
            </Layout>
          </Layout>
        </BrowserRouter>
      </div>
    </FilterContextProvider>

  )
}

export default App
