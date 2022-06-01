export type ProtectedRouteProps = {
    hasRole: string;
    outlet: JSX.Element;
    login: JSX.Element
  };
  
  export default function AdminRoute({
    hasRole,
    outlet,
    login
  }: ProtectedRouteProps) {
    if (hasRole === 'ROLE_ADMIN') {
      return outlet;
    } else {
      return login;
    }
  }