import { Suspense } from "react";
import AddContact from "./components/addContact/AddContacts";
import Contact from "./components/Contacts/Contact";
import { ContactPageAsync } from "./components/Contacts/Contact.async";

function App() {
  return (
    <div className="App">
      <AddContact />
      <Suspense fallback={<h1>Loading...</h1>}>
        <ContactPageAsync />
      </Suspense>
    </div>
  );
}

export default App;
