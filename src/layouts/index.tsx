import routes from '@/routes';
import { Link } from 'umi';

export default function Layout({ children }) {
  console.log('layouts');
  return (
    <>
      <ul>
        {routes.map((item) => {
          return (
            <li>
              <Link to={item.path}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
      <div>{children}</div>
    </>
  );
}
