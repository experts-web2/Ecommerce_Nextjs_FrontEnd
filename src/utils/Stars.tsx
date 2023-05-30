import ReactStars from "react-stars";
export default function Rating(props: any) {
  return (
    <ReactStars
      count={5}
      size={24}
      color2={"#ffd700"}
      value={props.rating}
      edit={false}
    />
  );
}
