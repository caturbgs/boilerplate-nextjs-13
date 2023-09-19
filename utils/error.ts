import { toast } from 'react-hot-toast';

export function catchError(err: unknown) {
  if (err instanceof Error) {
    return toast.error(err.message, {
      position: 'bottom-right',
    });
  } else {
    return toast.error('Something went wrong, please try again later.', {
      position: 'bottom-right',
    });
  }
}
