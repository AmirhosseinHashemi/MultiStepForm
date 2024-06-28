import useFormContext from "../hooks/useFormContext";

import AddOns from "./AddOns";
import FinishingUp from "./FinishingUp";
import PersonalInfoForm from "./PersonalInfoForm";
import Plan from "./Plan";
import Thank from "./Thank";

function Main() {
  const { level } = useFormContext();

  return (
    <main className="px-4">
      {level === 1 && <PersonalInfoForm />}
      {level === 2 && <Plan />}
      {level === 3 && <AddOns />}
      {level === 4 && <FinishingUp />}
      {level === 5 && <Thank />}
    </main>
  );
}

export default Main;
