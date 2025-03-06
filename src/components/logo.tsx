export function Logo() {
  return (
    <div>
      Income Tax Calculator{" "}
      <small>v{process.env.NEXT_PUBLIC_REACT_APP_VERSION}</small>
    </div>
  );
}
