import React from 'react'
import "TinderCards.css"

function TinderCards() {
  consts [people, setPeople] = userState([
    {
      name: 'Elon Musk',
      url: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg'
    }
  ]);
  return (
    <div className="tinderCards"></div>
  )
}

export default TinderCards