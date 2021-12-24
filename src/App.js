import { Component } from "react";

import Wrapper from "./components/Wrapper/Wrapper.styled";
import MainHeader from "./components/MainHeder/MainHeader.styled";
import ContactsList from "./components/ContactsList/ContactsList";
import Form from "./components/Form/Form";
import shortid, { generate } from "shortid";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
  };
  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };
  formSubmitHandler = (data) => {
    console.log(data);
    const contactId = shortid.generate();
    this.setState({
      contacts: this.state.contacts.concat({
        id: contactId,
        name: data.name,
        number: data.number,
      }),
    });
  };

  render() {
    const { contacts } = this.state;
    return (
      <Wrapper>
        <MainHeader />
        <Form onSubmitProp={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <ContactsList
          contacts={contacts}
          onDeleteContact={this.deleteContact}
        />
      </Wrapper>
    );
  }
}

export default App;
