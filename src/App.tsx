import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

import {
  NavLink,
  NavLinkRenderProps,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import classNames from 'classnames';
import { useEffect } from 'react';

const isLinkActive = ({
  isActive,
}: {
  isActive: NavLinkRenderProps['isActive'];
}) => classNames('navbar-item', { 'is-active': isActive });

export const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/home') {
      navigate('/');
    }
  }, []);

  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <html className="has-navbar-fixed-top">
        <nav
          className="navbar is-light is-fixed-top is-mobile has-shadow"
          data-cy="Nav"
        >
          <div className="container">
            <div className="navbar-brand">
              <NavLink to=".." className={isLinkActive}>
                Home
              </NavLink>
              <NavLink to="/tabs" className={isLinkActive}>
                Tabs
              </NavLink>
            </div>
          </div>
        </nav>

        <div className="section">
          <div className="container">
            <Outlet />
          </div>
        </div>
      </html>
    </>
  );
};
