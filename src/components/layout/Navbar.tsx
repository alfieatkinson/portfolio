import React from 'react';
import { lazy, useState } from 'react';
import useEventListener from '@/hooks/useEventListener';
import Menu3FillIcon from 'remixicon-react/Menu3FillIcon';

const Title = lazy(() => import('@/components/common/Title'));
const NavLinks = lazy(() => import('@/components/common/NavLinks'));
const IconButton = lazy(() => import('@/components/common/reusable/buttons/IconButton'));
const ThemeSwitcher = lazy(() => import('@/components/common/ThemeSwitcher'));
const Dropdown = lazy(() => import('@/components/common/Dropdown'));

export default function Navbar(): React.JSX.Element {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 640);
  const [toggle, setToggle] = useState<boolean>(false);

  const handleWidthChange = (): void => setIsMobile(window.innerWidth < 640);
  useEventListener('resize', handleWidthChange);

  const onThemeButtonClick = (): void => setToggle(!toggle);

  return (
    <nav className='fixed top-0 z-50 w-full backdrop-blur-xl'>
      <div className='container flex flex-wrap items-center justify-between py-4 xl:max-w-screen-xl'>
        <Title size='sm' />
        <div className='flex items-center space-x-2 sm:space-x-6'>
          {!isMobile && <NavLinks />}
          {isMobile && (
            <div className='relative'>
              <IconButton
                icon={<Menu3FillIcon size={20} />}
                screenReaderText='Toggle dropdown'
                onClick={onThemeButtonClick}
              />
              {toggle && <Dropdown />}
            </div>
          )}
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}
