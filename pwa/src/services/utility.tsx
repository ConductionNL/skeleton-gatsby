export const centsToString = (cents: string) => {
  const len = cents.length;
  return <>&euro; {`${cents.substring(0, len - 2)}.${cents.substring(len - 2)}`}</>;
};
