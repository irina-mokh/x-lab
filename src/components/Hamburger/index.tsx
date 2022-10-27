import { IMenuProps } from '../Layout';

export const Hamburger = (props: IMenuProps) => {
  return (
    <div
      className={`hamburger ${props.isOpened ? 'hamburger_active' : ''}`}
      onClick={() => props.toggleMenu()}
    >
      <div className="hamburger__lines"></div>
    </div>
  );
};
