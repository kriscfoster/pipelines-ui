import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: "translate(-50%, -50%)"
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  buttonContainer: {
    textAlign: "left"
  }
}));

export default function NewPipline(props) {
  const FormComponent = props.formComponent;
  const { title } = props;
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Box mb={2} className={classes.buttonContainer}>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          {title}
        </Button>
      </Box>
      <Modal open={open} onClose={handleClose}>
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">{title}</h2>
          <FormComponent/>
        </div>
      </Modal>
    </div>
  );
}
