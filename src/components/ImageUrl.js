/** @jsx jsx */
import { css, jsx } from "@emotion/core";
const ImageUrl = ({ placeholderImg, setPlaceholderImg }) => {

   const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setPlaceholderImg(URL.createObjectURL(event.target.files[0]));
    }
   }

  return (
    <div className="imageUrl" css={styles}>
  <input type="file" onChange={onImageChange} className="filetype" id="group_image"/>

    </div>
  );
};

const styles = css`
  input {
    width: 300px;
    padding: 10px;
    background: transparent;
    border: 1px solid #645b98;
    margin-bottom: 10px;
    outline: none;
    color: #f1f1f1;
    letter-spacing: 1px;
    font-size: 20px;
    font-weight: bold;
    &::placeholder {
      color: #f1f1f1;
    }
  }
`;

export default ImageUrl;
