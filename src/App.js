import { useState } from "react";
import FormInput from "./component/FormInput";

function App() {
  const [values, setValues] = useState({
    username: "",
    email: '',
    birthDay: '',
    password: '',
    confirmPassword: '',
  });

  const inputs = [{
    id: 1,
    name: 'username',
    type: 'text',
    placeholder: 'UserName',
    label: 'UserName'
  },
  {
    id: 2,
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    label: 'Email'
  },
  {
    id: 3,
    name: 'birthday',
    type: 'date',
    placeholder: 'Birthday',
    label: 'Birthday'
  },
  {
    id: 4,
    name: 'password',
    type: 'text',
    placeholder: 'Password',
    label: 'Password'
  },
  {
    id: 5,
    name: 'confirmPassword',
    type: 'text',
    placeholder: 'ConfirmPassword',
    label: 'ConfirmPassword'
  }
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  console.log(values)
  return (
    <section className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className="flex items-center justify-center h-screen ">
        <form onSubmit={handleSubmit} className="bg-white py-0 px-16 rounded-xl text-lg font-semibold">
          {inputs.map((input) => (
            <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
          ))}
          <button className="w-full h-auto p-3 bg-indigo-600 rounded-md font-semibold text-xl text-white
          cursor-pointer mt-3 mb-4 hover:bg-indigo-900 hover:text-black transition ">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default App;
