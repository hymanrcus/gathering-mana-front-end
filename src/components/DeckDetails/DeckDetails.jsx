import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styles from "./DeckDetails.module.css"
import CardList from "../../components/CardList/CardList.jsx"



// import Loading from "../Loading/Loading"
// import AuthorInfo from "../../components/AuthorInfo/AuthorInfo"

// Services
import * as deckService from '../../services/deckService'

const DeckDetails = (props) => {
  const { id } = useParams()
  const [deck, setDeck] = useState(null)
  const [cards, setCards] = useState([])

  useEffect(() => {
    const fetchDeck = async () => {
      const data  = await deckService.show(id)
      setDeck(data)
    }
    fetchDeck()
  },[id])

console.log("Deck State", deck.cards)
console.log("")
// if (!deck) return <Loading />
  return (
    <main className={styles.container}>
      Details
      <div>
      {/* want decks index here */}
      {/* {deck.props.map((card)=>{
        <div key={card.id} >
          {card.name}
        </div>
        })} */}

      {/* <h1>{decks.title}</h1> */}
    {/* <CardList /> */}

      </div>

      <section>
        <h1>Comments</h1>
      </section>

    </main>
  )
}

export default DeckDetails