//Button Component
interface Props {
  children: string;
  onClick: () => void;
}
//Takes the input of a name, to create a more dynamic button
const Button = ({ children, onClick }: Props) => {
  return (
    <button className="buttonstyler" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
