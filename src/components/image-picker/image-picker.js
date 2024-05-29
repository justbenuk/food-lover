'use client'
import classes from './image-picker.module.css'
import { useRef, useState } from 'react'
import Image from 'next/image'
export default function ImagePicker({ label, name }) {

  const imageInput = useRef()
  const [pickedImage, setPickedImage] = useState()

  function handleClick() {
    imageInput.current.click()
  }

  function handleChange(e) {
    const file = e.target.files[0]

    if (!file) {
      setPickedImage(null)
      return
    }

    const fileReader = new FileReader()
    fileReader.onload = () => {
      setPickedImage(fileReader.result)
    }
    fileReader.readAsDataURL(file)

  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No Image Picked Yet</p>}
          {pickedImage && <Image src={pickedImage} alt='Image seclected by user' fill />}
        </div>
        <input className={classes.input} type='file' id={name} accept='image/png, image/jpeg' name={name} ref={imageInput} onChange={handleChange} required />
        <button className={classes.button} type='button' onClick={handleClick}>Pick An Image</button>
      </div>
    </div>
  )
}
