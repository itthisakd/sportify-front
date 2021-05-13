import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Typography from "@material-ui/core/Typography";
import { useSpring, animated } from "react-spring/web.cjs"; // web.cjs is required for IE 11 support

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[4],
    padding: "10px",
    width: "90vw",
    borderRadius: "15px",
    margin: "10px 0px",
  },
  text: {
    fontWeight: "500",
    textAlign: "center",
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

export default function SpringModal({
  open,
  handleClose,
  message,
  confirmAction,
}) {
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          margin: "10px 0px",
        }}
      >
        <Fade in={open}>
          <div
            className={classes.paper}
            onClick={() => {
              confirmAction();
              handleClose();
            }}
          >
            <Typography
              variant="h6"
              component="h2"
              color="secondary"
              className={classes.text}
            >
              {message}
            </Typography>
          </div>
          <div className={classes.paper} onClick={handleClose}>
            <Typography
              variant="h6"
              component="h2"
              style={{ color: "darkgray" }}
              className={classes.text}
            >
              CANCEL
            </Typography>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
