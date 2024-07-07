import FormIcon from "@/ui/FormIcon"
import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from './form.module.scss';

export default function Form() {
  const { handleSubmit, register, formState: { errors } } = useForm();

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "da062967-9be4-48a2-96c3-e7c28b710b63");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const validateName = (name) => {
    if (!name) {
      return "Ім'я не може бути пустим.";
    }

    if (name.length < 2 || name.length > 50) {
      return "Ім'я повинно бути від 2 до 50 символів.";
    }

    const regex = /^[a-zA-Zа-яА-ЯёЁіІїЇєЄ']+$/;
    if (!regex.test(name)) {
      return "Ім'я може містити тільки літери.";
    }

    return true;
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      return "Електронна пошта не може бути пустою.";
    }

    if (!regex.test(email)) {
      return "Будь ласка, введіть дійсну електронну пошту.";
    }

    return true;
  };

  const validateText = (text) => {
    if (text.length > 150) {
      return "Поле повинно містити не більше 150 символів."
    }

    return true;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form} action="https://api.web3forms.com/submit" method="POST">
      <input type="hidden" name="access_key" value="da062967-9be4-48a2-96c3-e7c28b710b63"></input>
      <div className={styles.input}>
        <div className={styles.inputContainer}>
          <div className="inputField">
            <input
              className={styles.border}
              id="input"
              type="text"
              placeholder="Name"
              {...register('Name', { required: "Ім'я обов'язкове", validate: validateName })}
            />
            {errors.Name && <p className={styles.error}>{errors.Name.message}</p>}
          </div>

          <div className="inputField">
            <input
              id="secondInput"
              className={styles.border}
              type="text"
              placeholder="Your E-mail"
              {...register('Email', { required: "Електронна пошта обов'язкова", validate: validateEmail })}
            />
            {errors.Email && <p className={styles.error}>{errors.Email.message}</p>}
          </div>
        </div>

        <div className={styles.select}>
          <select className={styles.selectBorder} id="thirdInput">
            <option className={styles.options} value="" disabled selected>
              How did you hear about me?
            </option>
            <option className={styles.options} value="friend">From a friend</option>
            <option className={styles.options} value="socialMedia">Social Media</option>
            <option className={styles.options} value="other">{'Other (please specify below)'}</option>
          </select>
          <div className={styles.formIcon}><FormIcon /></div>
        </div>

        <textarea
          className={styles.textArea}
          type="textarea"
          placeholder="How did you hear about me?"
          {...register('About', { validate: validateText })}
        />
        {errors.About && <p className={styles.error}>{errors.About.message}</p>}
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>Submit</button>
      </div>
    </form>

  )
}