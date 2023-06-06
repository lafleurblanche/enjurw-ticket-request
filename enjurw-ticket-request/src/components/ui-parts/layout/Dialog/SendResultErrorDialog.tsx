
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

/* recoil */
import {
  useRecoilState,
  useRecoilValue
} from "recoil";

/* recoil(atoms) */
import {
  sendResultErrorDialogAtom
} from "recoil/atoms/dialog";
import { ErrorDetailAtom } from "recoil/atoms/dialog/ErrorDetailAtom";

export default function SendResultErrorDialog(): JSX.Element {
  const [open, setSendResultErrorDialogOpen] = useRecoilState(sendResultErrorDialogAtom);
  const errorDetail = useRecoilValue(ErrorDetailAtom);

  const handleClose = () => {
    setSendResultErrorDialogOpen(false);
  };

  let error = errorDetail

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"発信処理エラー"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            発信内容に誤りがあります。<br />
            発信内容を確認して、再度発信処理を行ってください。<br />
            エラー内容:{error}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
