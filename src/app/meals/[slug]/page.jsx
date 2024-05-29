import { getMeal } from '@/lib/meals'
import classes from './single-meal.module.css'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export default function SingleMealPage({params}) {

  //getting the meal
  const meal = getMeal(params.slug)

  if(!meal){
    notFound()
  }

  //NOTE: Overifing the instructions so they display  better
  meal.instructions = meal.instructions.replace(/\n/g, '<br />' );
  
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a></p>
          <p className={classes.summery}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p className={classes.instructions} dangerouslySetInnerHTML={{
          __html: meal.instructions
        }}></p>
      </main>
    </>
  )
}
