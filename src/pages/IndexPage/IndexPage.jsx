import styles from "./IndexPage.module.css"
import DeckCard from "../../components/DeckCard/DeckCard";
import DeckDetails from "../../components/DeckDetails/DeckDetails";

const IndexPage = (props) => {
  console.log("indexpage props:", props);
  return (
    <main className={styles.container}>
      {props.decks.map(deck => (
        <DeckCard deck={deck} key={deck._id}/>
      ))}
    </main>
  )
}

export default IndexPage