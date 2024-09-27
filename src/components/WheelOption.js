export function WheelOption({ css, index, children }) {
  return (
    <div className={css} style={{ transform: `rotate(${24 * index}deg)` }}>
      <span>{children}</span>
    </div>
  );
}
