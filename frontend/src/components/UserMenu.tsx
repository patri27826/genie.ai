import React from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Button } from 'primereact/button';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

interface UserMenuProps {
  op: React.RefObject<OverlayPanel>;
}

const UserMenu = ({ op }: UserMenuProps) => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuth();
  const access_token = localStorage.getItem('access_token') ?? '';

  const logout = async () => {
    await signOut(auth);
    localStorage.removeItem('user_name');
    localStorage.removeItem('user_email');
    localStorage.removeItem('access_token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <OverlayPanel ref={op}>
      <div className="mb-3">
        <Button
          onClick={() => {
            navigator.clipboard.writeText(access_token);
            op.current?.hide();
          }}
        >
          Copy Token
        </Button>
      </div>
      <div>
        <Button
          onClick={() => {
            logout();
            op.current?.hide();
          }}
        >
          Logout
        </Button>
      </div>
    </OverlayPanel>
  );
};

export default UserMenu;
