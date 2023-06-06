/* mui5 */
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

/* recoil */
import { useRecoilState, useRecoilValue } from "recoil";

/* recoil(atoms) */
import { RequestNumberAtom } from "recoil/atoms";
import { sendResultDialogAtom } from "recoil/atoms/dialog";

export default function SendResultDialog(): JSX.Element {
  const [open, setSendResultDialogOpen] = useRecoilState(sendResultDialogAtom);
  const requestNumber = useRecoilValue(RequestNumberAtom);

  const handleClose = () => {
    setSendResultDialogOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"発信処理が完了いたしました。"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            発信処理番号は{requestNumber}です。<br />
            発券画面から発信処理番号を入力し、発券処理を行ってください。
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
