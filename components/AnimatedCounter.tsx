import CountUp from 'react-countup';

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className='w-full'>
      <CountUp suffix=' zł' decimals={2} decimal=',' end={amount} />
    </div>
  );
};

export default AnimatedCounter;
