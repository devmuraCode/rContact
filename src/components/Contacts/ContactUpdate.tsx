import { contactApi } from '../../services/ContactService'
import ContactItem from './ContactItem'

const ContactUpdate = () => {
  const {
    data: contacts,
    error,
    isLoading,
  } = contactApi.useFetchAllContactsQuery(1)
  return (
    <div>
      <div className="post__list">
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>Error</h1>}
        {/* {contacts &&
          contacts?.map((contact) => (
            <ContactItem key={contact._id} contact={contact} />
          ))} */}
      </div>
    </div>
  )
}

export default ContactUpdate
