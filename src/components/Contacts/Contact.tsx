
import { useState } from 'react'
import { IContact } from '../../models/IContact'
import { contactApi } from '../../services/ContactService'
import ContactItem from './ContactItem'

const Contact = () => {
  const {
    data,
    error,
    isLoading,
  } = contactApi.useFetchAllContactsQuery(1)

  const [deleteContact, {}] = contactApi.useDeleteContactMutation()
  const [updateContact, {}] = contactApi.useUpdateContactMutation()

  const handlerRemove = (contact: IContact) => {
    deleteContact(contact)
  }
  const handlerUpdate = (contact: IContact) => {
    updateContact(contact)
  }

  const [userList, setUserList] = useState<
    { fio: string; phone_number: number; email: string}[] | undefined
  >(data)
  // const [userList, setUserList] = useState(data)
  console.log(userList)

  const [text, setText] = useState<string>('')

  const handlerClick = () => {
    const findUsers =
      userList && userList?.length > 0
        ? userList?.filter((u) => u?.fio === text)
        : undefined

    setUserList(findUsers)
  }

  return (
    <div className="wrap">
      <div className="container">
        <div className="search">
          <input
            className="inp"
            type="text"
            placeholder="Search Contact"
            value={text}
            onChange={(e) => {
              setText(e.target.value)
              setUserList(data)
            }}
          />
          <button disabled={!text} onClick={handlerClick} className="btn">
            Search
          </button>
        </div>
        <div className="block">
          {isLoading && <h1>Loading...</h1>}
          {error && <h1>Error</h1>}
          {userList &&
            userList?.map((contact: any) => (
              <div className="card" key={contact._id}>
                <div >
                  <div className="fio">
                    <h1>{contact?.fio}</h1>
                    <h2>{contact?.email}</h2>
                  </div>
                  <h3>{contact?.phone_number}</h3>
                  <h4>{contact?.category}</h4>

                  <ContactItem
                    remove={handlerRemove}
                    update={handlerUpdate}
                    contact={contact}
                    key={contact._id}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Contact
