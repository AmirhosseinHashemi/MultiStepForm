import useFormContext from "../hooks/useFormContext";
import Button from "./Button";

function Footer() {
  const { level } = useFormContext();

  return (
    <footer className="fixed bottom-0 left-0 right-0 mx-auto flex max-w-[375px] flex-row-reverse justify-between bg-neutral-white p-4">
      {level === 4 && <Button type="confirm">Confirm</Button>}
      {level > 0 && level < 4 && <Button type="next">Next Step</Button>}
      {level > 1 && <Button type="back">Go Back</Button>}
    </footer>
  );
}

export default Footer;
