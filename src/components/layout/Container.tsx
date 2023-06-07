interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className={`mx-8 sm:mx-16 lg:mx-32`}>{children}</div>;
};

export default Container;
