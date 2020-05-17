import { Container } from "reactstrap";

export default function BaseWrapper(props) {
  const { className, children, title } = props;

  return (
    <div className={`base-page ${className}`}>
      <Container>
        {title && (
          <div className="page-header">
            <h1 className="page-header-title">{title}</h1>
          </div>
        )}
        {children}
      </Container>
    </div>
  );
}
BaseWrapper.defaultprops = {
  className: "",
};
