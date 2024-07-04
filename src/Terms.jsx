import { useCallback, useState } from "react";
import emailjs from "@emailjs/browser"
import React, {useRef} from "react";
import JSConfetti from 'js-confetti';

const Terms = () => {
    const jsconfetti = new JSConfetti();
    const [name, setName] = useState('')
    const [answer, setAnswer] = useState()
    const [message, setMessage] = useState('')
    const [confetti, setConfetti] = useState(false)

    const form = useRef();

    const sendEmail = (e) => {
            e.preventDefault();

            const serviceID = 'service_pma3dql'
            const templateID = 'template_g7yemgc'
            const publicKey = '7rv-9u7Zg-84Mkoh-'

            const templateParams = {
            from_name: name,
            to_name: 'Brandon',
            answer: answer,
            message: message,
            
        }
        emailjs.send(serviceID, templateID, templateParams, publicKey)
        .then((response) => {
            console.log('Email sent successfully', response)
            setName('');
            setAnswer('');
            setMessage('');
        }).catch((error) => {
            console.error('Error sending email', error);
        });
    }

    const useConfetti = useCallback(() => {
        setConfetti(true)
        if (confetti == true ){
            jsconfetti.addConfetti()
        }
    }) 


    return (
        <div className="h-screen bg-black">
            <div className=" px-4 mx-auto max-w-screen-md  rounded-lg">
            <div className="p-4">
                <div>
                <h2 className="mb-4 text-4xl tracking-tight text-center text-pink font-Modak">Do you still want to be my girlfriend?</h2>
                
                </div>
                <form ref={form} onSubmit={sendEmail} className="space-y-8">
                    <div>
                        <label htmlFor="fname" className="block mb-2 text-sm font-medium text-white text-pink">Name</label>
                        <input className="shadow-sm bg-black border border-pink text-pink text-sm rounded-lg "
                            type="text" 
                            name="user_name"
                            id="fname" 
                            placeholder="Raymi" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required/>
                    </div>
                    <div>
                    <div class="flex items-center mb-4">
                        <input id="default-radio-1" type="radio" value={answer} onChange={(e) => setAnswer(e.target.value)} name="gf_answer" className="w-4 h-4 text-pink bg-black border-pink  focus:ring-2 "/>
                        <label for="default-radio-1" class="ms-2 text-sm font-medium text-pink">Yes, I would love to be your girlfriend</label>
                    </div>
                    <div class="flex items-center">
                        <input  disabled id="default-radio-2" type="radio" value={answer} name="gf_answer" className="w-4 h-4 text-pink bg-black border-pink  focus:ring-2"/>
                        <label for="default-radio-2" class="ms-2 text-sm font-medium text-pink ">No, I do not</label>
                    </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-pink">Any additional messages?</label>
                        <textarea className="block p-2.5 w-full text-sm text-pink bg-black rounded-lg shadow-sm border border-pink "
                            id="message" 
                            name="message" 
                            rows="6" 
                            placeholder="Leave a comment..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)} 
                            > 
                            </textarea>
                    </div>
                    <button type="submit" onClick={useConfetti} className="py-3 px-5 text-sm font-medium text-center text-pink rounded-lg bg-black sm:w-fit focus:ring-4 focus:outline-none border">Send message</button>
                </form>
             </div>
        </div>
        </div>
    )
}

export default Terms;