import { VariantType, useSnackbar } from "notistack";

const Notification = () => {
  const { enqueueSnackbar } = useSnackbar();
  const showNotification = (message: string, variant: VariantType) => {
    enqueueSnackbar(message, { variant });
  };
  return showNotification;
};

export default Notification;