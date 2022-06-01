export type ProtectedRouteProps = {
    hasRole: string;
    outlet: JSX.Element;
    login: JSX.Element
  };
  
  export default function ProtectedRoute({
    hasRole,
    outlet,
    login
  }: ProtectedRouteProps) {
    if (hasRole === 'ROLE_USER' || hasRole === 'ROLE_ADMIN') {
      return outlet;
    } else {
      return login;
    }
  }