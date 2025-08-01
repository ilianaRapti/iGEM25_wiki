import React, {useState} from 'react';
import './ChatBot.css'

interface FAQItem {
    question: string;
    answer: string;
}

const faqList: FAQItem[] = [
    {
        question: 'Τι είναι ο πλάτανος;',
        answer: 'Ο πλάτανος ή το πλατάνι είναι δέντρο του γένους Platanus.Πρόκειται για μεγάλα δέντρα, με ύψος που κυμαίνεται από 30 έως 50 μέτρα, φυλλοβόλα (εκτός από το είδος P. kerrii). Συναντώνται στις όχθες ποταμών και γενικά σε υγροτόπους και τοποθεσίες όπου υπάρχει νερό, μπορούν όμως να επιβιώσουν και στην ξηρασία. Το υβριδικό είδος πλάτανος του Λονδίνου προσαρμόζεται χωρίς προβλήματα σε αστικό περιβάλλον, αλλά και γενικά τα περισσότερα είδη.'
    },

    {
        question: 'Τι συμβαίνει στον πλάτανο;',
        answer: 'H Ceratocystis platani («κερατοκύστις της πλατάνου») είναι ένας μύκητας που προσβάλλει τα πλατάνια.'
    },
];

const ChatBot: React.FC = () => {
    const[isOpen, setIsOpen] = useState(false);
    const[selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const toggleChat = () => {
        setIsOpen(!isOpen);
        setSelectedAnswer(null);
        setSelectedIndex(null);
    };

    return(
        <div>
            {/*Floating Button*/}
            <button className="chatButton" onClick={toggleChat}>
                🤖
            </button>

            {/*Chat Window*/}
            {isOpen && (
                <div className = "chatWindow">
                    <h4 className="chatTitle">Διάλεξε μια ερώτηση</h4>
                    {faqList.map((item,index) => (
                        <button
                            key={index}
                            className={`questionButton ${selectedIndex === index ? 'selected' : ''}`}                            onClick={() => {
                                setSelectedAnswer(item.answer);
                                setSelectedIndex(index);
                            }}
                        >
                            {item.question}
                        </button>
                    ))}
                    {selectedAnswer && (
                        <div className="answerBox">
                            <strong>Απάντηση:</strong>
                            <p>{selectedAnswer}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ChatBot;