import classes from '../../error.module.css'
export default function NotFound(){
  return (
  <main className={classes['not-found']}>
      <h1>Meal Not Found</h1>
      <p>Sorry! We could not find the selected meal</p>
    </main>
  )
}
