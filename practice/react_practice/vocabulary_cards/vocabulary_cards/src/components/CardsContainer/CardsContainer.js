import s from './CardsContainer.module.css' 
import {words} from '../data/words'
import Card from '../Card/Card'

function CardsContainer() {
  return (
    <div className={s.cards_container}>
        {
        words.map(el => <Card key={el.id} {...el}/>)
      }
    </div>
  )
}

export default CardsContainer

// 3. Используя массив words в компоненте CardsContainer для каждого слова создать карточку Card. => вывести все слова на русском языке на экран
// 4. Если у объекта в lang указано eng, то отобразить слово на английском. А если в lang rus - то на русском