import FormIcon from "@/ui/FormIcon";
import { useForm } from "react-hook-form";
import styles from './form.module.scss';

export default function Form() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const sendEmail = async (data) => {
    try {
      const response = await fetch('/api/sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          to: 'kostrubitskiiwork@gmail.com',
          name: data.Name,
          subject: 'Potential Client',
          body: `
          <table cellspacing="0" cellpadding="0" border="0" style="width: 100%; font-size: 16px;">
            <tr>
              <td style="padding-bottom: 10px;">
                <h1>Hi, Vlad!</h1>
                <p>A new message has been received from your site</p>
              </td>
            </tr>

            <tr>
              <td>
                <table cellspacing="0" cellpadding="0" border="0"; font-size: 16px;">
                  <tr style="display: flex, align-items: center, gap: 20px;">
                    <td style="padding-right: 20px">From:</td>
                    <td >Friend</td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td>
                <h2>Email: ${data.Email}</h2>
                <p>Hi, my name is ${data.Name}. <br>${data.About}</p>
              </td>
            </tr>
          </table>
          `
        })
      });

      const result = await response.json();

      console.log(result);

      if (response.ok) {
        console.log('Email sent successfully');
        reset();
      } else {
        console.log('Error sending email:', result.message);
      }
    } catch (error) {
      console.error('Unexpected error:', error);
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
    if (!email.trim()) {
      return "Електронна пошта не може бути пустою.";
    }

    if (!regex.test(email.trim())) {
      return "Введіть дійсну електронну пошту.";
    }

    return true;
  };

  const validateText = (text) => {
    if (text.length > 250) {
      return "Поле повинно містити не більше 150 символів.";
    }

    return true;
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(sendEmail)}>
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
          <select
            className={styles.selectBorder}
            id="thirdInput"
            {...register('Source')}
          >
            <option className={styles.options} value="" disabled selected>
              How did you hear about me?
            </option>
            <option className={styles.options} value="Friend">From a friend</option>
            <option className={styles.options} value="SocialMedia">Social Media</option>
            <option className={styles.options} value="Other">{'Other (please specify below)'}</option>
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
        <button type="submit" className={styles.button}>Submit</button>
      </div>
    </form>
  );
}