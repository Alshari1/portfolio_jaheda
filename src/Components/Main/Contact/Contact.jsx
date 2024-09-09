
import ContactForm from "./ContactForm";
import Pricing from "./Pricing";

const Contact = () => {
    return (
        <div id="contact" className="flex flex-col md:fle-col lg:flex-row">
            <div className=" w-full lg:w-1/2">
                <ContactForm></ContactForm>
            </div>
            <div className=" w-full lg:w-1/2 lg:ml-5">
                <Pricing></Pricing>
            </div>
        </div>
    );
};

export default Contact;