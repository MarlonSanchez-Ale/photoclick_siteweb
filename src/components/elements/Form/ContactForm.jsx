//import React from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup
  .object({
    name: yup.string().required(),
    subject: yup.string().required(),
    email: yup.string().email().required(),
    cellphone: yup.number().integer().required(),
    message: yup.string().required()
  })
  .required()

export default function ContactForm() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid sm:grid-cols-1 md:grid-cols-2 items-center sm:w-full md:w-[90vh] p-10 rounded-md gap-5 border border-white">
      <div>
        <input
          id="name"
          className="input"
          placeholder="Name"
          type="text"
          {...register('name')}
        />
        <p>{errors.name?.message}</p>
      </div>
      <div>
        <input
          id="subject"
          className="input"
          placeholder="Subject"
          type="text"
          {...register('subject')}
        />
        <p>{errors.subject?.message}</p>
      </div>
      <div>
        <input
          id="email"
          className="input"
          placeholder="Email"
          type="email"
          {...register('email')}
        />
        <p>{errors.email?.message}</p>
      </div>
      <div>
        <input
          id="cellphone"
          className="input"
          placeholder="86978687"
          type="number"
          {...register('cellphone')}
        />
        <p>{errors.cellphone?.message}</p>
      </div>
      <div>
        <textarea
          id="message"
          className="input"
          placeholder="Your message here"
          {...register('message')} />
        <p>{errors.message?.message}</p>
      </div>
      <button type="submit" className="btn_primary w-full">Send message</button>
    </form>
  )
}
