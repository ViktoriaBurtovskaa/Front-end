import s from './Card.module.css'

function Card({rus,eng,lang}) {

    const word = lang === 'eng' ? eng : rus;

    const card_styles = {
        color: lang === 'rus' ? 'rgb(41, 128, 185)' : 'white',
        backgroundColor: lang === 'rus' ? 'white' : 'rgb(41, 128, 185)'
    }

    return (
    <div className={s.wordCard} style={card_styles}>
        { word }
    </div>
  )
}

export default Card