import classes from "./loading.module.css";

export default function LoadingPage() {
  return (
    <h2 className={classes.loading}>
      Please wait, while we fetch the details..
    </h2>
  );
}
