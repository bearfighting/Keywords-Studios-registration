import FormInternal from "./FormInternal.component";
import axios from "axios";

export default function RegistrationForm({ handleNumberRegistred}) {
    const handleSubmit = async ({name, email, date, time}) => {
      if (name && email && date && time) {
        let reponse = await axios.post("http://localhost:8080/api/registration", {
          name, email, date, time
        });
        handleNumberRegistred(reponse.data[0]);
      }
    }

    return (
      <FormInternal handleSubmit={handleSubmit}/>
    )
}