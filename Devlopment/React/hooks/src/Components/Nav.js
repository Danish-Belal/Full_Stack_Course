import { useContext } from 'react';
import context from './Context'


function Nav() {
  console.log("from Nav bar" , context);
  const theme = useContext(context);
  return (
    <div className={theme ? 'dark' : 'light'}>Nav Bar</div>
  )
}

export default Nav