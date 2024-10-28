import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

function EndSectionForm() {
  return (
    <Formik
      initialValues={{
        email: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .required("This field is required")
          .email("Please enter a valid email address")
      })}
    >
      {({ values}) => (
        <Form>
          <div className="max-w-[350px] my-10 mx-auto">
            <div className="flex items-center">
              <Field
                className="w-full p-[10px] text-[12px] outline-none flex border border-black rounded-es-[5px] rounded-ss-[5px]"
                name="email"
                type="text"
                placeholder="10% Off for Sign Up"
              />
              <button
              className="form-button"
                type="submit"
                disabled={!values.email}
                style={{
                  opacity: !values.email ? 0.65 : 1
                }}>
                Subscribe
              </button>
            </div>
            <ErrorMessage
              className="text-[red] text-[12px] mt-[2px] text-center"
              name="email"
              component="div"
            />  
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default EndSectionForm;
