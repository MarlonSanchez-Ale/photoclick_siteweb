import ContactForm from "../../elements/Form/ContactForm"

export default function Contact() {
    return (
        <section id="contact" className="min-h-[90vh] flex flex-col items-center sm:p-2 md:p-10 gap-5 my-10 bg-pc_gray_white">
            <div className="flex flex-col items-center text-center p-5 gap-5">
                <h1 className="title">
                    {`Let's talk`}
                </h1>
                <p className="subtitle">
                    We are ready to start new adventures together and capture the best moments
                </p>
            </div>

            <div className="grid place-items-center mb-20">
                <ContactForm />
            </div>
        </section>
    )
}
