import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ThreeDots 
      height="80" 
      width="80" 
      radius="9"
      color="#ea3cfd"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: 20,
      }}
      wrapperClassName=""
      visible={true}
    />
  );
};