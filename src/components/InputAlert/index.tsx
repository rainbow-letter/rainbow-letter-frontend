type Props = {
  message: string;
  isVisible: boolean;
  reserveSpace: boolean;
};

function InputAlert({ message, isVisible, reserveSpace = false }: Props) {
  if (!isVisible) {
    return null;
  }

  const styles = reserveSpace ? 'h-10' : '';

  return (
    <div className={`${styles} px-2.5 pt-2.5 text-caption text-alarm-red`}>
      {message}
    </div>
  );
}

export default InputAlert;
