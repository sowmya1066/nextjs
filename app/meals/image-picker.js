"use client";
import classes from "./image-picker.module.css";
import { useRef, useState } from "react";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const ImageInput = useRef();

  function handleOnClick() {
    ImageInput.current.click();
  }

  function handleImagePick(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No imahe picked yet.</p>}
          {pickedImage && (
            <Image src={pickedImage} alt="image picked by user" fill />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={ImageInput}
          onChange={handleImagePick}
          required
        />
      </div>
      <button className={classes.button} onClick={handleOnClick} type="button">
        Pick a image
      </button>
    </div>
  );
}
