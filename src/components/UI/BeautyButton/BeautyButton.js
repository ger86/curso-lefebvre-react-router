import React from "react";
import PropTypes from 'prop-types';
import styles from "./BeautyButton.module.css";

BeautyButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default function BeautyButton({ text, onClick }) {
  console.log(styles);
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
}
