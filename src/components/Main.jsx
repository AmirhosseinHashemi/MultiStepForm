import useFormContext from "../hooks/useFormContext";

import AddOns from "./AddOns";
import FinishingUp from "./FinishingUp";
import PersonalInfoForm from "./PersonalInfoForm";
import Plan from "./Plan";

function Main() {
  const { level } = useFormContext();

  return (
    <main className="px-4">
      {level === 1 && <PersonalInfoForm />}
      {level === 2 && <Plan />}
      {level === 3 && <AddOns />}
      {level === 4 && <FinishingUp />}
    </main>
  );
}

export default Main;
