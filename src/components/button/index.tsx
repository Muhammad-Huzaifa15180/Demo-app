import './index.css'

const Button = ({ text, type }: { text: string; type?: string }) => {
  return (
    <button className={`${type}`}>
      {text}
    </button>
  );
};

export default Button;
