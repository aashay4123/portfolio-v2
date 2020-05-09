import { Container } from "reactstrap";

export default function BaseWrapper(props) {
  const { className } = props;
  return (
    <div className={`base-page ${className}`}>
      <Container>{props.children}</Container>
    </div>
  );
}
BaseWrapper.defaultprops = {
  className: "",
};
