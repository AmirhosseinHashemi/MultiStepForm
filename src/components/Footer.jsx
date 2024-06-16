import Button from "./Button";

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 mx-auto flex max-w-[375px] flex-row-reverse justify-between bg-neutral-white p-4">
      <Button type="next">Next Step</Button>
    </footer>
  );
}

export default Footer;
