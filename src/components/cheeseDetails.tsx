//Very Simple Text Components
interface Props {
  children: string;
}

const CheeseDetails = ({ children }: Props) => {
  return (
    <div>
      <h2 className="textstyler ">This Cheese is {children}</h2>
    </div>
  );
};

export default CheeseDetails;
