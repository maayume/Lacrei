import Routes from "./Routes";
import { FormProvider } from "./contexts/FormContext"

export default function App(){
  return(
    <div className="App">
      <FormProvider>
        <Routes />
      </FormProvider>
    </div>
  );
}