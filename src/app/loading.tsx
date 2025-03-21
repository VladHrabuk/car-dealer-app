export default function SpinnerLoader() {
  const commonStyles =
    'absolute w-full h-full rounded-full border-[15px] border-transparent mix-blend-overlay';
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white z-10">
      <div className="w-64 h-64 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className={`${commonStyles} border-t-grey-dark animate-spin-fast`}
        ></div>
        <div
          className={`${commonStyles} border-l-grey animate-spin-normal`}
        ></div>
        <div
          className={`${commonStyles} border-r-grey-light animate-spin-slow`}
        ></div>
      </div>
    </div>
  );
}
