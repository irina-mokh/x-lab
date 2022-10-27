import { IAddress } from '../../pages/Addresspage';

export const Address = (props: IAddress) => {
  return <p className="address">{props.value}</p>;
};
