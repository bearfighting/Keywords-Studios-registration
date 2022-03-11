import FormInternal from "./FormInternal.component";
import axios from "axios";
import { REGISTRATION_URL } from "../url";

export default function RegistrationForm({ handleNumberRegistred}) {
    const handleSubmit = async ({name, email, date, time}) => {
      if (name && email && date && time) {
        let reponse = await axios.post(REGISTRATION_URL, {
          name, email, date, time
        });
        handleNumberRegistred(reponse.data[0]);
      }
    }

    return (
      <FormInternal handleSubmit={handleSubmit}/>
    )
}