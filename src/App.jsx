import { Outlet } from 'react-router-dom';

const App = () => {


  return (
    <div className='flex w-full bg-white dark:bg-[#265753] text-stone-900 dark:text-white'>
        <div className='h-auto w-full px-10'>
          <Outlet />
        </div>
    </div>
  );
};

export default App;
