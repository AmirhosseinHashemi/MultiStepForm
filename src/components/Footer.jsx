import useFormContext from "../hooks/useFormContext";
import Button from "./Button";

function Footer() {
  const { level } = useFormContext();

  return (
    <footer className="fixed bottom-0 left-0 right-0 mx-auto flex h-16 justify-between bg-neutral-white p-4">
      {level > 1 && <Button model="back">Go Back</Button>}
    </footer>
  );
}

export default Footer;
