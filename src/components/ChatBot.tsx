import React, {useState} from 'react';
import './ChatBot.css'

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: Record<'gr' | 'en', FAQItem[]> = {
    gr: [
        {
            question: 'Τι είναι ο πλάτανος;',
            answer: 'Ο πλάτανος ή το πλατάνι είναι δέντρο του γένους Platanus.Πρόκειται για μεγάλα δέντρα, με ύψος που κυμαίνεται από 30 έως 50 μέτρα, φυλλοβόλα (εκτός από το είδος P. kerrii). Συναντώνται στις όχθες ποταμών και γενικά σε υγροτόπους και τοποθεσίες όπου υπάρχει νερό, μπορούν όμως να επιβιώσουν και στην ξηρασία. Το υβριδικό είδος πλάτανος του Λονδίνου προσαρμόζεται χωρίς προβλήματα σε αστικό περιβάλλον, αλλά και γενικά τα περισσότερα είδη.',
        },

        {
            question: 'Τι συμβαίνει στον πλάτανο;',
            answer: 'H Ceratocystis platani («κερατοκύστις της πλατάνου») είναι ένας μύκητας που προσβάλλει τα πλατάνια.',
         },
    ],

    en: [
        {
            question: 'What is a plane tree?',
            answer: 'A plane tree is a ...',
        },
        {
            question: 'What happend to the plane tree?',
            answer: 'Ceratocystic platani ...',
        },
    ],
};

const ChatBot: React.FC = () => {
    const[isOpen, setIsOpen] = useState(false);
    const[selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const [language, setLanguage] = useState<'gr' | 'en'>('gr'); //for selecting a language
    const toggleChat = () => {
        setIsOpen(!isOpen);
        setSelectedAnswer(null);
        setSelectedIndex(null);
    };

    const faqList = faqData[language];

    return(
        <div>
            {/*Floating Button*/}
            <button className="chatButton" onClick={toggleChat}>
                🤖 
            </button>

            {/*Chat Window*/}
            {isOpen && (
                <div className = "chatWindow">
                    <div className='languageToggle'>
                        <button
                            className={language === 'gr' ? 'activeLang' : ''}
                            onClick={()=>setLanguage('gr')}
                            >
                                <img src = "https://static.igem.wiki/teams/5684/wikipics/gr-language.webp" alt="Greek Language" className='langFlag' />
                        </button>
                        <button
                            className={language === 'en' ? 'activeLang' : ''}
                            onClick={()=>setLanguage('en')}
                            >
                                <img src = "https://static.igem.wiki/teams/5684/wikipics/en-language.webp" alt="English Language" className='langFlag' />
                        </button>
                    </div>

                    <h4 className="chatTitle">
                        {language === 'gr' ? 'Διάλεξε μια ερώτηση' : 'Select a question'}
                    </h4>

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
                            <strong>{language === 'gr' ? 'Απάντηση:' : 'Answer'}</strong>
                            <p>{selectedAnswer}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ChatBot;