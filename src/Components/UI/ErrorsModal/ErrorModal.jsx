import Button from "../Buttons/Button";
import Card from "../Cards/Card";
import classes from "./ErrorModal.module.css";
const ErrorModal = ({ title, message, onClickButton }) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={onClickButton} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{title}</h2>
        </header>
        <div className={classes.content}>
          <p>{message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={onClickButton}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
