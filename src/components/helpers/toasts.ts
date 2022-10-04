import { toast } from 'react-toastify';

export const successToast = () => {
  toast.success('Product is added to cart', {
    position: 'bottom-left',
  });
};

export const errorToast = () => {
  toast.error('Product is removed from cart', {
    position: 'bottom-left',
  });
};

export const warningToast = () => {
  toast.warning('Decreased product quantity', {
    position: 'bottom-left',
  });
};

export const infoToast = () => {
  toast.info('Product is added to favorites', {
    position: 'bottom-left',
  });
};
