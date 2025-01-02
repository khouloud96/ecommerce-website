import Link from "next/link";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";

import Layout from "../layouts/Main";
import { server } from "../utils/server";
import { postData } from "../utils/services";

type ForgotMail = {
  email: string;
  password: string;
};

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotMail>();

  const onSubmit: SubmitHandler<ForgotMail> = async (data) => {
    await postData(`${server}/api/login`, {
      email: data.email,
      password: data.password,
    });
  };

  return (
    <Layout>
      <section className="form-page">
        <div className="container">
          <div className="back-button-section">
            <Link href="/products">
              <i className="icon-left" />
              Back to shop
            </Link>
          </div>

          <div className="form-block">
            <h2 className="form-block__title">Forgot your password?</h2>
            <p className="form-block__description">
              Enter your email or phone number and recover your account
            </p>

            <form className="form" onSubmit={handleSubmit(onSubmit)}>
              <div className="form__input-row">
                <input
                  className="form__input"
                  placeholder="email"
                  type="text"
                  {...register("email", {
                    required: "This field is required",
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Please write a valid email",
                    },
                  })}
                />
                {errors.email && (
                  <p className="message message--error">
                    {typeof errors.email.message === "string" &&
                      errors.email.message}
                  </p>
                )}
              </div>

              <div className="form__input-row">
                <input
                  className="form__input"
                  type="password"
                  placeholder="Password"
                  {...register("password", {
                    required: "This field is required",
                  })}
                />
                {errors.password && (
                  <p className="message message--error">
                    {typeof errors.password.message === "string" &&
                      errors.password.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="btn btn--rounded btn--yellow btn-submit"
              >
                Reset password
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ForgotPassword;
