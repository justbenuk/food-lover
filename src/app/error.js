'use client'
import classes from './error.module.css'

export default function Error() {
  return <main className={classes.error}>
    <h1>An Error Accured</h1>
    <p>Failed to fetch meal data</p>
  </main>
}
