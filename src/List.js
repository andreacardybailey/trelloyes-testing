import React from 'react';
import Card from './Card'


function List(props) {
  return (
    <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
        {props.cards.map(card => (
            <Card key={card.id} title={card.title} content={card.content} />
        ))}
      </div>
    </section>
  )
}

List.defaultProps = {
  header: "Header",
  // cards: []
}

export default List
