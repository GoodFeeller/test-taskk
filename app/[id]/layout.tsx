import CoinInfo from '@/components/coin-info/CoinInfo';

export default function ({
  params,
  children,
}: {
  params: { id: string };
  children: React.ReactNode;
}) {
  return (
    <div>
      <CoinInfo id={params.id} />
      {children}
    </div>
  );
}
