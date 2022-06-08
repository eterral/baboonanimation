import "../Card/Card.css";
import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70vw",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Card(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="card">
      <div className="card-left">
        <div>
          <img className="top-circle" src={props.employee.image} />
        </div>
        <div className="bottom-circle">
          <p className="card-text">
            {props.employee.name}
            <br />
            {props.employee.title}
          </p>
        </div>
      </div>
      <div className="bio">
        {props.employee.bio.substring(0, 270)}...
        <Button onClick={handleOpen}>More</Button>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <div className="card-left">
                <div>
                  <img className="top-circle" src={props.employee.image} />
                </div>
                <div className="bottom-circle">
                  <p className="card-text">
                    {props.employee.name}
                    <br />
                    {props.employee.title}
                  </p>
                </div>
              </div>
              <div className="bio-modal">{props.employee.bio}</div>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
