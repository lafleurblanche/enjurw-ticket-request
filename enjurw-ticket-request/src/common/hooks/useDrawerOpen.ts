/* react */
import { useCallback } from "react";

/* recoil */
import { useRecoilState } from "recoil"
import { drawerOpenAtom } from "recoil/atoms/DrawerOpenAtom";

export const useDrawerOpen = () => {
  const [open, setOpen] = useRecoilState(drawerOpenAtom);
  return {
    open,
    setOpen,
    toggleOpen: useCallback(() => {
      setOpen((current) => !current);
    }, [setOpen]),
  };
}
