import { Outlet, useLocation } from 'react-router-dom'

import styled from 'styled-components'

import Header from './Header'
import Footer from './Footer'

import { UserContextProvider } from '../../context/userContext'

const Layout = ({ children }) => {
  const location = useLocation()
  const hideHeaderFooter = location.pathname === '/login' || location.pathname === '/signup'

  return (
    <>
      <UserContextProvider>
        {!hideHeaderFooter && <Header />}
        <LayoutContainer>
          <Outlet /> {/* Outlet을 사용해 중첩 라우팅 */}
          {children} {/* 직접 전달된 자식 컴포넌트 렌더링 */}
        </LayoutContainer>
        {!hideHeaderFooter && <Footer />}
      </UserContextProvider>
    </>
  )
}

export default Layout

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  min-height: calc(100vh - 100px);
  margin: 0 auto;

  /* 미디어 쿼리: 768px 이하일 때 */
  @media (max-width: 768px) {
    padding: 10px;
    max-width: 100%;
  }
`
