import check from '../../../assets/humbleicons_check.svg';

type Props = {
  id: string;
  label: string;
  onChange: (e: any, name: string) => void;
  checked: boolean;
};

export default function CheckBox({ id, label, onChange, checked }: Props) {
  return (
    <>
      <div className="flex">
        <input
          checked={checked}
          className="size-5 cursor-pointer appearance-none rounded border border-orange-400 bg-white checked:bg-orange-400"
          id={id}
          onChange={(e) => onChange(e, label)}
          type="checkbox"
        />
        <img
          alt="check"
          className={`${
            checked ? 'block' : 'hidden'
          } absolute size-5 cursor-pointer`}
          onClick={(e) => onChange(e, label)}
          src={check}
        />
      </div>
      <label className="w-full cursor-pointer font-medium" htmlFor={id}>
        {label}
      </label>
    </>
  );
}
