import FormInternal from "./FormInternal.component";

export default function RegistrationForm({ handleNumberRegistred}) {
    const handleSubmit = ({name, email, date, time}) => {
      if (name && email && date && time) {
        handleNumberRegistred();
      }
      console.log(name, email, date, time);
    }

    return (
      <FormInternal handleSubmit={handleSubmit}/>
    )
}