"use client";
import classes from "./image-picker.module.css";
import { useRef } from "react";

export default function ImagePicker({ label, name }) {
  const ImageInput = useRef();

  function handleOnClick() {
    ImageInput.current.click();
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={ImageInput}
        />
      </div>
      <button className={classes.button} onClick={handleOnClick} type="button">
        Pick a image
      </button>
    </div>
  );
}
