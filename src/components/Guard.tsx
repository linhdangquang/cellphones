import { Navigate } from 'react-router-dom';

type Props = {
  children: JSX.Element;
};

const Guard = (props: Props) => {
  const { children } = props;
  const user = JSON.parse(localStorage.getItem('user')!);
  if (user?.user?.admin) {
    return children;
  }
  return <Navigate to='/' />;
};

export default Guard;
